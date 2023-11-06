import { SimpleGrid } from "@mantine/core";

import { Suspense } from "react";
import PokemonStream from "./PokemonStream";
import InitialPokemon from "./InitialPokemon";
import PokemonStreamLoader from "./PokemonStreamLoader";

/**
 * still have some ts error for streaming feature
 * https://github.com/vercel/next.js/issues/42292
 */

export default async function HomePage() {
  return (
    <SimpleGrid cols={3}>
      {/**
       * create a seperate component to do a SSR / initial data fetcing
       */}
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={1} />
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={10} />
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={20} />
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={30} />
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={40} />
      {/* @ts-expect-error Async Server Component */}
      <InitialPokemon id={50} />

    </SimpleGrid>
  );
}
