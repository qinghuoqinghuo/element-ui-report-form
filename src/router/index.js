import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueDataVBorder from '../views/VueDataVBorder.vue'
import VueDataVDecoration from '../views/VueDataVDecoration.vue'
import VueDataVCharts from '../views/VueDataVCharts.vue'
import VueDataVActiveRingChart from '../views/VueDataVActiveRingChart.vue'
import VueDataVCapsuleChart from '../views/VueDataVCapsuleChart.vue'
import VueDataVWaterLevelPond from '../views/VueDataVWaterLevelPond.vue'
import VueDataVPercentPond from '../views/VueDataVPercentPond.vue'
import VueDataVFlylineChart from '../views/VueDataVFlylineChart.vue'
import VueDataVFlylineChartEnhanced from '../views/VueDataVFlylineChartEnhanced.vue'
import VueDataVConicalColumnChart from '../views/VueDataVConicalColumnChart.vue'
import VueDataVDigitalFlop from '../views/VueDataVDigitalFlop.vue'
import VueDataVScrollboard from '../views/VueDataVScrollboard.vue'
import VueDataVScrollRankingBoard from '../views/VueDataVScrollRankingBoard.vue'
import VueDataVLoading from '../views/VueDataVLoading.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/reportCount',
        name: 'reportCount',
        component: Home,
    }, {
        path: '/VueDataVBorder',
        name: 'VueDataVBorder',
        component: VueDataVBorder
    },
    {
        path: '/VueDataVDecoration',
        name: 'VueDataVDecoration',
        component: VueDataVDecoration
    },
    {
        path: '/VueDataVCharts',
        name: 'VueDataVCharts',
        component: VueDataVCharts
    }, {
        path: '/VueDataVActiveRingChart',
        name: 'VueDataVActiveRingChart',
        component: VueDataVActiveRingChart
    }, {
        path: '/VueDataVCapsuleChart',
        name: 'VueDataVCapsuleChart',
        component: VueDataVCapsuleChart
    }, {
        path: '/VueDataVWaterLevelPond',
        name: 'VueDataVWaterLevelPond',
        component: VueDataVWaterLevelPond
    }, {
        path: '/VueDataVPercentPond',
        name: 'VueDataVPercentPond',
        component: VueDataVPercentPond
    }, {
        path: '/VueDataVFlylineChart',
        name: 'VueDataVFlylineChart',
        component: VueDataVFlylineChart
    }, {
        path: '/VueDataVFlylineChartEnhanced',
        name: 'VueDataVFlylineChartEnhanced',
        component: VueDataVFlylineChartEnhanced
    }, {
        path: '/VueDataVConicalColumnChart',
        name: 'VueDataVConicalColumnChart',
        component: VueDataVConicalColumnChart
    }, {
        path: '/VueDataVDigitalFlop',
        name: 'VueDataVDigitalFlop',
        component: VueDataVDigitalFlop
    }, {
        path: '/VueDataVScrollboard',
        name: 'VueDataVScrollboard',
        component: VueDataVScrollboard
    }, {
        path: '/VueDataVScrollRankingBoard',
        name: 'VueDataVScrollRankingBoard',
        component: VueDataVScrollRankingBoard
    },
    {
        path: '/VueDataVLoading',
        name: 'VueDataVLoading',
        component: VueDataVLoading
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
