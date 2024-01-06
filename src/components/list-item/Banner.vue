<template>
  <div class="grid grid-cols-10 gap-3 md:items-center">
    <div class="col-span-2 lg:col-span-2">
      <img :src="student.icon" :title="student.full_name">
    </div>
    <div class="col-span-8 lg:col-span-8">
      <div>
        {{ getDayjsNoTime(item.date).format(configs.date_format.date) }}
        {{ getDayDiff() }}
      </div>
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
  import { ref, watch, computed, onMounted } from 'vue'
  import { useStore } from 'vuex' 
  import { find, getDayjsNoTime } from '@/utils'
  import InputBase from '@/components/input/Base.vue'
  import dataStudents from '@/data/students.js'
  import IconPulls from '@/assets/icons/icon-pulls.png'

  const props = defineProps({
    item: {
      required: true
    },
    bannerPull: {}
  })
  const store = useStore()
  const configs = computed(() => store.state.configs)
  const pull = ref(null)
  const student = find(dataStudents, { key: props.item.student_key })
  
  watch(props, () => {
    setPullAmount()
  })

  const setPullAmount = () => {
    const banner_pull = store.getters[`ba-banner-pull/find`](props.item.key)
    pull.value = banner_pull ? banner_pull.pull : null
  }

  const getDayDiff = () => {
    if (props.item.diff <= 0) {
      // return ` - Live`
      return ``
    } else {
      return ` - ${props.item.diff} days`
    }
  }

  const onChange = () => {
    const { item: banner } = props
    const key = banner.key
    
    if (!pull.value || pull.value <= 0) {
      store.dispatch(`ba-banner-pull/delete`, key)
      pull.value = null
    } else {
      store.dispatch(`ba-banner-pull/save`, {
        key,
        data: {
          uuid: banner.uuid,
          student_key: banner.student_key,
          pull: pull.value
        }
      })
    }
  }

  // for hot reload
  onMounted(() => {
    setPullAmount()
  })
</script>
