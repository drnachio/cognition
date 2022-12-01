# Cognition Project Monorepo

The Cognition Project Main Monorepo

## Start Project

To start the project `git clone` it and run:

- `git clone git@github.com:drnachio/cognition.git`
- `cd cognition`
- `pnpm i`
- `pnpm i -g vercel` (if not installed)
- `vercel link` (to the project `cognition-web`)
- `vercel env pull .env` to the the .env file
- `pnpm run db-generate` to generate the Prisma Client types
- `pnpm run dev`

> **Note**: The build is linked by `pnpm dlx turbo link` to the Vercel build cache

## Testing URL

You can access the importer project working on [vercel](https://cognition-web.vercel.app/).
