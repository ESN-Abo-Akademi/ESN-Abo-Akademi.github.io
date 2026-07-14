"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";
import React from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
