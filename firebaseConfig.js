import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { Platform } from "react-native";

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

let authInstance;
try {
  if (Platform.OS === "web") {
    authInstance = getAuth(app);
  } else {
    authInstance = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }
} catch (e) {
  authInstance = getAuth(app);
}

export const auth = authInstance;
