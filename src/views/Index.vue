<template>
  <div class="text-3xl font-bold text-center">{{ date.format(`YYYY-MM`) }}</div>
  
  <div class="flex justify-center">
    <div class="w-full max-w-3xl h-72">
      <canvas ref="chart"></canvas>
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
          <input type="number" v-model="form.pyroxene">
        </label>

        <label>
          Free Pulls (Ticket):
          <input type="number" v-model="form.free_pull">
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
  import { DB_PATH_BLUE_ARCHIVE_CURRENCY } from '@/utils'

  // TODO: Switch to different month/year
  // TODO: Placeholder of the recent record
  // TODO: if no value provide, use old value record (same as the placeholder)

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
  )

  const store = useStore()
  
  const chart = ref(null)
  const date = reactive(dayjs())
  const currencies = ref([])

  const auth = reactive(store.state.auth)
  const current_year = dayjs().year()
  const current_month = dayjs().month() + 1 // due to month start at 0 to 11
  const current_day = dayjs().date()
  const daysInMonth = date.daysInMonth()

  const database = getDatabase(store.state.firebase)

  const form = ref({
    date: ``,
    pyroxene: 0,
    free_pull: 0
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

  const onSave = () => {
    if (auth.currentUser) {
      const saveDate = dayjs(`${form.value.year}-${form.value.month}-${form.value.date}`)
      const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${saveDate.format(`YYYY-MM`)}`
      const formData = {
        pyroxene: form.value.pyroxene,
        free_pull: form.value.free_pull,
        day: saveDate.format(`YYYY-MM-DD`)
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
    }
  }

  const labels = []
  const data = []
  
  const setCurrenyDataFromYearMonth = (year, month) => {
    const dbPath = `${DB_PATH_BLUE_ARCHIVE_CURRENCY}/${auth.currentUser.uid}/${year}-${month}`
    const dbData = dbRef(database, dbPath)
    onValue(dbData, snapshot => {
      const data = snapshot.val()
      console.log(data)
      if (data) {
        currencies.value = [...data]
      }
    })
  }
  setCurrenyDataFromYearMonth(current_year, current_month)

  for (let i = 1; i <= daysInMonth; i++) {
    const day = `${i}`.length === 1 ? `0${i}` : i
    labels.push(`${date.format(`YYYY-MM`)}-${day}`)
    data.push(i)
  }

  onMounted(() => {
    const c = new Chart(chart.value, {
      type: `line`,
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            borderColor: `#A00`,
            backgroundColor: `#00A`
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
          }
        }
      }
    })
  })
</script>
