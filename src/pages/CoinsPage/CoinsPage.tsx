import { Layout } from "@/common/Layout/Layout";
import { useGetCoins } from "@/shared/hooks/useGetCoins";
import { Avatar, Flex, ScrollArea, Table } from "@mantine/core";

import styles from "./CoinsPage.module.scss";

export const CoinsPage = () => {
  const { data, isLoading } = useGetCoins();

  if (isLoading) return <p>loading</p>;

  console.log(data, "data");

  const rows = data?.coins.map((coin) => (
    <Table.Tr key={coin.name} className={styles.coin}>
      <Table.Td p={20}>
        <Flex align="center" gap={10}>
          <Avatar src={coin.iconUrl} w={40} h={40} alt={`icon-${coin.name}`} />
          {coin.name}
        </Flex>
      </Table.Td>
      <Table.Td p={20}>$ {coin.price.toString().slice(0, 8)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Layout>
      <ScrollArea h={400} scrollbars="y" w={650}>
        <Table bg="#082567" className={styles.table} borderColor="#fff">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className={styles.column}>Currency</Table.Th>
              <Table.Th className={styles.column}>Current price</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Layout>
  );
};
