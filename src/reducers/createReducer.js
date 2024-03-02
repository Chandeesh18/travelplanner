const initialState = {
  trips: [],
  loading: false,
  error: null
};
const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return {
        ...state,
        trips: [...state.trips, action.payload],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default createReducer;
