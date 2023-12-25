<template>
  <div class="text-3xl font-bold text-center">
    <span @click="onPrev">prev   </span>
    <span>{{ date.format(`YYYY-MM`) }}</span>
    <span @click="onNext">   next</span>
  </div>
  
  <div class="flex justify-center">
    <div class="w-full max-w-3xl h-72">
      <LineChart
        :labels="chartProps.labels"
        :data="chartProps.data"
      ></LineChart>
    </div>
  </div>

  <div class="mt-3 border border-gray-300 rounded-xl">
    <div class="h-8 bg-slate-300 rounded-t-xl"></div>
    <div class="bg-white rounded-b-xl">
      <div class="p-2">
        <label>
          Year: 
          <select v-model="form.year">
            <option
              v-for="year in options.years"
              :value="year.value"
            >
              {{ year.label }}
            </option>
          </select>
        </label>

        <label>
          Month: 
          <select v-model="form.month">
            <option
              v-for="month in options.months"
              :value="month.value"
            >
              {{ month.label }}
            </option>
          </select>
        </label>

        <label>
          Date: 
          <select v-model="form.date">
            <option
              v-for="date in options.dates"
              :value="date.value"
            >
              {{ date.label }}
            </option>
          </select>
        </label>

        <br>

        <label>
          Pyroxenes: 
          <input type="number" v-model="form.pyroxene" :placeholder="latestData.pyroxene">
        </label>

        <label>
          Free Pulls (Ticket):
          <input type="number" v-model="form.free_pull" :placeholder="latestData.free_pull">
        </label>

        <br>

        <button @click="onSave">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, watch, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import { getAuth } from 'firebase/auth'
  import { getDatabase, ref as dbRef, set as dbSet, onValue } from 'firebase/database'
  import { 
    DB_PATH_USER, DB_PATH_BLUE_ARCHIVE_CURRENCY, find, getDayjsNoTime, 
    getOptionsYear, getOptionsMonth, getOptionsDay, getBlueArchiveCurrencyToPull
  } from '@/utils'
  import LineChart from '@/components/LineChart.vue'

  // TODO: Switch between pyroxene view and pull view
  // TODO: Banner List
  // TODO: Able to select Banner to pull
  // TODO: Able to add pyrox use at specific date 
  // TODO: Able to delete add pyrox use
  // TODO: Remove email and has a page to input in game name instead (required for active account)

  const store = useStore()
  const date = ref(dayjs())
  const currencies = ref([])
  
  const current_year = dayjs().year()
  const current_month = dayjs().month() + 1 // due to month start at 0 to 11
  const current_day = dayjs().date()
  const daysInMonth = date.value.daysInMonth()
  const averageGain = 12000/daysInMonth
  const latestData = ref({
    pyroxene: 0,
    free_pull: 0
  })

  const auth = getAuth()
  const database = getDatabase()

  const form = reactive({
    day: ``,
    pyroxene: undefined,
    free_pull: undefined,
    year: current_year,
    month: current_month,
    date: current_day
  })
  const options = reactive({
    years: getOptionsYear(),
    months: getOptionsMonth(),
    dates: getOptionsDay(current_year, current_month)
  })
  
  const chartProps = ref({
    labels: [],
    data: []
  })

  watch(
    () => ({...form}),
    (newValue, oldValue) => {
      if (newValue.month !== oldValue.month || newValue.year !== oldValue.year) {
        options.dates = [...getOptionsDay(newValue.year, newValue.month)]

        if (options.dates.length < form.date) {
          form.date = 1
        }
      }
    }
  )

  const setLatestRecord = () => {
    const user = store.state.user
    if (user.blue_archive && user.blue_archive.currency) {
      latestData.value.pyroxene = user.blue_archive.currency.pyroxene
      latestData.value.free_pull = user.blue_archive.currency.free_pull
    }
  }

  const setCurrenyDataFromYearMonth = (year, month) => {
    const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${year}-${month}`
    const dbData = dbRef(database, dbPath)
    onValue(dbData, snapshot => {
      let data = snapshot.val() || []
      data = data.filter(item => item) // for clearing index with null data
      data.sort((a,b) => {
        if (a.day > b.day) return 1
        else if (a.day < b.day) return -1
        else return 0
      })

      currencies.value = [...data]
      updateChartData()
    })
  }

  const changeYearMonth = (year, month) => {
    date.value = dayjs(`${year}-${month}-01`)
    setCurrenyDataFromYearMonth(year, month)
  }
  
  const onPrev = () => {
    let toYear = date.value.year()
    let toMonth = date.value.month()+1-1 // +1 due to month start at 0, -1 because wantting to go to previous month

    if (toMonth <= 0) {
      toMonth = 12
      toYear--
    }

    changeYearMonth(toYear, toMonth)
  }

  const onNext = () => {
    let toYear = date.value.year()
    let toMonth = date.value.month()+1+1 // +1 due to month start at 0, +1 because wantting to go to next month

    if (toMonth > 12) {
      toMonth = 1
      toYear++
    }

    changeYearMonth(toYear, toMonth)
  }

  const onSave = () => {
    if (auth.currentUser) {
      const saveDate = dayjs(`${form.year}-${form.month}-${form.date}`)
      const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${saveDate.format(`YYYY-MM`)}`
      const formData = {
        pyroxene: form.pyroxene,
        free_pull: form.free_pull,
        day: saveDate.format(`YYYY-MM-DD`)
      }

      if (isNaN(formData.pyroxene)) {
        formData.pyroxene = latestData.value ? latestData.value.pyroxene : 0
      }

      if (isNaN(formData.free_pull)) {
        formData.free_pull = latestData.value ? latestData.value.free_pull : 0
      }

      let currentDateindex = -1
      currencies.value.forEach((currency, index) => {
        if (currency.day === saveDate.format(`YYYY-MM-DD`)) {
          currentDateindex = index
          return false
        }
      })
      
      if (currentDateindex <= -1) {
        currencies.value.push(formData)
      } else {
        currencies.value.splice(currentDateindex, 1, formData)
      }
      dbSet(dbRef(database, dbPath), currencies.value)
      
      // Set latest record to user
      const dbUserPath = `${DB_PATH_USER}/${auth.currentUser.uid}`
      const dbUser = dbRef(database, dbUserPath)
      onValue(dbUser, snapshot => {
        const user = snapshot.val()
        
        if (!user) {
          window.alert(`No user data found!!`)
        } else {
          if (!user.blue_archive) {
            user.blue_archive = {
              currency: formData
            }
          } else {
            const saveDateDay = getDayjsNoTime(formData.day)
            const latestDay = getDayjsNoTime(user.blue_archive.currency.day)
            const dateDiff = latestDay.diff(saveDateDay, `day`)

            if (dateDiff <= 0) {
              user.blue_archive = {
                currency: formData
              }
            }
          }

          dbSet(dbRef(database, dbUserPath), user)
          store.commit(`setUser`, user)
        }
      })

      // reset form
      form.pyroxene = undefined
      form.free_pull = undefined

      setLatestRecord()
      updateChartData()
    }
  }

  const updateChartData = () => {
    const labels = []
    const data = []
    const predictData = []
    const user = store.state.user
    let currentTotal = 0
    let latestOnlyDate = null

    if (user.blue_archive && user.blue_archive.currency) {
      currentTotal = user.blue_archive.currency.pyroxene + (user.blue_archive.currency.free_pull * 120)
      latestOnlyDate = getDayjsNoTime(user.blue_archive.currency.day)
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const day = `${i}`.length === 1 ? `0${i}` : i
      const plotDay = `${date.value.format(`YYYY-MM`)}-${day}`
      const plotDayDate = getDayjsNoTime(`${plotDay}`)
      labels.push(plotDay)
      
      let totalCurrency = 0
      const currency = find(currencies.value, `day`, plotDay)
      if (!currency) {
        data.push(null)
      } else {
        totalCurrency = getBlueArchiveCurrencyToPull((currency.pyroxene + (currency.free_pull*120)))
        data.push(totalCurrency)
      }

      // will bug with 0 pyrox, but whatever
      const dateDiff = latestOnlyDate.diff(plotDayDate, `day`)
      if (currentTotal <= 0 || dateDiff > 0) {
        predictData.push(null)
      } else {
        const predictCurrency = getBlueArchiveCurrencyToPull(((dateDiff * -1) * averageGain) + currentTotal)
        predictData.push(predictCurrency)
      }
    }

    chartProps.value.labels = labels
    chartProps.value.data = [data, predictData]
  }

  onMounted(() => {
    setLatestRecord()
    setCurrenyDataFromYearMonth(current_year, current_month)
  })
</script>
