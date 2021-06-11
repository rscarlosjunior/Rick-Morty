import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '@/views/layouts/Template'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Template,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
