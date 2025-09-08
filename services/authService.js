import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Email login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Email signup
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Google login
export function loginWithGoogle(idToken) {
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential);
}

// Logout
export function logout() {
  return signOut(auth);
}
