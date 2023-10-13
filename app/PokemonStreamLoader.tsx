import { Card, Center, Loader, SimpleGrid } from "@mantine/core";

const CardLoader = () => {
  return (
    <Card shadow="md" withBorder w={298} h={194}>
      <Center h={"100%"}>
        <Loader />
      </Center>
    </Card>
  );
};

export default function PokemonStreamLoader() {
  return (
    <>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </>
  );
}
