import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: import('./pages/Home.vue')},
    { path: '/login', component: import('./pages/Login.vue')},
]

export default createRouter({
    history: createWebHistory(),
    routes
})
