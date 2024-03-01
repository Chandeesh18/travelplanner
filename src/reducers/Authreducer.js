const initialState = {
  user:[],
  userData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        console.log("signin")
       const user = state.user.find(user => user.email === action.payload.email && user.password === action.payload.password);
       console.log(user);
      return {
        ...state,
        userData: user
      };

    case 'SIGN_UP':
        console.log('Received values reducer:',action.payload);
        console.log(state);
      return {
        ...state,
        user: [...state.user, action.payload],
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;
