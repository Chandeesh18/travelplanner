import { db } from "../../firebase/firebase";
import { doc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";

export const EditTrip = (tripData, id) => {
  return async (dispatch) => {
    try {
      console.log(tripData,id)
      const tripRef = doc(db, 'CreateTrip', id);
      await setDoc(tripRef, tripData);
      dispatch({
        type: 'EDIT_TRIP',
        payload: { ...tripData, id: id }
      });
    } catch (error) {
        console.log(error)

    }
  };
};
