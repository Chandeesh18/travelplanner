const initialState = {
  trips: [],
};

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRIP':
      return {
        ...state,
        trips: action.payload,
      };
    default:
      return state;
  }
};

export default getReducer;