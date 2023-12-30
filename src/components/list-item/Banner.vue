<template>
  <div class="grid grid-cols-10 gap-3 md:items-center">
    <div class="col-span-2 lg:col-span-2">
      <img :src="student.portrait" :title="student.full_name">
    </div>
    <div class="col-span-8 lg:col-span-8">
      <div>{{ item.date }}{{ getDayDiff() }}</div>
      <div>{{ student.full_name }} </div>
      <div>
        <InputBase
          v-model.number="pull"
          placeholder="200"
          :icon="IconPulls"
          icon-title="Pull"
          type="number"
          :on-change="onChange"
        ></InputBase>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { find } from '@/utils'
  import InputBase from '@/components/input/Base.vue'
  import dataStudents from '@/data/students.js'
  import IconPulls from '@/assets/icons/icon-pulls.png'

  const props = defineProps({
    item: {
      required: true
    }
  })
  const pull = ref(null)
  const student = find(dataStudents, { key: props.item.student })
  console.log(student)

  const getDayDiff = () => {
    if (props.item.diff <= 0) {
      return ` - Live`
    } else {
      return ` - ${props.item.diff} days`
    }
  }

  const onChange = () => {
    if (!pull.value || pull.value <= 0) {
      // TODO: Delete record
    } else {
      // TODO: Add record
    }
  }
</script>
