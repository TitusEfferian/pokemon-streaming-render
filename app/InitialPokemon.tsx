import { Card, Stack, Text } from "@mantine/core";
import Image from "next/image";

const getPokemonDetailData = async (pokemonId: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
    cache: "no-store",
  });

  return res.json();
};

export default async function InitialPokemon({ id }: { id: number }) {
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
