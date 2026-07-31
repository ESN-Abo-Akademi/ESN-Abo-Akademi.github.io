import { Box, Image, Text, VStack, type BoxProps } from "@chakra-ui/react";

/**
 * A collage of haalarit-style patches — the sewn badges on Finnish student
 * overalls. Each patch is a rotated, stitch-outlined block carrying one real
 * fact. Patches with `photo` reserved for future real event photos.
 */
export type Patch = {
  bg: string;
  label?: string;
  sub?: string;
  logoSrc?: string;
  round?: boolean;
  rotate: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  w: string;
  h: string;
  labelSize?: object;
};

const STITCH = {
  outline: "2px dashed rgba(255,255,255,0.55)",
  outlineOffset: "-8px",
};

const STITCH_DARK = {
  outline: "2px dashed rgba(46,49,146,0.35)",
  outlineOffset: "-8px",
};

export function PatchWall({
  patches,
  ...props
}: { patches: Patch[] } & BoxProps) {
  return (
    <Box
      position="relative"
      w={{ base: "240px", sm: "300px", md: "420px" }}
      h={{ base: "240px", sm: "300px", md: "420px" }}
      flexShrink="0"
      style={{ perspective: "700px" }}
      {...props}>
      {patches.map((patch, index) => (
        <VStack
          key={index}
          position="absolute"
          top={patch.top}
          left={patch.left}
          right={patch.right}
          bottom={patch.bottom}
          w={patch.w}
          h={patch.h}
          bg={patch.bg}
          color={patch.bg === "white" ? "esn.darkBlue.500" : "white"}
          borderRadius={patch.round ? "full" : "2xl"}
          transform={`rotate(${patch.rotate}deg)`}
          boxShadow="md"
          justifyContent="center"
          gap="0.5"
          px="2"
          textAlign="center"
          animation={`patchIn 0.55s ease-out ${index * 90}ms backwards`}
          transition="transform 0.25s ease, box-shadow 0.25s ease"
          _hover={{
            transform: `rotate(${patch.rotate * 0.4}deg) rotateX(8deg) translateY(-6px) scale(1.05)`,
            boxShadow: "xl",
            zIndex: "1",
          }}
          css={{
            ...(patch.bg === "white" ? STITCH_DARK : STITCH),
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              transition: "none",
              "&:hover": {
                transform: `rotate(${patch.rotate}deg)`,
              },
            },
          }}>
          {patch.logoSrc && (
            <Image
              src={patch.logoSrc}
              alt="ESN star logo"
              w="70%"
              fit="contain"
            />
          )}
          {patch.label && (
            <Text
              fontFamily="heading"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="wider"
              lineHeight="short"
              fontSize={patch.labelSize ?? { base: "xs", md: "md" }}>
              {patch.label}
            </Text>
          )}
          {patch.sub && (
            <Text
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize={{ base: "8px", md: "2xs" }}
              opacity="0.85">
              {patch.sub}
            </Text>
          )}
        </VStack>
      ))}
    </Box>
  );
}
