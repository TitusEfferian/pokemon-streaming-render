import { Card, Stack, Text } from "@mantine/core";
import Image from "next/image";

const PokemonCard = ({ data }: { data: any }) => {
  return (
    <Card key={data.name} shadow="md" withBorder>
      <Stack justify="center" align="center">
        <Image
          alt={data.name}
          width={120}
          height={120}
          src={data.sprites.front_default}
        />
        <Text>{data.name}</Text>
      </Stack>
    </Card>
  );
};

export default PokemonCard;
