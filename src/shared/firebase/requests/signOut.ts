import { auth } from "@/app/providers/firebase/firebase";
import { signOut } from "@firebase/auth";

export const logout = () => signOut(auth);
