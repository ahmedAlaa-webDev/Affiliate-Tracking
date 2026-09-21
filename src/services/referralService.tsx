import { db } from "@/firebase/config";

import {
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

export const trackReferralClick = async (uid: string) => {
  const userRef = doc(db, "user", uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    throw new Error("Referral user not found");
  }

  const userData = userSnapshot.data();

  if (!userData.referral) {
    throw new Error("Destination URL not found");
  }

  await updateDoc(userRef, {
    totalClicks: increment(1),
  });

  return userData.referral;
};