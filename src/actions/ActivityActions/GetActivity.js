import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getactivity = (tripid) => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, 'Activity');
      const querySnapshot = await getDocs(collectionRef);
      const data = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        console.log(data);
        if (docData.tripId === tripid) {
            data.push({ docData });
        }
      });
      dispatch({
        type: 'GET_ACTIVITY',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

