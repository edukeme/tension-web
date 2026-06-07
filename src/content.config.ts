import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    h1: z.string(),
    subhead: z.string(),
    tagline: z.string(),
    price_eur: z.number().nullable(),
    status: z.enum(['live', 'waitlist']),
    problem: z.string(),
    inside: z.array(z.string()),
    who_for: z.array(z.string()),
    who_not: z.array(z.string()),
    cta_label: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
    og_image: z.string().optional(),
    meta_description: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default('Mr. D'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    meta_description: z.string(),
    primary_keyword: z.string(),
    secondary_keywords: z.array(z.string()).default([]),
    hero_image: z.string().optional(),
    category: z.enum(['kink-101', 'dynamics', 'scenes', 'aftercare', 'tests']),
    wordcount: z.number(),
    draft: z.boolean().default(false),
    canonical_url: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { products, posts };
