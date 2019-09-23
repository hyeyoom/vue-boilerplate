import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import routerExt from './utils/router_ext';
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
routerExt.bind(router);
//# sourceMappingURL=main.js.map