import { auth } from "@/app/providers/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const logInWithEmailAndPassword = async (data: {
  email: string;
  password: string;
}) => await signInWithEmailAndPassword(auth, data.email, data.password);
