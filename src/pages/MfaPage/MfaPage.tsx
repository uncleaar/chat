import { IconMessage } from "@tabler/icons-react";
import styles from "./MfaPage.module.scss";
import { Button, Flex, Input, Text } from "@mantine/core";
import { IMaskInput } from "react-imask";

export const MfaPage = () => {
  return (
    <Flex className={styles.mfa} direction="column">
      <Text size="xl" fw={700}>
        Provide your phone
      </Text>
      <Text p={20} size="lg">
        Fill in your phone number to receive the code
      </Text>

      <Input
        size="lg"
        color="gray"
        radius="sm"
        leftSection={<IconMessage />}
        component={IMaskInput}
        placeholder="Enter phone number"
        mask="+7 (000) 000-00-00"
      />

      <Flex mt={20} gap={20}>
        <Button variant="outline" color="gray" size="md">
          Cancel
        </Button>
        <Button color="gray" size="md">
          Send SMS
        </Button>
      </Flex>
    </Flex>
  );
};
