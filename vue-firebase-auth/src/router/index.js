import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleHelloWorldView from '../views/SimpleHelloWorldView.vue'
import Signup from "@/components/Signup.vue"
import Signin from "@/components/Signin.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SimpleHelloWorldView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
     {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
     {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
   ]
})

export default router
