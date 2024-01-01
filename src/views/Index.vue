<template>
  <div class="grid grid-cols-7 gap-4">
    <div class="col-span-full md:col-span-5">
      <div class="flex justify-center text-center">
        <img :src="IconLeft" class="cursor-pointer select-none" @click="onPrev">
        <span class="mx-4 text-xl md:text-3xl font-bold">{{ date.format(`YYYY-MM`) }}</span>
        <img :src="IconRight" class="cursor-pointer select-none" @click="onNext">
      </div>
      
      <div class="flex justify-center">
        <div class="w-full h-72">
          <LineChart
            v-if="chartProps.labels"
            :labels="chartProps.labels"
            :data="chartProps.data"
            :pull-banners="chartProps.pull_banners"
          ></LineChart>
        </div>
      </div>
    </div>
    
    <Card class="col-span-full md:col-span-2">
      <template v-slot:body>
        <div class="mb-3 text-md md:text-xl font-bold">Add</div>

        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-full">
            <InputBase
              v-model="form.day"
              :icon="IconCalendar"
              icon-title="Date"
              type="date"
            ></InputBase>
          </div>

          <div class="col-span-2">
            <InputBase
              v-model.number="form.pyroxene"
              :placeholder="latest_data.pyroxene"
              :icon="IconPyroxene"
              icon-title="Pyroxene"
              type="number"
            ></InputBase>
          </div>

          <div class="col-span-2">
            <InputBase
              v-model.number="form.free_pull"
              :placeholder="latest_data.free_pull"
              :icon="IconRecruitmentTicket"
              icon-title="Free Pull"
              type="number"
            ></InputBase>
          </div>

          <div class="col-span-full md:col-start-2 md:col-end-4 mt-4">
            <ButtonBase 
              :on-click="onSave"
              primary
            >
              Save
            </ButtonBase>
          </div>
        </div>

        <img :src="AronaHead" class="h-32 mt-4 md:mt-0 md:absolute bottom-0 inset-x-0 m-auto">
      </template>
    </Card>

    <Card class="h-72 col-span-full overflow-auto md:col-span-3">
      <template v-slot:body>
        <div class="text-md0 md:text-xl font-bold">History</div>
        <ListHistory
          :items="histories"
        ></ListHistory>
      </template>
    </Card>

    <Card class="max-h-72 col-span-full overflow-auto md:col-span-3 xl:col-span-2">
      <template v-slot:body>
        <div class="text-md0 md:text-xl font-bold">Upcoming Banners</div>
        <ListBanner></ListBanner>
      </template>
    </Card>

    <div class="col-span-full md:col-span-1 xl:col-span-2 grid items-center content-end">
      <div class="text-center">
        <img class="inline-block max-w-36" :src="MikaPortrait" title="My Wife!!!">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import { filterObject, getDayjsNoTime, getBlueArchiveCurrencyToPull, getBlueArchiveTotalPull } from '@/utils'
  import LineChart from '@/components/LineChart.vue'
  import Card from '@/components/Card.vue'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'
  import ListHistory from '@/components/list/History.vue'
  import ListBanner from '@/components/list/Banner.vue'
  import IconLeft from '@/assets/icons/fa-chevron-left.svg'
  import IconRight from '@/assets/icons/fa-chevron-right.svg'
  import IconCalendar from '@/assets/icons/fa-calendar.svg'
  import IconPyroxene from '@/assets/icons/pyroxene.webp'
  import IconRecruitmentTicket from '@/assets/icons/recruitment-ticket.webp'
  import AronaHead from '@/assets/arona-head.png'
  import MikaPortrait from '@/assets/students/mika-portrait.webp'

  // TODO: Switch between pyroxene view and pull view
  // TODO: Able to add pyrox use at specific date

  const store = useStore()
  const date = ref(dayjs())
  const currency_own = ref([])
  const histories = ref([])
  const average_gain_per_day = 12000/30 // per month will bug with February
  const latest_data = ref({
    date: ``,
    pyroxene: 0,
    free_pull: 0
  })
  
  const form = reactive({
    day: date.value.format(`YYYY-MM-DD`),
    pyroxene: undefined,
    free_pull: undefined
  })
  
  const chartProps = ref({
    labels: [],
    data: [],
    pull_banners: []
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

  const setLatestRecordBeforeMonth = (year, month) => {
    store.dispatch(`ba-currency-own/setGetLatestBeforeMonthListener`, {
      year,
      month,
      callback: (record) => {
        const history_data = []
        let keys = []
        let keys_length = 0

        if (currency_own.value) {
          keys = Object.keys(currency_own.value)
          keys.reverse()
          keys_length = keys.length
        }
        
        for (let i = 0; i < keys_length; i++) {
          const own_data = currency_own.value[keys[i]]
          let diff_data = currency_own.value[keys[i+1]]
          const history = {
            date: keys[i],
            pyroxene: own_data.pyroxene,
            free_pull: own_data.free_pull,
            diff_pyroxene: null,
            diff_free_pull: null
          }

          // expected diff_data to be null on the latest record of each month
          if (!diff_data && record) {
            diff_data = record[Object.keys(record)[0]]
          }

          if (diff_data) {
            history.diff_pyroxene = own_data.pyroxene - diff_data.pyroxene
            history.diff_free_pull = own_data.free_pull - diff_data.free_pull
          }
          
          history_data.push(history)
        }
        
        histories.value = history_data
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
        setLatestRecordBeforeMonth(year, month)
      }
    })
  }

  const setGetUpcomingBannerPullListener = () => {
    store.dispatch(`ba-banner-pull/setGetUpcomingRecordsListen`, (record) => {
      store.commit(`ba-banner-pull/setBannerPull`, record)
    })
  }

  const changeYearMonth = (new_date) => {
    date.value = new_date
    setCurrenyDataFromYearMonth(new_date.year(), new_date.month()+1) // +1 due to month() start at 0
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
    const banner_pull = store.state[`ba-banner-pull`].banner_pull
    const banner_keys = Object.keys(banner_pull)
    let estimate_pyroxene = false
    let estimate_banner_old_flag = false
    const pull_banners = []

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
        own_pull = getBlueArchiveTotalPull({
          pyroxene: plot_date_own.pyroxene, 
          free_pull: plot_date_own.free_pull
        })
      }

      if (latest_date) {
        // banner_pull
        const predict_date_diff = latest_date.diff(plot_date, `day`)

        if (predict_date_diff <= 0) {
          if (estimate_pyroxene === false) {
            estimate_pyroxene = (predict_date_diff * -1 * average_gain_per_day) + latest_data.value.pyroxene
          } else {
            estimate_pyroxene += average_gain_per_day
          }

          if (banner_pull) {
            if (!estimate_banner_old_flag) {
              banner_keys.forEach(banner_key => {
                const pull_data = banner_pull[banner_key]
                const pull_date = getDayjsNoTime(pull_data.date)
                const pull_diff_latest = pull_date.diff(latest_date, `day`)

                const pull_date_month = pull_date.startOf(`month`)
                const plot_date_month = plot_date.startOf(`month`)
                const pull_diff_plot_month = pull_date_month.diff(plot_date_month, `month`)

                if (pull_diff_latest > 0 && pull_diff_plot_month < 0) {
                  estimate_pyroxene -= pull_data.pull * 120
                }
              })
              estimate_banner_old_flag = true
            }

            banner_keys.forEach(banner_key => {
              const pull_data = banner_pull[banner_key]
              const pull_date = getDayjsNoTime(pull_data.date)
              const pull_diff_latest = pull_date.diff(latest_date, `day`)
              const pull_diff_future_day = pull_date.diff(plot_date, `day`)
              const pull_diff_future_month = pull_date.diff(plot_date, `month`)

              if (pull_diff_latest > 0) {
                if (pull_diff_future_month === 0 && pull_diff_future_day === 0) {
                  estimate_pyroxene -= pull_data.pull * 120
                }
              }
            })
          }

          predict_pull = getBlueArchiveTotalPull({
            pyroxene: estimate_pyroxene,
            free_pull: latest_data.value.free_pull
          })
        }

        // get pull of this month
        const banners = filterObject(banner_pull, { date: plot_date_string })
        if (banners.length <= 0) {
          pull_banners.push(null)
        } else {
          pull_banners.push(banners)
        }
      }

      labels.push(plot_date_string)
      own_data.push(own_pull)
      predict_data.push(predict_pull)
    }

    chartProps.value.labels = labels
    chartProps.value.data = [own_data, predict_data]
    chartProps.value.pull_banners = pull_banners
  }

  onMounted(() => {
    setLatestRecord()
    setGetUpcomingBannerPullListener()
    setCurrenyDataFromYearMonth(date.value.format(`YYYY`), date.value.format(`MM`))
  })
</script>
