import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://esnabo.org";

// Priority reflects what a student searching for us most needs to land on.
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/arriving", priority: 0.9 },
  { path: "/survival-guide", priority: 0.9 },
  { path: "/events", priority: 0.8 },
  { path: "/trips", priority: 0.8 },
  { path: "/membership", priority: 0.8 },
  { path: "/esncard", priority: 0.7 },
  { path: "/arriving/checklist", priority: 0.7 },
  { path: "/about", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE}${path === "/" ? "/" : path + "/"}`,
    lastModified,
    changeFrequency: path === "/events" ? "weekly" : "monthly",
    priority,
  }));
}
