import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchRepository from '../views/SearchRepository.vue'
import Repository from '../views/Repository'
import NotFound from '../views/NotFound.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/SearchRepository',
        name: 'SearchRepository',
        component: SearchRepository
    },
    {
        path: '/Repository',
        name: 'Repository',
        component: Repository
    },
    
    // redirect
    // {
    //     path: '/all-jobs',
    //     redirect: '/jobs' 
    // },
    // catch 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
     routes
})

export default router;