import { Provider } from "@/components/ui/provider";
import { LayoutWrapper } from "@/components/ui/layout-wrapper";
import { archivo, lato } from "@/components/ui/fonts";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "ESN Åbo Akademi | Your international community in Turku (Åbo)",
    template: "%s | ESN Åbo Akademi",
  },
  description:
    "ESN Åbo Akademi is the Erasmus Student Network section at Åbo Akademi University in Turku (Åbo), Finland — events, trips, ESNcard, and support for exchange students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${archivo.variable} ${lato.variable}`}>
      <body>
        <Provider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
