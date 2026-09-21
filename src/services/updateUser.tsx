import { db } from "@/firebase/config";
import {
  doc,
  updateDoc,
} from "firebase/firestore";

export const updateUser = async (
  uid: string,
  data: {
    referral: string;
  }
) => {
  await updateDoc(
    doc(db, "user", uid),
    data
  );
};