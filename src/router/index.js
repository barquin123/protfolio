import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProjectsView from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // component: ContactView, 
      component: () => import('../views/Contact.vue'),
    },
  ],
})

export default router
