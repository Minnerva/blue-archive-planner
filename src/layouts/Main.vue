<template>
  <div class="w-full py-3 md:px-8 sm:px-6 px-4">
    <!-- <template v-if="user">
      <div v-if="!user.ign">
        <Card>
          <template v-slot:body>
            <div class="grid grid-cols-2 gap-4">
              <label class="col-span-full md:col-span-1">
                Input your IGN or Discord Name: 
                <InputBase v-model="ign"></InputBase>
              </label>

              <ButtonBase class="col-span-full md:col-start-1 md:col-end-2" :on-click="onSaveIgn" primary>Submit</ButtonBase>
            </div>
          </template>
        </Card>
      </div>

      <div v-else-if="!user.active">Please contact Minnerva to activate your account.</div>
      <router-view v-else></router-view>
    </template> -->
    <router-view v-if="user !== false"></router-view>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import Card from '@/components/Card.vue'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'

  const store = useStore()
  const user = computed(() => store.state.user)

  const ign = ref(``)
  const onSaveIgn = () => {
    const { user } = store.state
    user.ign = ign
    store.dispatch(`saveUser`, user)
  }
</script>
