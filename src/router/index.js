import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import PaketMurah from '@/views/Paketmurah.vue'
import PaketLengkap from '@/views/Paketlengkap.vue'

const routes = [
  {
    // alias: '/home',
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    // alias: '/home',
    path: '/paketmurah',
    name: 'paketmurah',
    component: PaketMurah
  },
  {
    // alias: '/home',
    path: '/paketlengkap',
    name: 'paketlengkap',
    component: PaketLengkap
  },

  {
    // alias as an additional path for the component
    // alias: "/about",
    // path: '/about',
    // name: 'about',
    // component: About,
    // Route Specific Guard
    // beforeEnter: (to, from, next) => {
    //   console.log('Manage Route Guard')
    //   next()
    // }
  },

  //when user set the name of html, and that html doesn't exist, the pages will redirect to home page
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'dashboard' }
  }

  // redirect page, if user set manage in end if the http://localhost:5173/#/manage-music
  // {
  //   path: '/manage',
  //   redirect: { name: 'manage' },
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass:
    ' border-b-4 border-yellow-400 transition-all ease duration-[250ms] ease-in-out py-1 font-semibold'
})
// text-yellow-400 border-white

//Guarding Routes. this guard applies to all routes registered in application (Global Guard)
router.beforeEach((to, from, next) => {
  console.log('Global Guard')
  // console.log(to, from);

  next()
})

export default router
