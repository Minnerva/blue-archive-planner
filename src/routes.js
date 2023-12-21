import { getUrl } from '@/utils'
import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/layouts/Main.vue'
import ViewIndex from '@/views/Index.vue'
import ViewTest from '@/views/Test.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: getUrl(``),
      component: LayoutMain,
      children: [
        { path: ``, component: ViewIndex },
        { path: `test`, component: ViewTest }
      ]
    }
  ]
})