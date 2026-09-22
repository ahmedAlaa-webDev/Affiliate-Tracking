import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const deleteUserData = async (uid: string) => {
  await deleteDoc(doc(db, "user", uid));
};