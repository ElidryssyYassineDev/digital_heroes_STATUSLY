# Statusly

> Hosted status pages for small teams — declare incidents, keep customers in the loop, and see your uptime story without touching a spreadsheet.

**Status:** in active development (Digital Heroes Full Stack Developer Trial submission). Full README with screenshots, demo credentials, and architecture notes lands in Milestone 9 — this is a placeholder so day-one main isn't the framework default.

## Tech stack

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · Prisma · PostgreSQL (Neon) · Better Auth

## Local setup

\`\`\`bash
git clone https://github.com/<you>/statusly && cd statusly
cp .env.example .env   # fill in DATABASE_URL etc.
npm install             # also runs `prisma generate`
npm run dev              # http://localhost:3000
\`\`\`

## License

MIT — see [LICENSE](./LICENSE).

---
Built for the Digital Heroes Full Stack Developer Trial.