import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from '../views/HomeView.vue'
import SimpleHelloWorldView from '../views/SimpleHelloWorldView.vue'
import Signup from "@/components/Signup.vue"
import Signin from "@/components/Signin.vue"
import Dashboard from "@/components/Dashboard.vue"

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
    },
    {
      // The dashboard route should be protected from the unauthenticated users.
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true } // By using this feed, the router can recognize the route as protected.
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const auth = getAuth();

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // The user is already logged in, so that the page will be redirected to the restricted area.
        next()
      } else {
        // User is signed out
        // User will be redirected to the sign-in page
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    });
  } else {
    next()
  }
})

export default router
