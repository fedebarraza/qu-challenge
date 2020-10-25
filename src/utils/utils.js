
const sortByAsc = (a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
};

const sortByDesc = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const sortItems = (items, field, orderByAsc) => {
    return items.sort((a, b) => {
        if (orderByAsc) {
            return sortByAsc(a[field], b[field]);
        }
        return sortByDesc(a[field], b[field]);
    });
};

export {
    sortItems
};
