<template>
  <button
    class="rounded w-full h-8 select-none"
    :class="[getClasses()]"
    :type="submit ? `submit` : `button`"
    @click="onClick"
    :disabled="loading || disabled"
  >
    <Spinner v-if="loading" sm></Spinner>
    <slot v-else></slot>
  </button>
</template>

<script setup>
  import Spinner from '@/components/Spinner.vue'

  const props = defineProps({
    submit: Boolean,
    loading: Boolean,
    disabled: Boolean,
    primary: Boolean,
    danger: Boolean,
    onClick: Function
  })

  const getClasses = () => {
    return {
      'border-2': !props.primary && !props.danger,
      'text-white': props.primary || props.danger,
      'bg-primary': props.primary,
      'bg-danger': props.danger
    }
  }
</script>
