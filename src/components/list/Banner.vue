<template>
  <div class="flow-root">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-if="banners.length <= 0" class="py-3 sm:py-4">No banner found.</li>
      <li
        v-else
        v-for="banner in banners" :key="banner.key"
        class="py-3 sm:py-4"
      >
        <!-- {{ banner }} -->
        <ListItemBanner
          :item="banner"
        ></ListItemBanner>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  import { getDayjsNoTime } from '@/utils'
  import dataBanners from '@/data/banners.js'
  import ListItemBanner from '@/components/list-item/Banner.vue'
  
  const today = getDayjsNoTime(dayjs().format(`YYYY-MM-DD`))
  const banners = dataBanners
  .map(banner => {
    const date = getDayjsNoTime(banner.date)
    banner.diff = date.diff(today, `day`)
    return banner
  })
  .filter(banner => banner.diff > banner.duration*-1)
</script>
