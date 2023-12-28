<template>
  <button
    class="rounded w-full h-8 select-none"
    :class="classes"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    primary: Boolean,
    onClick: Function
  })

  const classes = {
    'border-2': !props.primary,
    'text-white': props.primary,
    'bg-primary': props.primary
  }
</script>
