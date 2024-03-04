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
  collection: "users",
  data: T,
  id?: string
) => {
  if (id) {
    const documentRef = doc(db, collection, id);
    await setDoc(documentRef, data);

    console.log(data, " data");
    return data;
  }

  console.log(data, " data2");
  await addDoc(col(db, collection), data);
  return data;
};
