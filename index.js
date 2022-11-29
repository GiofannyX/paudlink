import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import SystemView from '../views/SystemView.vue'
import CommentsView from '../views/CommentsView.vue'
import EducationView from '../views/EducationView.vue'
import HomepageView from '../views/HomepageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/store',
      name: 'store',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/StoreView.vue')
      component: StoreView
    },
    {
     path: '/system',
     name: 'system',
     component: SystemView
    },
    {
     path: '/comments',
     name: 'comments',
     component: CommentsView
    },
    {
     path: '/education',
     name: 'education',
     component: EducationView
    },
    {
     path: '/homepage',
     name: 'homepage',
     component: HomepageView
    }
  ]
})

export default router
