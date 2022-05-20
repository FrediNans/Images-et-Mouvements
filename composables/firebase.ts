import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyDeJxWi-JDDINQAsMi1IxcIBUzarXa17Vg",
	authDomain: "images-et-mouvements.firebaseapp.com",
	databaseURL:
		"https://images-et-mouvements-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "images-et-mouvements",
	storageBucket: "images-et-mouvements.appspot.com",
	messagingSenderId: "107678332703",
	appId: "1:107678332703:web:83403340605a4b1576a22a",
	measurementId: "G-TZ9XY6EKKN",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
