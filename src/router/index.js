import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import page404 from '../views/error/404.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index,
        children: [
            {
                path: '/',
                name:"index",
                component: Home,
                meta:{
                    title:"首页title",
                    keyword:"首页key",
                    description:"首页des"
                }
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import('../views/Contact.vue')
            },
            {
                path: '/find',
                name: 'find',
                component: () => import('../views/Find.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User.vue')
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('../views/Cart.vue')
            },
        ]
    },{
        path: "/404",
        name:"404",
        component: page404,
    },{
        path: "*",
        redirect: '/404',
        hidden:true
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
