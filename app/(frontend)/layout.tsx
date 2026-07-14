import { Provider } from "@/components/ui/provider";
import { LayoutWrapper } from "@/components/ui/layout-wrapper";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ESN ÅA",
  description: "ESN Åbo Akademi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
