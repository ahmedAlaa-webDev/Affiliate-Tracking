import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import type { UserData } from "@/types/UserData";

export const getUserById = async (
  uid: string
): Promise<UserData | null> => {
  const userDoc = await getDoc(
    doc(db, "user", uid)
  );

  if (!userDoc.exists()) {
    return null;
  }

  return {
    id: userDoc.id,
    ...userDoc.data(),
  } as UserData;
};