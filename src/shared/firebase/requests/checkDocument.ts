import { db } from "@/app/providers/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const checkDocumentExist = async (collection: "users", id: string) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return true;
  return false;
};
