import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHntPLa0l4dS40cqjLS0vqsGe6JHlWFr0",
  authDomain: "netflix-clone-64778.firebaseapp.com",
  databaseURL: "https://netflix-clone-64778-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-64778",
  storageBucket: "netflix-clone-64778.appspot.com",
  messagingSenderId: "334113013168",
  appId: "1:334113013168:web:a7381d9bbd71f6b370ea75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);