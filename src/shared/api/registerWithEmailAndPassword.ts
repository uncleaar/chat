import { auth } from "@/app/providers/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { addDocument } from "./addDocument";

export const registerWithEmailAndPassword = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const user = userCredential.user;

    await addDocument("users", { ...user, uid: user.uid }, user.uid);

    await sendEmailVerification(user);
    alert("Verification email sent!");
  } catch (error) {
    console.error(error);
  }
};
