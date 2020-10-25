import { get, getAll, BASE_URL } from './api';

const getPlanets = (currentPage, query) => {
    let params = {
        page: currentPage
    };

    if (query) {
        params.search = query;
    }

    return get(`${BASE_URL}/planets`, params);
};

const getAllPlanets = (query) => {
    let params = {};

    if (query) {
        params.search = query;
    }

    return new Promise((resolve, reject) => {
        getAll(`${BASE_URL}/planets`, params, [], resolve, reject);
    });
};

export {
    getPlanets,
    getAllPlanets
};
