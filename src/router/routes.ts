import type { RouteRecordRaw } from 'vue-router'
import HomeView from "../components/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../components/GameView.vue'),
        props: true 
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: () => import('../components/ScoreView.vue')
    }
]

export default routes