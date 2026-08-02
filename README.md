# Tension

Tension is an Astro site for adults exploring intentional intimacy, BDSM, and D/s dynamics. It combines educational articles, email acquisition, and a catalog of digital products.

## Project structure

```text
docs/                         Internal project knowledge
  brand/                      Voice and editorial direction
  content/blog/               Blog roadmap, drafts, and archived revisions
  operations/                 Agent and operating notes
  planning/                   Sprint plans
  research/seo/               Keyword and competitor research datasets
  strategy/                   Business, marketing, product, and technical plans

public/                       Static web assets and finished downloads
src/
  components/                 Reusable Astro components
  content/posts/              Canonical published blog articles
  content/products/
    catalog/                  Storefront metadata used by the website
    lead-magnets/             Free source manuscripts
    materials/                Paid product source manuscripts
  layouts/                    Page layouts
  lib/                        Shared application logic
  pages/                      Site routes and API endpoints
  styles/                     Global styles and design tokens
```

The website reads product records only from `src/content/products/catalog/**/*.json`. Markdown manuscripts are intentionally stored beside the catalog but are not published directly.

## Content lifecycle

1. Research and early drafts live in `docs/content/` and `docs/research/seo/`.
2. A publish-ready article moves to `src/content/posts/` and receives complete frontmatter.
3. Product copy is edited in `src/content/products/materials/` or `lead-magnets/`.
4. Finished, approved PDF exports go in `public/downloads/` only when they are ready for delivery.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

The local development server runs at `http://localhost:4321` by default.
