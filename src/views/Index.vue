<template>
  <div class="grid grid-cols-10 gap-4">
    <div class="col-span-full md:col-span-5 xl:col-span-6">
      <div class="flex justify-center text-center">
        <img :src="IconLeft" class="cursor-pointer select-none" @click="onPrev">
        <span class="mx-4 text-xl md:text-3xl font-bold">{{ date.format(configs.date_format.no_day) }}</span>
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

    <Card class="col-span-full md:col-span-3 xl:col-span-2">
      <template v-slot:body>
        <div class="h-10 text-md0 md:text-xl font-bold border-b">Summary</div>

        <div class="grid grid-cols-2 gap-3 mt-3">
          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconPyroxene"
              title="Pyroxene"
            >
            <div>{{ summary.current.pyroxene }}</div>
          </div>
          
          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconRecruitmentTicket"
              title="Pull Ticket"
            >
            <div>{{ summary.current.free_pull }}</div>
          </div>
          
          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconPulls"
              title="Total Pull"
            >
            <div>{{ summary.current.total_pull }}</div>
          </div>
          
          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="Icon3StarsUnit"
              title="Spark"
            >
            <div>{{ summary.current.spark }}</div>
          </div>

          <div class="col-span-full">
            <div class="h-10 flex items-center text-sm font-bold border-y">This Month - Total Earned In Pyroxene</div>
          </div>

          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconPyroxene"
              title="Pyroxene"
            >
            <div :class="{'text-success': summary.monthly.total_earn > 0, 'text-danger': summary.monthly.total_earn < 0}">
              <span v-if="summary.monthly.total_earn < 0">-</span>
              <span v-if="summary.monthly.total_earn > 0">+</span>
              <span>{{ formatCurrency(summary.monthly.total_earn) }}</span>
            </div>
          </div>

          <div class="col-span-full">
            <div class="h-10 flex items-center text-sm font-bold border-y">This Month - Total Used</div>
          </div>

          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconPyroxene"
              title="Pyroxene"
            >
            <div :class="{'text-danger': summary.monthly.use_pyroxene < 0 }">{{ summary.monthly.use_pyroxene }}</div>
          </div>
          
          <div class="col-span-1 flex items-center">
            <img 
              class="w-8 mr-2"
              :src="IconRecruitmentTicket"
              title="Pull Ticket"
            >
            <div :class="{'text-danger': summary.monthly.use_free_pull < 0 }">{{ summary.monthly.use_free_pull }}</div>
          </div>
        </div>
      </template>
    </Card>
    
    <Card class="col-span-full md:col-span-2" no-padding>
      <template v-slot:body>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="grid grid-cols-2 gap-0">
            <li
              v-for="tab in form_tabs" :key="tab.key"
              class="col-span-auto"
            >
            <div
              class="p-3 border-b-2 border-transparent rounded-t-lg cursor-pointer"
              :class="getTabClasses(tab)"
              @click="onTabChange(tab.key)"
            >
                {{ tab.label }}
              </div>
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-4 gap-4 p-3">
          <div class="col-span-full">
            <InputBase
              v-model="form.day"
              :icon="IconCalendar"
              icon-title="Date"
              type="date"
              :max="today_date.format(`YYYY-MM-DD`)"
              :danger="form_tab_active === `use`"
            ></InputBase>
          </div>

          <div class="col-span-full">
            <InputBase
              v-model.number="form.pyroxene"
              :placeholder="form_tab_active === `record` ? latest_data.pyroxene : `0`"
              :icon="IconPyroxene"
              icon-title="Pyroxene"
              type="number"
              :danger="form_tab_active === `use`"
            ></InputBase>
          </div>

          <div class="col-span-full">
            <InputBase
              v-model.number="form.free_pull"
              :placeholder="form_tab_active === `record` ? latest_data.free_pull : `0`"
              :icon="IconRecruitmentTicket"
              icon-title="Free Pull"
              type="number"
              :danger="form_tab_active === `use`"
            ></InputBase>
          </div>

          <div class="col-span-full md:col-start-2 md:col-end-4 mt-4">
            <ButtonBase
              :on-click="onSave"
              :primary="form_tab_active === `record`"
              :danger="form_tab_active === `use`"
            >
              Save
            </ButtonBase>
          </div>
        </div>
      </template>
    </Card>

    <Card class="col-span-full md:col-span-4 xl:col-span-3">
      <template v-slot:body>
        <div class="h-10 text-md0 md:text-xl font-bold border-b">History</div>
        <ListHistory
          class="max-h-56 overflow-auto pr-2"
          :items="histories"
          :currency-use="currency_use"
        ></ListHistory>
      </template>
    </Card>

    <Card class="col-span-full overflow-auto md:col-span-4 xl:col-span-3">
      <template v-slot:body>
        <div class="h-10 text-md0 md:text-xl font-bold border-b">Upcoming Banners</div>
        <ListBanner
          class="max-h-56 overflow-auto pr-2"
          :selected-date="date"
        ></ListBanner>
      </template>
    </Card>

    <Card class="col-span-full md:col-span-2">
      <template v-slot:body>
        <div class="h-10 text-md0 md:text-xl font-bold border-b mb-3">Settings</div>
        <Settings
          class="max-h-56 overflow-auto pr-2"
        ></Settings>
      </template>
    </Card>

    <div class="col-span-full md:col-span-full xl:col-span-2 grid items-center content-end">
      <div class="text-center">
        <img class="inline-block max-w-36" :src="MikaPortrait" title="My Wife!!!">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import { filterObject, getDayjsNoTime, getBlueArchiveTotalPull, formatCurrency, getBlueArchiveSpark } from '@/utils'
  import LineChart from '@/components/LineChart.vue'
  import Card from '@/components/Card.vue'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'
  import ListHistory from '@/components/list/History.vue'
  import ListBanner from '@/components/list/Banner.vue'
  import Settings from '@/components/Settings.vue'
  import IconLeft from '@/assets/icons/fa-chevron-left.svg'
  import IconRight from '@/assets/icons/fa-chevron-right.svg'
  import IconCalendar from '@/assets/icons/fa-calendar.svg'
  import IconPyroxene from '@/assets/icons/pyroxene.webp'
  import IconRecruitmentTicket from '@/assets/icons/recruitment-ticket.webp'
  import IconPulls from '@/assets/icons/icon-pulls.png'
  import Icon3StarsUnit from '@/assets/icons/icon-3-stars-unit.png'
  import MikaPortrait from '@/assets/students/mika-portrait.webp'
  import { config } from 'dotenv'

  // TODO: Switch between pyroxene view and pull view

  const store = useStore()
  const form_tabs = ref([
    {
      key: `record`,
      label: `Record`
    },
    {
      key: `use`,
      label: `Use`
    }
  ])
  const configs = computed(() => store.state.configs)
  const form_tab_active = ref(`record`)
  const today_date = ref(dayjs())
  const date = ref(today_date.value)
  const currency_own = ref([])
  const currency_use = ref({})
  const histories = ref([])
  // const average_gain_per_day = 12000/30 // per month will bug with February
  const latest_data = ref({
    date: ``,
    pyroxene: 0,
    free_pull: 0
  })
  const summary = reactive({
    current: {
      pyroxene: 0,
      free_pull: 0,
      total_pull: 0,
      spark: 0
    },
    monthly: {
      total_earn: 0,
      use_pyroxene: 0,
      use_free_pull: 0
    }
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

  const getTabClasses = (tab) => {
    if (tab.key !== form_tab_active.value) {
      return [`hover:text-gray-600`, `hover:border-gray-300`, `dark:hover:text-gray-300`]
    } else {
      if (tab.key === `record`) {
        return [`font-bold`, `border-primary`, `text-primary`]
      } else if (tab.key === `use`) {
        return [`font-bold`, `border-danger`, `text-danger`]
      }
    }
  }

  const onTabChange = (tab_key) => {
    if (form_tab_active.value !== tab_key) {
      form.day = dayjs().format(`YYYY-MM-DD`)
      form.pyroxene = undefined
      form.free_pull = undefined
      form_tab_active.value = tab_key
    }
  }

  const getDateFormat = (settings) => {
    const date_format = settings && settings.date_display ? settings.date_display : `YYYY-MMM-DD`
    const splits = date_format.split(`-`)
    
    return {
      date: date_format,
      no_day: `${splits[0]}-${splits[1]}`
    }
  }

  const setConfigs = () => {
    const { user, configs } = store.state
    const newConfigs = {
      ...configs,
      date_format: getDateFormat(user.settings),
      chart_display: user.settings.chart_display,
      estimate_pyroxene: user.settings.estimate_pyroxene
    }
    store.commit(`setConfigs`, newConfigs)
  }

  const setGetUser = () => {
    store.dispatch(`setUserListen`, (record) => {
      if (record) {
        store.commit(`setUser`, record)
        setConfigs()
        updateChartData()
      }
    })
  }

  const setLatestRecord = () => {
    store.dispatch(`ba-currency-own/setGetLatestRecordListen`, (record) => {
      if (record) {
        const keys = Object.keys(record)
        if (keys.length > 0) {
          const latest_date = keys[0]
          const latest_record = record[latest_date]
          latest_data.value = {
            date: latest_date,
            ...latest_record
          }

          summary.current = {
            pyroxene: formatCurrency(latest_record.pyroxene),
            free_pull: formatCurrency(latest_record.free_pull)
          }
          summary.current.total_pull = formatCurrency(getBlueArchiveTotalPull(latest_record))
          summary.current.spark = formatCurrency(getBlueArchiveSpark(getBlueArchiveTotalPull(latest_record)))
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
            const diff_pyroxene = own_data.pyroxene - diff_data.pyroxene
            const diff_free_pull = own_data.free_pull - diff_data.free_pull
            history.diff_pyroxene = diff_pyroxene
            history.diff_free_pull = diff_free_pull
          }
          
          history_data.push(history)
        }
        
        histories.value = history_data
        updateSummaryMonthly()
      }
    })
  }

  const updateSummaryMonthly = () => {
    let total_diff_in_pyrox = 0

    if (histories.value.length > 0 && currency_use.value) {
      summary.monthly.total_earn = 0
      summary.monthly.use_pyroxene = 0
      summary.monthly.use_free_pull = 0

      // Get total use
      for (let key in currency_use.value) {
        const obj_use = currency_use.value[key]
        summary.monthly.use_pyroxene += obj_use.pyroxene
        summary.monthly.use_free_pull += obj_use.free_pull
      }

      // Get total earn
      let total_diff_pyrox = 0
      let total_diff_free_pull = 0
      
      histories.value.forEach(history_item => {
        total_diff_pyrox += history_item.diff_pyroxene
        total_diff_free_pull += history_item.diff_free_pull
      })
      total_diff_in_pyrox = total_diff_pyrox + (total_diff_free_pull*120)
      total_diff_in_pyrox += summary.monthly.use_pyroxene + (summary.monthly.use_free_pull*120)
    }
    
    summary.monthly.total_earn = total_diff_in_pyrox
    summary.monthly.use_pyroxene = summary.monthly.use_pyroxene && !isNaN(summary.monthly.use_pyroxene) ? `-${formatCurrency(summary.monthly.use_pyroxene)}`: `-`
    summary.monthly.use_free_pull = summary.monthly.use_free_pull && !isNaN(summary.monthly.use_free_pull) ? `-${formatCurrency(summary.monthly.use_free_pull)}`: `-`
  }

  const setCurrencyDataFromYearMonth = (year, month) => {
    store.dispatch(`ba-currency-own/setGetRecordsListen`, {
      year,
      month,
      callback: (record) => {
        currency_own.value = record
        updateChartData()
        setLatestRecordBeforeMonth(year, month)
        updateSummaryMonthly()
      }
    })
  }

  const setCurrencyUseFromYearMonth = (year, month) => {
    store.dispatch(`ba-currency-use/setGetRecordsListen`, {
      year,
      month,
      callback: (record) => {
        currency_use.value = record
        updateChartData()
        updateSummaryMonthly()
      }
    })
  }

  const setGetUpcomingBannerPullListener = () => {
    store.dispatch(`ba-banner-pull/setGetUpcomingRecordsListen`, (record) => {
      store.commit(`ba-banner-pull/setBannerPull`, record)
      updateChartData()
    })
  }

  const changeYearMonth = (new_date) => {
    date.value = new_date
    setCurrencyDataFromYearMonth(new_date.format(`YYYY`), new_date.format(`MM`))
    setCurrencyUseFromYearMonth(new_date.format(`YYYY`), new_date.format(`MM`))
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

    if (!form_day.isValid()) {
      window.alert(`Date is invalid.`)
    } else {
      let data = {
        pyroxene: form.pyroxene,
        free_pull: form.free_pull
      }
      
      if (form_tab_active.value === `record`) {
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
      } else if (form_tab_active.value === `use`) {
        if (
          (isNaN(data.pyroxene) && isNaN(data.free_pull)) ||
          (data.pyroxene <= 0 && data.free_pull <= 0)
        ) {
          data = null
        } else {
          if (isNaN(data.pyroxene)) {
            data.pyroxene = 0
          }
          if (isNaN(data.free_pull)) {
            data.free_pull = 0
          }
        }

        store.dispatch(`ba-currency-use/save`, {
          key: form_day.format(`YYYY-MM-DD`),
          data
        })
      } else {
        console.error(`Form Active Key is invalid.`)
      }

      // reset form
      form.pyroxene = undefined
      form.free_pull = undefined

      updateChartData()
    }
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
    const { configs } = store.state
    const average_gain_per_day = Math.floor((configs.estimate_pyroxene || 12000)/30)

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
        if (configs.chart_display === `pyroxene`) {
          own_pull = plot_date_own.pyroxene + (plot_date_own.free_pull*120)
        } else {
          own_pull = getBlueArchiveTotalPull({
            pyroxene: plot_date_own.pyroxene, 
            free_pull: plot_date_own.free_pull
          })
        }
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

          if (configs.chart_display === `pyroxene`) {
            predict_pull = estimate_pyroxene + (latest_data.value.free_pull*120)
          } else {
            predict_pull = getBlueArchiveTotalPull({
              pyroxene: estimate_pyroxene,
              free_pull: latest_data.value.free_pull
            })
          }
        }

        // get pull of this month
        const banners = filterObject(banner_pull, { date: plot_date_string })
        if (banners.length <= 0) {
          pull_banners.push(null)
        } else {
          pull_banners.push(banners)
        }
      }

      // change date format
      const label = plot_date.format(configs.date_format.date)

      labels.push(label)
      own_data.push(own_pull)
      predict_data.push(predict_pull)
    }

    chartProps.value.labels = labels
    chartProps.value.data = [own_data, predict_data]
    chartProps.value.pull_banners = pull_banners
  }

  onMounted(() => {
    setConfigs()
    setGetUser()
    setLatestRecord()
    setGetUpcomingBannerPullListener()
    setCurrencyDataFromYearMonth(date.value.format(`YYYY`), date.value.format(`MM`))
    setCurrencyUseFromYearMonth(date.value.format(`YYYY`), date.value.format(`MM`))
  })
</script>
