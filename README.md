# Alshddadi — Agriculture Blog (Next.js + Sanity)

Personal blog frontend built with Next.js (App Router), TypeScript, Tailwind CSS and Sanity CMS.

## Setup

1. Copy environment variables into `.env.local` (see `.env.example`).
2. Install dependencies:

```bash
yarn install
```

3. Run development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build
```

## Environment variables
Create a `.env.local` file with:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

## Structure

- `app/` — Next.js App Router pages and layout
- `components/` — Header, Footer, PostCard
- `lib/` — Sanity client, queries, image helper
- `types/` — TypeScript types

## Notes

- Uses GROQ queries in `lib/queries.ts`.
- `getPosts()` and `getPostBySlug(slug)` are in `lib/sanity.ts`.
- Images use `@sanity/image-url` and Next.js `Image` with allowed remote domain `cdn.sanity.io`.
