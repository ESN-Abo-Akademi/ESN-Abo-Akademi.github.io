# Adding real photos to the site

Drop image files into `public/photos/` (create the folder if it doesn't exist).
Anything in `public/` ships with the static build, so only put files there that
are cleared for publication.

Good sources:

- **Instagram archive** (@esnaboakademi) — your own event photos; people shots
  should come from here.
- **Timetravels partner portal** (partners.timetravels.fi) — partner-licensed
  trip/marketing imagery for the Timetravels trips. Log in and download
  manually; keep original filenames so the source stays traceable.

Preferred: landscape orientation, ≥1600px wide, JPEG. After dropping files in,
ask Claude to wire them into the patch-wall heroes and trip cards (they replace
the Unsplash hotlinks in `app/(frontend)/trips/page.tsx`,
`app/(frontend)/events/page.tsx`, and `components/ui/card.tsx`).
