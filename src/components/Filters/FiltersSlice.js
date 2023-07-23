const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchText": {
      const data = action.payload;
      return {
        ...state,
        search: data,
      };
    }
    case "filters/statusFilterChange": {
      const data = action.payload;
      return {
        ...state,
        status: data,
      };
    }
    case "filters/prioritiesFilterChange": {
      const data = action.payload;
      return {
        ...state,
        priorities: data,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
