const intialState = {
    rate: 0,
    categoryStatus: "all",
    searchText: "",
    range : {
      range_0_25: false,
      range_25_50: false,
      range_50_100: false,
      range_100: false,
    }
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
    case "SET_RANGE":
        let s4 = {...state};
        s4.range[payload.text] = payload.value;
        // console.log("store",s4.range);
        return s4;
    default:
      return state;
  }
};

export default filterReducer;