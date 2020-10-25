
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

const get = (url, parameters, headers) => axios({
    method: 'get',
    url: url,
    params: parameters,
    headers: Object.assign({}, headers)
});

const getAll = (url, parameters, results, resolve, reject) => {
    get(url, parameters)
        .then(response => {
            const retrivedItems = results.concat(response.data.results);
            if (response.data.next !== null) {
                getAll(response.data.next, parameters, retrivedItems, resolve, reject);
            } else {
                resolve(retrivedItems);
            }
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error);
        });
};

export {
    get,
    getAll,
    BASE_URL
};
