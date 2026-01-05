import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
 apiKey: "AIzaSyD8vP4qOZ2HHVLLnDMa8l2M9XtUCiMMkVA",
 authDomain: "ondemandapp-2ff62.firebaseapp.com",
 projectId: "ondemandapp-2ff62",
 appId: "1:33455046464:web:4b31c9342bfad5d3b484a5"

};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);