import { OTPInput } from "@/components/OtpInput/OtpInput";

import React, { useState } from "react";

export const PhoneOtp = () => {
  const [, setOtp] = useState("");
  return (
    <div>
      <OTPInput length={6} onChange={setOtp} />
    </div>
  );
};
