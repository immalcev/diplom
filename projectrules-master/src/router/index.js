import { createRouter, createWebHashHistory} from 'vue-router';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: () => import('../pages/Home.vue')},
        {path: '/projects', component: () => import('../pages/Projects.vue')},
        {path: '/about', component: () => import('../pages/AboutCompany.vue')},
        {path: '/services', component: () => import('../pages/Services.vue')},
        {path: '/project/:id', component: () => import('../pages/projectDetail.vue')},


    ]
})