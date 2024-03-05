import { db } from "@/app/providers/firebase/firebase";
import {
  addDoc,
  collection as col,
  doc,
  DocumentData,
  setDoc,
  WithFieldValue,
} from "firebase/firestore";

export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collection: string,
  data: T,
  id?: string
) => {
  if (id) {
    const documentRef = doc(db, collection, id);
    await setDoc(documentRef, data);
    return data;
  }

  await addDoc(col(db, collection), data);
  return data;
};
