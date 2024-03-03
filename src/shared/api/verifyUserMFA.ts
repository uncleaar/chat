import { auth } from "@/app/providers/firebase/firebase";
import {
  ApplicationVerifier,
  MultiFactorError,
  MultiFactorResolver,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  getMultiFactorResolver,
} from "firebase/auth";

export async function verifyUserMFA(
  error: MultiFactorError,
  recaptchaVerifier: ApplicationVerifier,
  selectedIndex: number
): Promise<
  false | { verificationId: string; resolver: MultiFactorResolver } | void
> {
  const resolver = getMultiFactorResolver(auth, error);

  if (
    resolver.hints[selectedIndex].factorId ===
    PhoneMultiFactorGenerator.FACTOR_ID
  ) {
    const phoneInfoOptions = {
      multiFactorHint: resolver.hints[selectedIndex],
      session: resolver.session,
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);
    try {
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptchaVerifier
      );
      return { verificationId, resolver };
    } catch (e) {
      return false;
    }
  }
}
