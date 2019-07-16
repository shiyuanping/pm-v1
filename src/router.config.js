import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './components/Login.vue';
import Index from './components/Index.vue';
import Project from './components/Project.vue';
import Contract from './components/Contract.vue';
import ParkGis from './components/Park-gis.vue';


const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    linkActiveClass:'active',
    routes:[{
        path: '/login',
        component: Login
    }, {
        path: '/index',
        component: Index
    },{
        path: '/project',
        component: Project
    },{
        path: '/contract',
        component: Contract
    }, {
        path: '/park-gis',
        component: ParkGis
    }, {
        path: '*',
        redirect: '/index'
    }]
})

export default router;