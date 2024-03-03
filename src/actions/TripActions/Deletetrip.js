import { db } from "../../firebase/firebase";
import {  deleteDoc,doc } from "firebase/firestore";
export const deleteTrip = (tripId) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, 'CreateTrip', tripId));
      dispatch({
        type: 'DELETE_TRIP',
        payload: tripId
      });
    } catch (error) {
      console.log(error);
    }
  };
};