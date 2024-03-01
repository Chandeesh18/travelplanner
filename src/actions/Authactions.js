export const signUp = (userData) => {
    console.log('Received values action:', userData);
  return {
    type: 'SIGN_UP',
    payload: userData
  };
  
};

export const signIn = (userData) => {
  return {
    type: 'SIGN_IN',
    payload: userData
  };
};
