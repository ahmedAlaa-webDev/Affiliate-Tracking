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
  totalClicks:number;
  referral : string;
};

export const registerUser = async ({
  name,
  email,
  password,
  role,
  totalClicks,
  referral
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
    totalClicks,
    referral
  });

  return {
    uid,
    user,
  };
};