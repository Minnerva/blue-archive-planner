<template>
  <div class="grid grid-cols-10 gap-3">
    <div class="col-span-5 md:col-span-full xl:col-span-5 text-sm">
      Chart Display:
    </div>
    <select
      class="col-span-5 md:col-span-full xl:col-span-5 text-sm w-full h-7 border-2 border-primary drop-shadow-sm focus:outline-0"
      v-model="form.chart_display"
      @change="onChange"
    >
      <option value="pull">Pull</option>
      <option value="pyroxene">Pyroxene</option>
    </select>
    <div class="col-span-full border-b"></div>

    <div class="col-span-5 md:col-span-full xl:col-span-5 text-sm">
      Date Display:
    </div>
    <select
      class="col-span-5 md:col-span-full xl:col-span-5 text-sm w-full h-7 border-2 border-primary drop-shadow-sm focus:outline-0"
      v-model="form.date_display"
      @change="onChange"
    >
      <option value="YYYY-MMM-DD">1970-Jan-01</option>
      <option value="YYYY-MM-DD">1970-01-01</option>
    </select>
    <div class="col-span-full border-b"></div>

    <div class="col-span-full text-base md:text-xs xl:text-base">
      Estimate Pyroxene/Month:
    </div>
    <InputBase
      class="col-span-full text-base md:text-xs xl:text-base"
      type="number"
      placeholder="12000"
      v-model.number="form.estimate_pyroxene"
      :on-change="onChange"
    ></InputBase>
    <div class="col-span-full text-base md:text-xs xl:text-base">
       = {{ formatCurrency(calcEstimatePyroxene(form.estimate_pyroxene ? form.estimate_pyroxene : 12000)) }} per day (30 days)
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useStore } from 'vuex'
  import InputBase from '@/components/input/Base.vue'
  import { formatCurrency } from '@/utils'

  const props = defineProps({
    settings: {
      default () {
        return {}
      }
    }
  })

  const store = useStore()
  const settings = reactive(store.state.user.settings)
  const form = reactive({
    chart_display: settings && settings.chart_display ? settings.chart_display : `pull`,
    date_display: settings && settings.date_display ? settings.date_display : `YYYY-MMM-DD`,
    estimate_pyroxene: settings && settings.estimate_pyroxene ? settings.estimate_pyroxene : null
  })

  const calcEstimatePyroxene = (pyroxene) => {
    return Math.floor(pyroxene/30)
  }

  const onChange = () => {
    const { user } = store.state

    if (!user.settings) {
      user.settings = {}
    }

    user.settings.chart_display = form.chart_display
    user.settings.date_display = form.date_display

    if (form.estimate_pyroxene <= 0) {
      user.settings.estimate_pyroxene = null
      form.estimate_pyroxene = null
    } else {
      user.settings.estimate_pyroxene = form.estimate_pyroxene
    }
    store.dispatch(`saveUser`, user)
  }
</script>
