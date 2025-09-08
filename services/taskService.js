import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { auth } from "../firebaseConfig";

const db = getFirestore();

// Add a task
export async function addTask(title) {
  if (!auth.currentUser) return;
  await addDoc(collection(db, "tasks"), {
    title,
    uid: auth.currentUser.uid,
    createdAt: Date.now(),
  });
}

// Get all tasks for logged-in user
export async function getTasks() {
  if (!auth.currentUser) return [];
  const q = query(collection(db, "tasks"), where("uid", "==", auth.currentUser.uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
