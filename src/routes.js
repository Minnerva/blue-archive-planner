import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/layouts/Main.vue'
import ViewIndex from '@/views/Index.vue'
import ViewTest from '@/views/Test.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: process.env.BASE,
      component: LayoutMain,
      children: [
        { path: ``, component: ViewIndex },
        { path: `/gacha-tracker-online/test`, component: ViewTest }
      ]
    }
  ]
})