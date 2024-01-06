<template>
  <div class="flow-root">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-if="banners.length <= 0" class="py-3 sm:py-4">No banner found.</li>
      <li
        v-else
        v-for="banner in banners" :key="banner.key"
        class="py-3 sm:py-4"
      >
        <ListItemBanner
          :item="banner"
          :banner-pull="banner_pull[banner.key]"
        ></ListItemBanner>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex' 
  import dayjs from 'dayjs'
  import { getDayjsNoTime } from '@/utils'
  import dataBanners from '@/data/banners.js'
  import ListItemBanner from '@/components/list-item/Banner.vue'
  
  const props = defineProps({
    selectedDate: {}
  })

  const store = useStore()
  const banner_pull = computed(() => store.state[`ba-banner-pull`].banner_pull)
  const today = getDayjsNoTime(dayjs().format(`YYYY-MM-DD`))
  const banners = computed(() => {
    const { selectedDate } = props
    return dataBanners
    .map(banner => {
      const date = getDayjsNoTime(banner.date)
      banner.diff = date.diff(today, `day`)
      banner.current_month = date.format(`YYYY-MM`) === selectedDate.format(`YYYY-MM`)
      return banner
    })
    .filter(banner => banner.current_month)
    // .filter(banner => banner.diff > banner.duration*-1 && banner.current_month)
  })
</script>
