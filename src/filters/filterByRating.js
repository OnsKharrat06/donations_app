const filterByRating = (rate, products) => {
    if (rate === 0) return products;
    let filteredByRating = products.filter((elem) => {
        if (Math.round(elem.rate) === rate) return true;
        return false;
    });
    return filteredByRating;
}
export default filterByRating;