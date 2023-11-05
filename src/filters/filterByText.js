const filterByText = (searchText, products) => {
    if (searchText === "") return products;
    let filteredByText = products.filter((elem)=>{
      if(elem.title.toLowerCase().includes(searchText.toLowerCase())) return true;
      return false;
    });
    return filteredByText;
};

export default filterByText;