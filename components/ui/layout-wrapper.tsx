import { Box, Container, VStack } from "@chakra-ui/react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const ESN_STRIPE_COLOR_TOKENS = [
  "colors.esn.darkBlue.500",
  "colors.esn.cyan.500",
  "colors.esn.magenta.500",
  "colors.esn.green.500",
  "colors.esn.orange.500",
];

function buildStripeGradient(colors: string[]) {
  return colors
    .map(
      (color, i) => `var(${color}) ${i * 20}%, var(${color}) ${(i + 1) * 20}%`,
    )
    .join(", ");
}

function Stripe() {
  const ESN_COLORS_CSS_ITEMS = ESN_STRIPE_COLOR_TOKENS.reduce(
    (acc, token) => {
      acc[`--${token.split(".")[2]}`] = token;
      return acc;
    },
    {} as Record<string, string>,
  );

  return (
    <Box
      h="4px"
      w="100%"
      css={ESN_COLORS_CSS_ITEMS}
      style={{
        backgroundImage: `linear-gradient(to right, ${buildStripeGradient(Object.keys(ESN_COLORS_CSS_ITEMS))})`,
        backgroundSize: `100%`,
      }}
    />
  );
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <VStack className="site-chrome" minH="dvh" minW="dvw" gap="0">
      <Container
        className="site-nav-surface"
        fluid
        p="0"
        m="0"
        backgroundColor="transparent"
        position="sticky"
        top="0"
        zIndex="sticky">
        <Stripe />
        <Navbar />
      </Container>
      <Box flex="1" w="full">
        {children}
      </Box>
      <Footer />
      <Stripe />
    </VStack>
  );
}
