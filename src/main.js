import Vue from 'vue';
import App from './App.vue';

//mixins
import titleMixin from './components/mixins/titleMixin';

//vuex
import store from './store/index';


Vue.config.productionTip = false;

Vue.mixin(titleMixin);

new Vue({
    render: h => h(App),
    store
}).$mount('#app');
