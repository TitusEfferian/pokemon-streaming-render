import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  Container,
  Center,
  Stack,
  Title,
} from "@mantine/core";
import { theme } from "../theme";
import Header from "./Header";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <Container>
            <Stack gap={'xl'}>
            <Header />
            <Title order={5}>mocking api call with 2s loading to see streaming concept</Title>
            {children}
            </Stack>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
