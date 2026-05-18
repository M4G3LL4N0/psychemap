# Local review — psychemap

**Live:** https://psychemap.noaerth.com (verify DNS)  
**Status:** DEMO — sample maps and evidence labels; not clinical advice.

## Quick start

```bash
cd /Users/joshuadavis/startups/psychemap
pnpm install   # if needed
pnpm dev
pnpm build
```

## Routes to inspect

| Route | What to verify |
|-------|----------------|
| `/` | Hero, trust strip, evidence ladder copy, CTAs to `/map` and `/atlas` |
| `/map` | Submit a question; loading state; redirect to map result |
| `/map/{id}` | Structured map view with evidence levels (demo data) |
| `/atlas` | Topic grid; open one `/atlas/[slug]` entry |
| `/dashboard` | Library / saved maps shell (demo) |
| `/pricing` | Plans labeled; no fake subscriber counts |

## Acceptance criteria

- [ ] Answers in 10s: structured reality maps for consciousness questions, with evidence labels
- [ ] Mobile layout readable on `/map` and homepage
- [ ] Demo/sample outputs clearly labeled (not therapy, not proven science for all nodes)
- [ ] No fake user counts, revenue, or compliance claims
- [ ] `pnpm build` passes locally

## Proof loop (fastest validation)

1. From `/map`, submit: "What is the hard problem of consciousness?"
2. Confirm loading → result page with labeled evidence sections.
3. Screenshot one map layer for portfolio proof.

## Limitations

- Maps use local/demo generation unless backend is wired.
- Not a substitute for therapy, medical, or legal advice.
- Live URL and traction unverified unless marked PROVEN in `startupjourney.md`.
