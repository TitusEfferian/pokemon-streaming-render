import { Card, Stack, Text } from "@mantine/core";
import Image from "next/image";

const getPokemonDetailData = async (pokemonId: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
    cache: "no-store",
  });
  /**
   * do some mock so we can simulate the difference between stream vs server rendered
   */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json());
    }, 2000);
  }) as unknown as { name: string; sprites: { front_default: string } };
};

export default async function PokemonStream({ id }: { id: number }) {
  const data = await getPokemonDetailData(id);
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
}
