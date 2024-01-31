<template>
  <button
    class="rounded w-full h-8 select-none"
    :class="[getClasses()]"
    :type="submit ? `submit` : `button`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    submit: Boolean,
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
