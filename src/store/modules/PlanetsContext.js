
import { getAllPlanets } from '../../api/Planets';
import { sortItems } from '../../utils/utils';

const state = {
    planets: [],
    showedPlanets: [],
    totalPlanets: 0,
    totalPages: 0,
    currentPage: 1,
    query: '',
    planetsLoaded: false,
    planetsPerPage: 10,
    defaultPlanetsPerPage: 10
};

const mutations = {
    updatePlanets(state, data) {
        state.planets = data;
    },
    updateContext(state) {
        state.totalPlanets = state.planets.length;
        state.planetsPerPage = state.defaultPlanetsPerPage > state.totalPlanets ? state.totalPlanets : state.defaultPlanetsPerPage;

        // Manual Pagination
        const initialPosition = (state.currentPage - 1) * state.planetsPerPage;
        const finalPosition = state.currentPage * state.planetsPerPage;
        state.showedPlanets = state.planets.slice(initialPosition, finalPosition);
        state.totalPages = Math.round(state.planets.length / state.planetsPerPage);
    },
    updatePlanetsLoaded(state, planetsLoaded) {
        state.planetsLoaded = planetsLoaded;
    },
    updateCurrentPage(state, page) {
        state.currentPage = page;
    },
    updateQuery(state, query) {
        state.query = query;
    },
    sortPlanets(state, orderByAsc) {
        let { planets } = state;
        state.planets = sortItems(planets, 'name', orderByAsc);
    },
};

const actions = {
    async getPlanets({ commit, state }) {
        const { query } = state;
        getAllPlanets(query).then((response) => {
            commit('updateCurrentPage', 1);
            commit('updatePlanets', response);
            commit('updateContext');
            commit('updatePlanetsLoaded', true);
        });
    },
    async setPlanetsQuery({ commit, dispatch }, query) {
        commit('updateQuery', query);
        dispatch('getPlanets');
    },
    async setPlanetsPage({ commit }, page) {
        commit('updateCurrentPage', page);
        commit('updateContext');
    },
    async setPlanetsOrderBy({ commit }, orderByAsc) {
        commit('sortPlanets', orderByAsc);
        commit('updateContext');
    },
    setPlanetsLoading({ commit }) {
        commit('updatePlanetsLoaded', false);
    }
};

const getters = {
    planetsLoaded: state => {
        return state.planetsLoaded;
    },
    totalPlanets: state => {
        return state.totalPlanets;
    },
    showedPlanets: state => {
        return state.showedPlanets;
    },
    planetsPerPage: state => {
        return state.planetsPerPage;
    },
    currentPage: state => {
        return state.currentPage;
    },
    totalPages: state => {
        return state.totalPages;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
