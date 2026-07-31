import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

// STATIC_EXPORT=1 produces the static package deployed to esnabo.org
// (Apache shared hosting — trailing slashes map routes to directories).
// The Payload admin/API cannot be statically exported; scripts/build-static.sh
// sets this flag and temporarily excludes app/(payload) during the build.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default withPayload(nextConfig);
