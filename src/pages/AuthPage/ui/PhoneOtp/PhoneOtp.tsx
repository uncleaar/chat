import { OTPInput } from "@/components/OtpInput/OtpInput";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

export const PhoneOtp = () => {
  const [opened, { close }] = useDisclosure(true);

  const [, setOtp] = useState("");

  return (
    <div>
      <Modal opened={opened} onClose={close} title="otp">
        <OTPInput length={6} onChange={setOtp} />
      </Modal>
    </div>
  );
};
