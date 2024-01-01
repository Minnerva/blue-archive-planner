<template>
  <div class="flow-root">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-if="!items || items.length <= 0" class="py-3 sm:py-4">No record found.</li>
      <li
        v-else
        v-for="item in items" :key="item.date"
        class="py-3 sm:py-4"
      >
        <ListItemHistory
          :item="item"
          :use="currencyUse ? currencyUse[item.date] : null"
        ></ListItemHistory>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import ListItemHistory from '@/components/list-item/History.vue'

  const props = defineProps({
    items: {
      required: true
    },
    currencyUse: {
      default () {
        return {}
      }
    }
  })
</script>
