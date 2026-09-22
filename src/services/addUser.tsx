import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const addUser = async ({name, email, password,totalClicks , role,referral}:{name: string, email: string , password:string,totalClicks:number,role:string ,referral:string}) => {

  const usersCollection = collection(db, "user");


  const userRef = await addDoc(usersCollection, {
    name,
    email,
    password,
    role,
    totalClicks,
    referral,
  });


  console.log("Document written with ID:", userRef.id);

  return userRef.id;
};
