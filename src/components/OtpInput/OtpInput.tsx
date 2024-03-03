// OTPInput.tsx
import { Group, TextInput } from "@mantine/core";
import { useState } from "react";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

export const OTPInput = ({ length, onChange }: OTPInputProps) => {
  const [otpValues, setOtpValues] = useState(Array<string>(length).fill(""));

  const handleChange = (value: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(""));

    // Auto-focus to next input
    if (value && index < length - 1) {
      const nextField = document.getElementById(`otp-field-${index + 1}`);
      if (nextField) {
        (nextField as HTMLInputElement).focus();
      }
    }
  };

  return (
    <Group>
      {otpValues.map((_, index) => (
        <TextInput
          key={index}
          id={`otp-field-${index}`}
          value={otpValues[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          maxLength={1}
          style={{ width: 50, textAlign: "center" }}
        />
      ))}
    </Group>
  );
};
