import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsQ6cfeg2epCnrolP7c6LXgS_gdxjMp6I",
  authDomain: "ping-as-a-service.firebaseapp.com",
  projectId: "ping-as-a-service",
  storageBucket: "ping-as-a-service.appspot.com",
  messagingSenderId: "347805397104",
  appId: "1:347805397104:web:43cc088d296409ef0c84b5",
  measurementId: "G-SW6BK5ETT7",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
