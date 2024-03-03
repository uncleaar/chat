import { useEffect, useState } from "react";
import { auth } from "@/app/providers/firebase/firebase";
import { ApplicationVerifier, RecaptchaVerifier } from "firebase/auth";

export function useRecaptcha(componentId: string) {
  const [recaptcha, setRecaptcha] = useState<ApplicationVerifier>();

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      componentId!,
      {
        size: "invisible",
        callback: () => {},
      },
      auth
    );

    setRecaptcha(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [componentId]);

  return recaptcha;
}
