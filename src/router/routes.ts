import type { RouteRecordRaw } from 'vue-router'
import Home from "../components/Home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../components/Game.vue'),
        props: true 
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: () => import('../components/Score.vue')
    }
]

export default routes