<template>
  <div class="flex items-center">
    <img 
      class="w-8 mr-2"
      :src="icon"
      :title="iconTitle"
    >
    <span>{{ formatCurrency(own) }}</span>
    <span
      v-if="diff && diff !== 0"
      class="ml-1 text-xs"
      :class="getHistoryDiffClasses(diff)"
    >
      {{  getHistoryDiffText(diff) }}
    </span>
  </div>
</template>

<script setup>
  import { formatCurrency } from '@/utils'

  const props = defineProps({
    icon: {
      required: true
    },
    iconTitle: {},
    own: {
      required: true
    },
    diff: {}
  })

  const getHistoryDiffClasses = (diff) => {
    if (diff > 0) return `text-success`
    if (diff < 0) return `text-danger`
  }

  const getHistoryDiffText = (diff) => {
    const prefix = diff >= 0 ? `+` : ``
    return `(${prefix}${formatCurrency(diff)})`
  }
</script>
