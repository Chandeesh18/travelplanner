import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getTrip = () => {
  return async (dispatch) => {
    try {
      const email = localStorage.getItem('email');
      const collectionRef = collection(db, 'CreateTrip');
      const querySnapshot = await getDocs(collectionRef);
      const data = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        if (docData.email === email) {
          data.push({ id: doc.id, ...docData });
        }
      });
      console.log("setset",data);
      dispatch({
        type: 'GET_TRIP',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

