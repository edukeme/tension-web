# Tension Blog Writer Skill

**Purpose**: Write and port blog posts for the Tension marketing website. Handles frontmatter, content structure, Quick Navigation, and FAQ sections.

## Blog Post Structure

All blog posts are MDX files in `src/content/posts/` with the following frontmatter:

```mdx
---
title: "Post Title (Question Format Preferred)"
slug: post-slug-in-kebab-case
author: Mr. D
date: 2026-05-20
meta_description: "SEO description (160 chars max)"
primary_keyword: main keyword
secondary_keywords:
  - keyword 1
  - keyword 2
category: tests  # one of: kink-101, dynamics, scenes, aftercare, tests
wordcount: 2000
draft: false
canonical_url: /blog/post-slug-in-kebab-case
faq:
  - q: "Question 1?"
    a: "Answer 1"
  - q: "Question 2?"
    a: "Answer 2"
---
```

## Key Rules

### 1. No Manual Quick Navigation
❌ **DO NOT** include a manual "## Quick Navigation" section in the post markdown.

The layout automatically generates Quick Navigation from all h2 and h3 headings. It will appear as a linked table of contents at the top of the post.

### 2. Use Semantic Headings
Structure posts with h2 for major sections, h3 for subsections:

```markdown
## Main Section
Content here...

### Subsection
Nested content...
```

These headings automatically become Quick Navigation links.

### 3. FAQ is Optional
If the post has common reader questions at the end, add FAQ to frontmatter. It will render as a styled section below the post content.

If no FAQ is provided, that section won't display.

### 4. Imports at Top
Include any component imports after frontmatter closing `---`:

```mdx
---
...frontmatter...
---

import CTABlock from '@/components/CTABlock.astro';

Post content starts here...
```

## What's Auto-Generated

### Quick Navigation
- Scans all h2/h3 headings in post
- Creates clickable table of contents
- Each link jumps to that section
- Appears in styled box before content
- Disappears if no headings found

### FAQ Section
- Renders after all post content
- Uses styled FAQ component
- Only shows if `faq` array in frontmatter
- Questions and answers are from frontmatter

## Content Style

Follow `BRAND-VOICE.md` for voice and tone:
- Direct, conversational, no corporate language
- Practical advice grounded in real experience
- "Why" matters more than "how"
- Raw honesty about difficulty

## Coaching Vignettes (Selective — Not Every Post)

On emotional/psychological posts, include **one** short coaching vignette to ground an abstract point in lived reality. Skip on tactical how-to posts (safewords, gear, checklists).

**Approved format — Mr. D voice, 2–4 sentences, placed after the main point lands:**

> "Every new dominant I work with hits this exact wall. It usually sounds like: 'I froze. I felt ridiculous.' It's not ridiculous. Here's what's actually happening."

**Rules:**
1. One per post maximum — mid-post, never the opener
2. After the point, not before. The vignette proves; it doesn't introduce
3. Use framing like "I see this constantly", "Every [dominant/submissive] I work with", "She texted me after their scene: '...'"
4. Keep it punchy — Mr. D's voice, not a therapy anecdote
5. No "Take Marcus and Elena..." (Perel 3rd-person formula — wrong register)
6. No "one of my clients" — brand persona framing only

**Use on:** sub drop, dom drop, dominant mindset, sub space, submission identity, D/s relationship dynamics
**Skip on:** safewords, how to start BDSM, gear guides, checklists, scene walkthroughs

## Testing

After creating/updating a post:

1. **Dev server**: `npm run dev` in tension-web root
2. **Check the post**: Visit `http://localhost:4321/blog/<slug>`
3. **Verify**:
   - Quick Navigation box shows all section headings ✓
   - Each link in TOC jumps to correct section ✓
   - FAQ appears at bottom (if included) ✓
   - No duplicate Quick Navigation sections ✓

## File Naming

Posts are named with descriptive slugs matching the `slug` field:
- `bdsm-couples-test.mdx`
- `bondage-for-beginners.mdx`
- `am-i-kinky.mdx`

## Metadata Requirements

All posts must have:
- **slug**: exact kebab-case filename (no .mdx)
- **category**: one of the 5 allowed categories
- **wordcount**: actual word count of post body
- **primary_keyword**: main SEO keyword (1-2 words)
- **secondary_keywords**: 2-4 variations for SEO
- **meta_description**: 155-160 chars, compelling hook

## Common Issues

### Duplicate Quick Navigation
If you see "Quick Navigation" twice, remove the manual `## Quick Navigation` section from markdown. The layout auto-generates it.

### TOC Links Not Working
Quick Navigation only finds h2 and h3. Make sure you're using `## Section Title` and `### Subsection Title`, not `# Title`.

### FAQ Not Showing
Ensure the `faq` array is properly formatted in frontmatter with `q` and `a` keys, and it's a valid YAML array.

## Editor Workflow

1. Create `.mdx` file in `src/content/posts/`
2. Add frontmatter with all required fields
3. Write content (no manual Quick Navigation)
4. Use h2 for sections, h3 for subsections
5. Add FAQ if helpful (optional)
6. Run `npm run build` to check for errors
7. Start dev server and preview at `/blog/<slug>`
