import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const addUser = async ({name, email, password,totalClicks , role}:{name: string, email: string , password:string,totalClicks:number,role:string}) => {

  const usersCollection = collection(db, "user");


  const userRef = await addDoc(usersCollection, {
    name,
    email,
    password,
    role,
    totalClicks,
  });


  console.log("Document written with ID:", userRef.id);

  return userRef.id;
};
