const initialState = {
  userData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        console.log("signin",action.payload)
      return {
        userData: action.payload
      };

    case 'SIGN_UP':
        console.log('Received values reducer:',action.payload);
        console.log(state);
      return {
        ...state,
        user: [...state.user, action.payload],
        error: null
      };
      case 'SIGN_OUT':
        const nav=action.payload;
        localStorage.removeItem('email');
        nav("/");
        return{
            user:[]
        }
    default:
      return state;
  }
};

export default authReducer;
