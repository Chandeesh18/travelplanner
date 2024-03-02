import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addTrip = (tripData) => {
  return async (dispatch) => {
    console.log("Firestore instance:", tripData); 
    
    const data = collection(db, 'CreateTrip');
    try {
      const newDocRef = await addDoc(data, tripData);
      dispatch({
        type: 'ADD_TRIP',
        payload: {
          ...tripData,
          id: newDocRef.id 
        }
      });
    } catch (error) {
      console.log(error)
    }
  };
};
