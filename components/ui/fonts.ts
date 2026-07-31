import { Lato, Oswald } from "next/font/google";

// ESN Visual Identity Manual typography (p10): Kelson Sans for display,
// Lato for body. Kelson Sans is licensed and lives in the ESN Brand Package;
// Oswald is the VIM's approved alternative and is self-hosted here by
// next/font, so the static export ships its own font files.
export const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
});

export const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});
