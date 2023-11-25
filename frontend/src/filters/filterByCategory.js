const filterByCategory = (categoryStatus, products) => {
    if (categoryStatus === "all") return products;
    let filteredByCategory = products.filter((elem) => {
        if (elem.category === categoryStatus) return true;
        return false;
    });
    return filteredByCategory;
}
export default filterByCategory;