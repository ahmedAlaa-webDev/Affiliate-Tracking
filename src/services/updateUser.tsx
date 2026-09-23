import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string | undefined,
  data: {
    referral?: string;
    email?: string;
    password?: string;
    name?: string;
  },
) => {
  if( uid == undefined)return "user id undefined"
  await updateDoc(doc(db, "user", uid), data);
};
