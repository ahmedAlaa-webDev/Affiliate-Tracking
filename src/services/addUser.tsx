import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const addUser = async ({
  name,
  email,
  password,
  totalClicks,
  role,
  referral,
}: {
  name: string;
  email: string;
  password: string;
  totalClicks: number;
  role: string;
  referral: string;
}) => {
  const usersCollection = collection(db, "user");

  // Check if email already exists
  const existingUserQuery = query(
    usersCollection,
    where("email", "==", email)
  );

  const existingUsers = await getDocs(existingUserQuery);

  if (!existingUsers.empty) {
    throw new Error("User already exists");
  }

  // Add new user
  const userRef = await addDoc(usersCollection, {
    name,
    email,
    password,
    role,
    totalClicks,
    referral,
  });

  console.log("Document written with ID:", userRef.id);

  return userRef;
};