import {createRouter, createWebHashHistory } from "vue-router"

import Home from "../pages/Home.vue"

const routes = [
  { path: '/', component: Home},

  { path: '/homeregistrado', 
  component: ()=>import("../pages/HomeRegistrado.vue")},

  { path: '/contactoregistrado', 
  component: ()=>import("../pages/ContactoRegistrado.vue")},

  { path: '/listadoregistrado', 
  component: ()=>import("../pages/ListadoRegistrado.vue")},

  { path: '/id', 
    component: ()=>import("../pages/Pokemon.vue")},
  
  { path: '/listado',
    component: ()=>import("../pages/Listado.vue")},

  { path: '/contacto',
    component: ()=>import("../pages/Contacto.vue")},

  { path: '/login',
    component: ()=>import("../pages/Login.vue")},

  { path: '/registro',
    component: ()=>import("../pages/Registro.vue")},

  { path: '/:pathMatch(.*)*',
    component: ()=>import("../pages/Error404.vue")}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router