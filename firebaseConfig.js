import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBq1vWYGTTMZlZuGPUd2EZqx0jbFSkT6vs",
  authDomain: "linkupchatapp-ba722.firebaseapp.com",
  projectId: "linkupchatapp-ba722",
  storageBucket: "linkupchatapp-ba722.firebasestorage.app",
  messagingSenderId: "392728544569",
  appId: "1:392728544569:web:59a4c0d1408772238e14e8",
  measurementId: "G-CJDY1KT28T"
};

const app = initializeApp(firebaseConfig);

// Use React Native persistence so auth state survives reloads
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
