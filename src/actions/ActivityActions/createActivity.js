import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export const createActivity = (activityData) => {
  return async (dispatch) => {
    console.log("Firestore instance:", activityData); 
    
    const data = collection(db, 'Activity');
    try {
      const newDocRef = await addDoc(data, activityData);
      dispatch({
        type: 'ADD_ACTIVITY',
        payload: {
          ...activityData,
          id: newDocRef.id 
        }
      });
    } catch (error) {
      console.log(error)
    }
  };
};
