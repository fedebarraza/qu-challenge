import Vue from 'vue';
import Vuex from 'vuex';


import planetsContext from './modules/PlanetsContext';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        planetsContext
    }
});

export default store;
