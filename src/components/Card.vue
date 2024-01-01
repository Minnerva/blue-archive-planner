<template>
  <div class="relative shadow bg-white rounded-sm">
    <slot name="cover"></slot>

    <div :class="{'p-3': !noPadding}">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    noPadding: {
      type: Boolean,
      default: false
    }
  })
</script>
