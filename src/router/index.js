import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   // component: () => import(/* webpackChunkName: "about" */ '../components/Background.vue')
  // },
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue')
  },
  
  {
    path: '/resume',
    name: 'resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
