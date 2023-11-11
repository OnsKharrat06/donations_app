const intialState = {
    rate: 0,
    categoryStatus: "all",
    searchText: "",
};

const filterReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_RATE":
        const s1 = {...state, rate: payload};
      return s1;
    case "SET_CATEGORY":
        const s2 = {...state, categoryStatus: payload};
        return s2;
    case "SET_SEARCH_TEXT":
        const s3 = {...state, searchText: payload};
        return s3;
    default:
      return state;
  }
};

export default filterReducer;