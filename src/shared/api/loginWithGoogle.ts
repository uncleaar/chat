import { auth } from "@/app/providers/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () =>
  await signInWithPopup(auth, new GoogleAuthProvider());
