import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: '여기가 메인이래요' },
        },
        {
            path: '/todo',
            name: 'todo',
            component: () => import('./views/Todo.vue'),
            meta: { title: '할 일을 적어주세요!' },
        }
    ]
});
//# sourceMappingURL=router.js.map