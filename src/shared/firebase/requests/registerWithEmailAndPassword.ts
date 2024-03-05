import { auth } from "@/app/providers/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

    await addDocument("users", { email: user.email, uid: user.uid });

    // await sendEmailVerification(user);
  } catch (error) {
    console.error(error);
  }
};
