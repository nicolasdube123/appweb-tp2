import type { RouteRecordRaw } from 'vue-router'
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../views/GameView.vue'),
        props: true 
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: () => import('../views/ScoreView.vue')
    }
]

export default routes