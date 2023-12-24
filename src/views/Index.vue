<template>
  <div class="text-3xl font-bold text-center">
    <span @click="onPrev">prev   </span>
    <span>{{ date.format(`YYYY-MM`) }}</span>
    <span @click="onNext">   next</span>
  </div>
  
  <div class="flex justify-center">
    <div class="w-full max-w-3xl h-72">
      <canvas :id="chart_id"></canvas>
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
  import { ref, reactive, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  // import Chart from 'chart.js/auto'
  import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
  import { getDatabase, ref as dbRef, set as dbSet, onValue } from 'firebase/database'
  import { DB_PATH_USER, DB_PATH_BLUE_ARCHIVE_CURRENCY, find, getDayjsNoTime } from '@/utils'

  // TODO: Update user data to store the latest currency (for prediction)
  // TODO: Prediction line

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
  )

  const store = useStore()
  
  const chart_id = `chart`
  let $chart = null
  const date = ref(dayjs())
  const currencies = ref([])

  const auth = reactive(store.state.auth)
  
  const current_year = dayjs().year()
  const current_month = dayjs().month() + 1 // due to month start at 0 to 11
  const current_day = dayjs().date()
  const daysInMonth = date.value.daysInMonth()
  const averageGain = 12000/daysInMonth
  const latestData = ref({
    pyroxene: 0,
    free_pull: 0
  })

  const database = getDatabase(store.state.firebase)

  const form = ref({
    date: ``,
    pyroxene: undefined,
    free_pull: undefined
  })
  const options = ref({
    years: [],
    months: [],
    dates: []
  })

  for (let i = current_year; i >= 2022; i--) {
    let year = {
      value: i,
      label: i
    }
    options.value.years.push(year)

    if (current_year === i) form.value.year = i
  }

  for (let i = 1; i <= 12; i++) {
    let month = {
      value: i,
      label: i <= 9 ? `0${i}` : i
    }
    options.value.months.push(month)

    if (current_month === i) form.value.month = i
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let optionDate = {
      value: i,
      label: i <= 9 ? `0${i}` : i
    }
    options.value.dates.push(optionDate)

    if (current_day === i) form.value.date = i
  }

  const setLatestRecord = () => {
    const user = store.state.user
    if (user.blue_archive && user.blue_archive.currency) {
      latestData.value.pyroxene = user.blue_archive.currency.pyroxene
      latestData.value.free_pull = user.blue_archive.currency.free_pull
    }
  }
  setLatestRecord()

  const onSave = () => {
    if (auth.currentUser) {
      const saveDate = dayjs(`${form.value.year}-${form.value.month}-${form.value.date}`)
      const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${saveDate.format(`YYYY-MM`)}`
      const formData = {
        pyroxene: form.value.pyroxene,
        free_pull: form.value.free_pull,
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
      form.value.pyroxene = undefined
      form.value.free_pull = undefined

      setLatestRecord()
      updateChartData()
    }
  }

  const setCurrenyDataFromYearMonth = (year, month) => {
    const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${year}-${month}`
    const dbData = dbRef(database, dbPath)
    onValue(dbData, snapshot => {
      let data = snapshot.val() || []
      data = data.filter(item => item)
      data.sort((a,b) => {
        if (a.day > b.day) return 1
        else if (a.day < b.day) return -1
        else return 0
      })

      currencies.value = [...data]
      updateChartData()
    })
  }
  setCurrenyDataFromYearMonth(current_year, current_month)

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

  const changeYearMonth = (year, month) => {
    date.value = dayjs(`${year}-${month}-01`)
    setCurrenyDataFromYearMonth(year, month)
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
        totalCurrency = currency.pyroxene + (currency.free_pull*120)
        data.push(totalCurrency)
      }

      // will bug with 0 pyrox, but whatever
      const dateDiff = latestOnlyDate.diff(plotDayDate, `day`)
      if (currentTotal <= 0 || dateDiff > 0) {
        predictData.push(null)
      } else {
        const predictCurrency = Math.floor(((dateDiff * -1) * averageGain) + currentTotal)
        predictData.push(predictCurrency)
      }
    }

    $chart.data.labels = labels
    $chart.data.datasets[0].data = data
    $chart.data.datasets[1].data = predictData
    $chart.update()
  }

  const applyChart = () => {
    $chart = new Chart(document.querySelector(`#${chart_id}`), {
      type: `line`,
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            borderColor: `#00D8FB`,
            backgroundColor: `#FFFFFF`
          },
          {
            data: [],
            borderColor: `#FFE9F2`,
            backgroundColor: `#FFFFFF`
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
  

  onMounted(() => {
    applyChart()
    updateChartData()
  })
</script>
