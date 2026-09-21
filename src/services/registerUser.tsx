import { auth, db } from "@/firebase/config";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  role: string;
  totalClicks:number
};

export const registerUser = async ({
  name,
  email,
  password,
  role,
  totalClicks
}: RegisterData) => {

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  const uid = user.uid;

  await setDoc(doc(db, "user", uid), {
    name,
    email,
    role,
    totalClicks
  });

  return {
    uid,
    user,
  };
};