const setRate = (rate) => {
    return {
      type: "SET_RATE",
      payload: rate,
    };
};

const setCategory = (category) => {
    return {
      type: "SET_CATEGORY",
      payload: category,
    };
};

const setSearchText = (text) => {
    return {
      type: "SET_SEARCH_TEXT",
      payload: text,
    };
};

const setRange = (text, value) => {
  return {
    type: "SET_RANGE",
    payload: {text,value},
  };
};

export {setRate, setCategory, setSearchText, setRange};