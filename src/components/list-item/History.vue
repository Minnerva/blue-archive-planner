<template>
  <div class="grid grid-cols-2 gap-3">
    <div 
      class="col-span-2"
      :class="getHistoryCurrentDateClasses(item.date)"
    >
      {{ getDayjsNoTime(item.date).format(configs.date_format.date) }}
    </div>

    <div class="col-span-1 border-r">
      <div class="text-center text-xs pb-2">Record</div>

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
    
    <div
      class="col-span-1"
      v-if="use"
    >
      <div class="text-center text-xs pb-2">Use</div>

      <ListItemHistorySub
        :icon="IconPyroxene"
        icon-title="Pyroxene"
        :own="use.pyroxene"
        danger
      ></ListItemHistorySub>

      <ListItemHistorySub
        :icon="IconRecruitmentTicket"
        icon-title="Pull Ticket"
        :own="use.free_pull"
        danger
      ></ListItemHistorySub>
    </div>

    <div class="col-span-full flex justify-center">
      <ListItemHistorySub
        :icon="IconPulls"
        icon-title="Total Pull"
        :own="getBlueArchiveTotalPull(item)"
        :diff="getBlueArchiveTotalPull({ pyroxene: item.diff_pyroxene, free_pull: item.diff_free_pull })"
      ></ListItemHistorySub>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import { getBlueArchiveTotalPull, getDayjsNoTime } from '@/utils'
  import ListItemHistorySub from '@/components/list-item/HistorySub.vue'
  import IconPyroxene from '@/assets/icons/pyroxene.webp'
  import IconRecruitmentTicket from '@/assets/icons/recruitment-ticket.webp'
  import IconPulls from '@/assets/icons/icon-pulls.png'

  const props = defineProps({
    item: {
      required: true
    },
    use: {
      default: false
    }
  })

  const store = useStore()
  const current_date = ref(dayjs())
  const configs = computed(() => store.state.configs)

  const getHistoryCurrentDateClasses = (history_date) => {
    if (history_date === current_date.value.format(`YYYY-MM-DD`)) {
      return [`text-primary`, `font-bold`]
    }
    return []
  }
</script>
