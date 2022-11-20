import { createRouter, createWebHistory } from 'vue-router'
import Details from '../views/details.vue'
import Homevue from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/",
     name:"Home",
     component:Homevue
   },
   {
    path:"/details",
     name:"Detail",
     component:Details
   },


  ]
})

export default router
