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
          Date: 
          <input type="date" v-model="form.day">
        </label>

        <br>

        <label>
          Pyroxenes: 
          <input type="number" v-model="form.pyroxene" :placeholder="latest_data.pyroxene">
        </label>

        <label>
          Free Pulls (Ticket):
          <input type="number" v-model="form.free_pull" :placeholder="latest_data.free_pull">
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
  import { find, getDayjsNoTime, getBlueArchiveCurrencyToPull } from '@/utils'
  import LineChart from '@/components/LineChart.vue'

  // TODO: Switch between pyroxene view and pull view
  // TODO: Banner List
  // TODO: Able to select Banner to pull
  // TODO: Able to add pyrox use at specific date 
  // TODO: Able to delete add pyrox use
  // TODO: Remove email and has a page to input in game name instead (required for active account)

  const store = useStore()
  const date = ref(dayjs())
  const currency_own = ref([])
  
  const current_year = dayjs().year()
  const current_month = dayjs().month() + 1 // due to month start at 0 to 11
  const current_day = dayjs().date()
  const average_gain_per_day = 400 // per month will bug with February
  const latest_data = ref({
    date: ``,
    pyroxene: 0,
    free_pull: 0
  })

  const form = reactive({
    day: `${current_year}-${current_month}-${current_day}`,
    pyroxene: undefined,
    free_pull: undefined
  })
  
  const chartProps = ref({
    labels: [],
    data: []
  })

  const setLatestRecord = () => {
    store.dispatch(`ba-currency-own/setGetLatestRecordListen`, (record) => {
      if (record) {
        const keys = Object.keys(record)
        if (keys.length > 0) {
          latest_data.value = {
            date: keys[0],
            ...record[keys[0]]
          }
        }
      }
    })
  }

  const setCurrenyDataFromYearMonth = (year, month) => {
    store.dispatch(`ba-currency-own/setGetRecordsListen`, {
      year,
      month,
      callback: (record) => {
        currency_own.value = record
        updateChartData()
      }
    })
  }

  const changeYearMonth = (new_date) => {
    date.value = new_date
    setCurrenyDataFromYearMonth(new_date.year(), new_date.month())
  }
  
  const onPrev = () => {
    const new_date = date.value.add(-1, `month`).startOf('month')
    changeYearMonth(new_date)
  }

  const onNext = () => {
    const new_date = date.value.add(1, `month`).startOf('month')
    changeYearMonth(new_date)
  }

  const onSave = async () => {
    const form_day = getDayjsNoTime(form.day)
    const data = {
      pyroxene: form.pyroxene,
      free_pull: form.free_pull
    }

    if (isNaN(data.pyroxene)) {
      data.pyroxene = latest_data.value ? latest_data.value.pyroxene : 0
    }
    if (isNaN(data.free_pull)) {
      data.free_pull = latest_data.value ? latest_data.value.free_pull : 0
    }

    store.dispatch(`ba-currency-own/save`, {
      key: form_day.format(`YYYY-MM-DD`),
      data
    })

    // reset form
    form.pyroxene = undefined
    form.free_pull = undefined

    updateChartData()
  }

  const updateChartData = () => {
    const labels = []
    const own_data = []
    const predict_data = []
    const latest_date = latest_data.value ? getDayjsNoTime(latest_data.value.date) : false

    const start_date = date.value.startOf(`month`)
    const end_date = date.value.endOf(`month`)
    const day_amount = (start_date.diff(end_date, `day`) * -1) + 1 // reverse negative then +1 to count the start date as well

    for (let i = 0; i < day_amount; i++) {
      const plot_date = start_date.add(i, `day`)
      const plot_date_string = plot_date.format(`YYYY-MM-DD`)
      const plot_date_own = currency_own.value ? currency_own.value[plot_date_string] : false
      let own_pull = null
      let predict_pull = null
      
      if (plot_date_own) {
        own_pull = getBlueArchiveCurrencyToPull(plot_date_own.pyroxene + (plot_date_own.free_pull * 120))
      }

      if (latest_date) {
        const predict_date_diff = latest_date.diff(plot_date, `day`)
        if (predict_date_diff <= 0) {
          predict_pull = getBlueArchiveCurrencyToPull(
            (predict_date_diff * -1 * average_gain_per_day) + 
            latest_data.value.pyroxene + 
            (latest_data.value.free_pull*120)
          )
        }
      }

      labels.push(plot_date_string)
      own_data.push(own_pull)
      predict_data.push(predict_pull)
    }

    chartProps.value.labels = labels
    chartProps.value.data = [own_data, predict_data]
  }

  onMounted(() => {
    setLatestRecord()
    setCurrenyDataFromYearMonth(current_year, current_month)
  })
</script>
