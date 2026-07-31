"use client";

import { useSyncExternalStore } from "react";
import { Box, Image } from "@chakra-ui/react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

// Static prerender assumes motion is fine; the client corrects on hydration.
function getServerSnapshot() {
  return false;
}

/**
 * Full-bleed background video for hero sections. Muted, looping, and inert.
 * Users with prefers-reduced-motion get the poster frame instead of motion,
 * and the poster also paints while the video streams in.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <Box position="absolute" inset="0" overflow="hidden">
      {reducedMotion ? (
        <Image
          src={poster}
          alt=""
          w="full"
          h="full"
          fit="cover"
          position="absolute"
          inset="0"
        />
      ) : (
        <Box
          as="video"
          // @ts-expect-error video element props pass through Chakra's Box
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          src={src}
          position="absolute"
          inset="0"
          w="full"
          h="full"
          objectFit="cover"
        />
      )}
    </Box>
  );
}
