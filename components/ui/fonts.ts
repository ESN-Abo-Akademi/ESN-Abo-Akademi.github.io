import { Archivo, Lato } from "next/font/google";

// ESN's official licensed display face (Kelson Sans) cannot be self-hosted,
// so the site pairs Lato — ESN's official secondary font — with Archivo at
// heavy weights for display. Both are self-hosted by next/font at build time,
// so the static export ships its own font files.
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
});

export const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});
