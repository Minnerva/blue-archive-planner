<template>
  <label class="block">
    <div v-if="label">{{ label }}</div>

    <div class="relative">
      <img 
        v-if="icon"
        class="absolute w-8 max-h-5 inset-y-0 m-auto z-10"
        :src="icon"
        :title="iconTitle"
      >
      
      <input 
        class="w-full h-7 border-2 drop-shadow-sm focus:outline-0"
        :class="[{
          'pl-4': !icon,
          'pl-9': icon, 
          primary: primary,
          danger: danger
        }]"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        :max="max"
        @input="$emit(`update:modelValue`, $event.target.value)"
        @change="onChange"
        :required="required"
      >
    </div>
    <div v-if="hint" class="text-xs text-slate-500 mt-1 ml-1">{{ hint }}</div>
  </label>
</template>

<script setup>
  const props = defineProps({
    primary: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    label: {},
    icon: {},
    iconTitle: {},
    modelValue: {},
    type: {
      default: `text`
    },
    placeholder: {
      default: ``
    },
    hint: String,
    max: {
      default: ``
    },
    required: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default () {
        return () => {}
      }
    }
  })

  defineEmits([`update:modelValue`])

  const getClasses = () => {
    const { danger } = props
    if (danger) {
      return [`border-danger`]
    } else {
      return [`border-primary`]
    }
  }
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
