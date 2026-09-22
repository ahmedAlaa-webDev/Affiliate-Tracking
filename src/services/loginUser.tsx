import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import type { UserData } from "@/types/UserData";

export const loginUser = async (
  email: string,
  password: string
) :Promise<UserData> => {
  const usersQuery = query(
    collection(db, "user"),
    where("email", "==", email),
    where("password", "==", password)
  );

  const snapshot = await getDocs(usersQuery);

  if (snapshot.empty) {
    throw new Error("Invalid email or password");
  }

  const userDocument = snapshot.docs[0];

  return {
    id: userDocument.id,
    ...userDocument.data(),
  }as UserData;
};