import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'homepage',
      component: ()=>import('@/views/homepage/index.vue')
    },{
      path: "/login",
      name: 'login',
      component: ()=>import('@/views/login/index.vue')
    }, ]
})

export default router