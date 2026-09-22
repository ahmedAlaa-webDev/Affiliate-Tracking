import { auth, db } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  const token = await user.getIdToken();

  const userDoc = await getDoc(doc(db, "user", user.uid));

  if (!userDoc.exists()) {
    throw new Error("User data not found");
  }

  const userData = userDoc.data();

  return {
    user,
    token,
    role: userData.role,
  };
};



