import { Provider } from "@/components/ui/provider";
import { LayoutWrapper } from "@/components/ui/layout-wrapper";
import { oswald, lato } from "@/components/ui/fonts";
import type { Metadata } from "next";
import "./globals.scss";

const SITE = "https://esnabo.org";

// Chakra's dark semantic tokens are activated by the `dark` class, while the
// site's decorative surfaces follow the operating-system colour preference.
// Set the class before the body renders so both systems change together and
// mobile visitors never receive dark surfaces with light-mode text colours.
const COLOR_MODE_SCRIPT = `
  (() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      const isDark = preference.matches;
      root.classList.toggle("dark", isDark);
      root.style.colorScheme = isDark ? "dark" : "light";
    };

    sync();
    if (preference.addEventListener) {
      preference.addEventListener("change", sync);
    } else {
      preference.addListener(sync);
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ESN Åbo Akademi | Your international community in Turku (Åbo)",
    template: "%s | ESN Åbo Akademi",
  },
  description:
    "ESN Åbo Akademi is the Erasmus Student Network section at Åbo Akademi University in Turku (Åbo), Finland — events, trips, ESNcard, and support for exchange students.",
  applicationName: "ESN Åbo Akademi",
  keywords: [
    "ESN Turku",
    "ESN Åbo",
    "ESN Åbo Akademi",
    "Erasmus Student Network Turku",
    "exchange students Turku",
    "exchange student Åbo Akademi",
    "ESNcard Turku",
    "student events Turku",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ESN Åbo Akademi",
    locale: "en_GB",
    url: SITE,
    title: "ESN Åbo Akademi | Your international community in Turku (Åbo)",
    description:
      "Events, trips, the ESNcard, and a survival guide for exchange and international students in Turku (Åbo), Finland.",
    images: [
      {
        url: "/video/hero-home-poster.jpg",
        width: 1280,
        height: 720,
        alt: "ESN Åbo Akademi — your international community in Turku (Åbo)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESN Åbo Akademi",
    description:
      "Your international community in Turku (Åbo) — events, trips, and the ESNcard.",
    images: ["/video/hero-home-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data: tells search engines plainly that this is the Erasmus
// Student Network section serving Turku (Åbo), which is what students are
// actually searching for.
const ORGANISATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "ESN Åbo Akademi",
  alternateName: [
    "ESN ÅA",
    "ESN Turku",
    "Erasmus Student Network Åbo Akademi",
    "ESN vid Åbo Akademi rf",
  ],
  url: SITE,
  logo: `${SITE}/esn-abo-logo.png`,
  image: `${SITE}/video/hero-home-poster.jpg`,
  foundingDate: "1994",
  description:
    "ESN Åbo Akademi is the Erasmus Student Network section at Åbo Akademi University, a volunteer-run non-profit organising events, trips and support for exchange and international students in Turku (Åbo), Finland.",
  email: "board@esnabo.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tuomiokirkontori 1",
    addressLocality: "Turku",
    postalCode: "20500",
    addressCountry: "FI",
  },
  areaServed: { "@type": "City", name: "Turku (Åbo)" },
  parentOrganization: {
    "@type": "NGO",
    name: "Erasmus Student Network",
    url: "https://esn.org",
  },
  sameAs: [
    "https://www.instagram.com/esnaboakademi/",
    "https://www.facebook.com/EsnAboAkademi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${lato.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: COLOR_MODE_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANISATION_JSON_LD),
          }}
        />
      </head>
      <body>
        <Provider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Provider>
      </body>
    </html>
  );
}
