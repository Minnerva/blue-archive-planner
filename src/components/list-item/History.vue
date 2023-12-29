<template>
  <div class="grid grid-cols-2 gap-3">
    <div 
      class="col-span-2"
      :class="getHistoryCurrentDateClasses(item.date)"
    >
      {{ item.date }}
    </div>

    <div class="col-span-1 border-r">
      <ListItemHistorySub
        :icon="IconPyroxene"
        icon-title="Pyroxene"
        :own="item.pyroxene"
        :diff="item.diff_pyroxene"
      ></ListItemHistorySub>

      <ListItemHistorySub
        :icon="IconRecruitmentTicket"
        icon-title="Pull Ticket"
        :own="item.free_pull"
        :diff="item.diff_free_pull"
      ></ListItemHistorySub>
    </div>

    <div class="col-span-1">
      <ListItemHistorySub
        :icon="IconPulls"
        icon-title="Total Pull"
        :own="getBlueArchiveTotalPull(item)"
      ></ListItemHistorySub>

      <ListItemHistorySub
        :icon="Icon3StarsUnit"
        icon-title="Spark"
        :own="getBlueArchiveSpark(getBlueArchiveTotalPull(item))"
      ></ListItemHistorySub>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import dayjs from 'dayjs'
  import { formatCurrency, getBlueArchiveTotalPull, getBlueArchiveSpark } from '@/utils'
  import ListItemHistorySub from '@/components/list-item/HistorySub.vue'
  import IconPyroxene from '@/assets/icons/pyroxene.webp'
  import IconRecruitmentTicket from '@/assets/icons/recruitment-ticket.webp'
  import IconPulls from '@/assets/icons/icon-pulls.png'
  import Icon3StarsUnit from '@/assets/icons/icon-3-stars-unit.png'

  const props = defineProps({
    item: {
      required: true
    }
  })
  const current_date = ref(dayjs())

  const getHistoryCurrentDateClasses = (history_date) => {
    if (history_date === current_date.value.format(`YYYY-MM-DD`)) {
      return [`text-primary`, `font-bold`]
    }
    return []
  }

  const getHistoryDiffClasses = (diff) => {
    if (diff > 0) return `text-success`
    if (diff < 0) return `text-danger`
  }

  const getHistoryDiffText = (diff) => {
    const prefix = diff > 0 ? `+` : ``
    return `(${prefix}${formatCurrency(diff)})`
  }
</script>
