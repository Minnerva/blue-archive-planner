<template>
  <div class="relative">
    <img 
      v-if="icon"
      class="absolute w-8 max-h-5 inset-y-0 m-auto z-10"
      :src="icon"
      :title="iconTitle"
    >
    
    <input 
      class="w-full h-7 border-primary border-2 drop-shadow-sm focus:outline-0"
      :class="{ 'pl-4': !icon, 'pl-9': icon }"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit(`update:modelValue`, $event.target.value)"
      @change="onChange"
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    icon: {},
    iconTitle: {},
    modelValue: {},
    type: {
      default: `text`
    },
    placeholder: {
      default: ``
    },
    onChange: {
      type: Function,
      default () {
        return () => {}
      }
    }
  })

  defineEmits([`update:modelValue`])
</script>

<style scoped>
  ::-webkit-calendar-picker-indicator {
    width: 100%;
    position: absolute;
    /* z-index: -1; */
    opacity: 0;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    user-select: none;
  }
</style>
