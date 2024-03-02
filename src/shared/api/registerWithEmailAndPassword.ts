import { auth } from "@/app/providers/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerWithEmailAndPassword = async (data: {
  email: string;
  password: string;
}) => createUserWithEmailAndPassword(auth, data.email, data.password);
