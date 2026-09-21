import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getUsers = async () => {
  const usersCollection = collection(db, "user");

  const usersQuery = query(
    usersCollection,
    where("role", "==", "user")
  );

  const snapshot = await getDocs(usersQuery);

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return users;
};