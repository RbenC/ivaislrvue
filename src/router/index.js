import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HowitworkView from "@/views/HowitworkView.vue"; 
import WhatisView from "@/views/WhatisView.vue"; 
import PriceView from "@/views/PriceView.vue"; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/howitwork', component: import('../views/HowitworkView.vue') },
    { path: '/whatis', component: import('../views/WhatisView.vue') },
    { path: '/price', component: import('../views/PriceView.vue') },
      
    
  ]
})

export default router