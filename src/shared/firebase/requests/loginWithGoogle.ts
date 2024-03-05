import { auth } from "@/app/providers/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { checkDocumentExist } from "./checkDocument";
import { addDocument } from "./addDocument";

export const getUserFieldsFromFireBase = (user: {
  uid: string;
  email: string;
}) => ({
  uid: user.uid,
  email: user.email,
});

export const loginWithGoogle = async () => {
  const response = await signInWithPopup(auth, new GoogleAuthProvider());
  const userExist = await checkDocumentExist("users", response.user.uid);

  if (!userExist) {
    await addDocument(
      "users",
      { ...getUserFieldsFromFireBase(response.user), pokemons: [] },
      response.user.uid
    );
  }

  return response;
};
