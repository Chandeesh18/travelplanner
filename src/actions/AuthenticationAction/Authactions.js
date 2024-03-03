import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase"; 

export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const { email, password } = userData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      dispatch({
        type: 'SIGN_UP',
        payload: userCredential.user
      });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
};

export const signIn = (userData) => {
  return async (dispatch) => {
    try {
      const { email, password } = userData;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      dispatch({
        type: 'SIGN_IN',
        payload: userCredential.user
      });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
};

export const signOutUser = (navigate) => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      console.log("User signed out");
      dispatch({ type: 'SIGN_OUT',payload:navigate });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
};