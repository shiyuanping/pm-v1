import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './pages/Login.vue';
import Pages from './pages/Pages.vue';
import Project from './pages/Project.vue';
import Contract from './pages/Contract.vue';
import ParkGis from './pages/Park-gis.vue';


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
        path: '/pages',
        component: Pages,
        children: [
            {
                path: 'project',
                component: Project
            },{
                path: 'contract',
                component: Contract
            }, {
                path: 'park-gis',
                component: ParkGis
            }
        ]
    }, {
        path: '*',
        redirect: '/pages/park-gis'
    }]
})

export default router;