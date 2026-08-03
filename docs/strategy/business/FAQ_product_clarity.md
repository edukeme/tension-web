# Tension App — Frequently Asked Questions & Product Clarity

> **Current-state note — August 3, 2026:** This document describes a future coaching-app concept. Tension's current offer is educational publishing: articles, checklists, workbooks, playbooks, and scene guides. See `docs/brand/COMMUNICATION.md` for active positioning.

**Date:** May 10, 2026
**Author:** Mr. D (with Paulo)

---

## FAQ 1: What Does the App Actually Do?

Tension is an AI-powered relationship coaching app that specializes in couples exploring power dynamics, D/s relationships, and alternative intimacy.

### What the app DOES ✅

- **Psychology** — "Why does my submissive enjoy bratting?"
- **Communication** — "How do I negotiate boundaries with my partner?"
- **Structure** — "Design a 30-minute scene with light bondage and tension building"
- **Emotion** — "I felt disconnected after our scene. What happened?"
- **Safety** — "What do I need to know before using restraints?"
- **Growth** — "How do we advance from beginner to intermediate?"
- **Lifestyle** — "How do we maintain our dynamic outside the bedroom?"
- **Planning** — "My partner and I want to explore D/s. Where do we start?"
- **Communication** — "How do I introduce the idea of blindfolds to my partner?"
- **Presence** — "What should I say to establish my Dominant presence before a scene?"
- **Reassurance** — "I'm nervous about my first spanking scene. What do I need to know?"
- **Behavioral** — "My submissive bratted during dinner. How do I respond?"
- **Templates** — "Create a negotiation template for a new couple exploring power exchange"
- **Aftercare** — "What does aftercare look like after an intense scene?"
- **Check-ins** — "How do we do a weekly check-in about our dynamic?"

### What the app does NOT do ❌

- **Sexual technique instruction** — "How do I spank harder without hurting her?"
- **Sexual physiology** — "What positions work best during bondage?"
- **Erotica generation** — "Write me a story about..."
- **Body-part specific coaching** — "How do I stimulate..."
- **Performance advice** — "How do I last longer during..."

**The sex is their business. We coach everything AROUND it — the trust, the communication, the structure, the psychology, the safety, the emotional connection.**

---

## FAQ 2: Will "BDSM" and "Kink" Keywords Get Us Flagged?

The answer is nuanced — it depends on **WHERE** you use them.

### Where these keywords are SAFE ✅

| Channel | "Kink" | "BDSM" | Notes |
|---------|--------|--------|-------|
| **Your blog/SEO content** | ✅ | ✅ | People search "BDSM for beginners" — you WANT to rank for that |
| **Reddit / FetLife posts** | ✅ | ✅ | The audience expects it |
| **The app itself (behind login)** | ✅ | ✅ | After age verification, use whatever language serves the user |
| **Newsletter / email** | ✅ | ✅ | Subscribers opted in |
| **Podcast appearances** | ✅ | ✅ | Audio content, less scrutinized |

### Where these keywords are RISKY ⚠️

| Channel | "Kink" | "BDSM" | What Happens |
|---------|--------|--------|-------------|
| **App Store listing** | ⚠️ Risky | ⚠️ Risky | May trigger manual review. Could pass as "education" but depends on reviewer |
| **Google Ads** | ⚠️ Restricted | ❌ Likely blocked | Adult content policy |
| **Facebook/Instagram Ads** | ❌ Blocked | ❌ Blocked | Meta's policy is strict on "sexual content" |
| **Stripe merchant description** | ⚠️ Flagged | ⚠️ Flagged | May pass as education, but could freeze during review |

### Where you'll get BANNED ❌

| Channel | What Happens |
|---------|-------------|
| **TikTok ads** | Instant rejection |
| **YouTube ads** | Age-restriction cascade |
| **LinkedIn** | Wrong audience anyway |

---

## FAQ 3: What's the Two-Language Strategy?

You speak two languages depending on the channel:

### Language 1: "Public Face" (App Store, Payments, Ads)

| Instead of... | Use... |
|----------------|--------|
| BDSM | Power dynamics / D/s relationships |
| Kink | Alternative intimacy / Adventurous couples |
| Fetish | Sensory exploration / Preference mapping |
| Bondage | Trust exercises / Sensory restriction |
| Spanking | Impact play |
| Submission | Surrender / Receptive partner |
| Dominance | Leadership / Intentional presence |
| Scene | Intentional session / Guided experience |
| Submissive | Partner who receives |
| Dominant | Partner who leads |

### Language 2: "Behind the Door" (Blog, Community, In-App)

- "Complete BDSM checklist for beginner couples"
- "How to plan your first kink scene"
- "Bondage safety guide for D/s relationships"
- "Understanding submissive psychology"
- "Dominant training for beginners"

---

## FAQ 4: Why Is This Not a "Sex App"?

**We're coaching the RELATIONSHIP and the DYNAMIC. Not the sex act.**

Look at every prompt the app handles:
- "My partner and I want to explore **D/s**" → relationship structure
- "How do I introduce the idea of **blindfolds**" → a scarf on someone's eyes
- "Plan a **scene** that builds tension" → structured intimate time together
- "What should I say to establish my **Dominant presence**" → leadership coaching
- "I'm nervous about my first **spanking scene**" → emotional coaching about anxiety
- "My **submissive bratted** during dinner" → relationship behavior coaching
- "Create a **negotiation template**" → communication tool
- "What does **aftercare** look like" → emotional wellness
- "How do we do a **weekly check-in**" → standard relationship practice

**NOT ONE describes a sex act. Not one is graphic. Not one would make a payment processor or AI provider uncomfortable.**

These are **relationship coaching questions** that use the vocabulary of power dynamics. That's it.

### The AI Filter Test

```
Filter asks: Does this prompt request...
├── Graphic sexual description? → NO
├── Erotica / sexual fantasy generation? → NO
├── Instructions for sexual technique? → NO
├── CSAM or illegal content? → NO
├── Non-consensual scenarios? → NO
│
└── It's relationship coaching with
    specific lifestyle vocabulary? → ✅ PASS
```

---

## FAQ 5: Will Chinese AI Models (DeepSeek/GLM) Block This Content?

**95% confident they will NOT block these prompts.**

Here's why:

- DeepSeek and GLM have content safety systems focused primarily on **political content** and **illegal content under Chinese law**
- Sexual content that isn't illegal under Chinese law (which is actually less puritanical than US corporate policies in some areas) tends to pass through
- Our prompts are **relationship coaching with specific vocabulary** — not erotica, not sexual technique, not graphic descriptions

### What to test before building:

Run these exact prompts through DeepSeek API and GLM API:
1. "I'm a Dominant planning a scene with my submissive partner. She enjoys light bondage, blindfolds, and spanking. We're both beginners. Design a 45-minute scene with clear phases, emotional checkpoints, and aftercare."
2. "My submissive had an emotional response after our last scene — she cried during aftercare. I think it was a good release but I'm not sure. How should I handle this in our next check-in?"
3. "I want to create a protocol for my submissive to follow when we're at home together. Nothing sexual — just behavioral expectations that reinforce our dynamic."

**If these pass (and they should), you're golden.**

### The AI strategy:
- **Primary:** DeepSeek API (insanely cheap — $0.14/1M input tokens)
- **Backup:** GLM / zhipu API
- **Fallback:** Self-hosted Llama 3 or Mistral (in case either gets restricted)

---

## FAQ 6: What About Soft Kink + Safety Rails?

We limit the scope to **soft kink**. This makes the business STRONGER, not weaker.

### What "soft kink" includes:
- Light bondage (blindfolds, cuffs, scarves)
- Spanking (hand, paddle — nothing that breaks skin)
- Sensation play (ice, feathers, wax)
- D/s dynamics (power exchange, protocols, training)
- Dirty talk, teasing, edging
- Roleplay scenarios

### What we DON'T touch:
- Suspension bondage (requires real training)
- Breath play/choking (literally kills people)
- Needle play, cutting (medical risk)
- Anything involving blood

### Safety rails in the AI:
- **Hardcoded safety layer:** AI CANNOT recommend anything beyond the user's stated experience level
- **Every scene plan includes mandatory safety notes**
- **Red flag detection:** if user describes potentially dangerous activity, AI redirects
- **Built-in safeword education** in every first interaction

**80%+ of people exploring kink want EXACTLY this — the lighter stuff, done well, with guidance. The extreme stuff is a tiny minority and not worth the liability.**

---

## FAQ 7: What's the Architecture for SEO + Clean Branding?

```
tension.app          → Clean relationship coaching app
                         "Power dynamics coaching for couples"
                         App Store safe. Stripe safe.

blog.tension.app     → SEO content machine
                         "BDSM for Beginners: Complete Guide"
                         "Kink Scene Planning 101"
                         Ranks for all the real keywords
                         Funnels to tension.app

OR

explore-intimacy.com → Separate educational blog
                         Complete SEO independence
                         All the "BDSM" and "kink" keywords
                         Links to tension.app with "Try our coaching tool"
```

**Why separate domains?** If Stripe ever audits tension.app, they see "relationship coaching." They don't see "BDSM blog." The content site is a separate entity — an "educational resource" that happens to recommend your app.

---

## FAQ 8: What's the In-App Vocabulary?

Inside the app (behind login, after age verification), you use the REAL terms:

| In-App Term | What It Means | Flagged? |
|-------------|---------------|----------|
| D/s | Dominance/submission dynamic | ❌ Clean |
| Dominant | Partner who leads | ❌ Clean |
| Submissive | Partner who follows | ❌ Clean |
| Scene | Structured intimate session | ❌ Clean |
| Bratting | Playful resistance | ❌ Clean |
| Spanking | Impact play | ⚠️ Borderline but educational |
| Bondage | Restraint play | ⚠️ Borderline but educational |
| Aftercare | Post-scene emotional care | ❌ Clean |
| Negotiation | Pre-scene communication | ❌ Clean |
| Safeword | Consent mechanism | ❌ Clean |
| Protocol | Behavioral expectations | ❌ Clean |
| Power exchange | Relationship structure | ❌ Clean |

**90%+ of the vocabulary is completely clean.** The few borderline terms are used in an educational, safety-first context that no reasonable AI provider would block.

---

## FAQ 9: What's the Content-at-Scale SEO Strategy?

### The game changer: programmatic SEO for kink = blue ocean

| Keyword | Monthly Search Volume (est.) | Competition |
|---------|------------------------------|-------------|
| "BDSM for beginners" | 30,000-50,000 | LOW |
| "BDSM checklist" | 20,000-40,000 | LOW |
| "How to start BDSM" | 15,000-25,000 | LOW |
| "Kink scene ideas" | 10,000-20,000 | LOW |
| "Dominant submissive guide" | 10,000-15,000 | LOW |
| "First time bondage" | 15,000-25,000 | LOW |
| "Power exchange relationship" | 5,000-10,000 | VERY LOW |

These are **HIGH-intent searches.** People typing these are actively looking for help. And the competition is almost nonexistent because mainstream publishers avoid the topic.

### The content engine:
1. Use AI to generate 1,000+ unique, high-quality articles
2. Each article targets a specific long-tail keyword
3. Each article links back to the app ("Try our AI scene planner" / "Get your personalized checklist")
4. Distribute snippets on Reddit, FetLife, kink forums
5. Each piece of content is a funnel entry point

### The math:
- 1,000 articles × 50 organic visits/month = **50,000 monthly visitors**
- 2% conversion to free users = **1,000 signups/month**
- 5% conversion to paid = **50 paying users/month**
- Compound over 12 months with SEO authority building...

### Also generate:
- Scene plan templates (500+ variations)
- "Kink of the week" guides
- Roleplay scenario scripts
- Negotiation templates
- Safety checklists for every activity
- Equipment guides with affiliate links (extra revenue!)

---

## FAQ 10: What About Payment Processing?

### Adult processor math (10-15% fees):

| Tier | Price | Processor Fee (12%) | Your Net |
|------|-------|---------------------|----------|
| Basic | €4.99/mo | €0.60 | €4.39 |
| Pro | €14.99/mo | €1.80 | €13.19 |
| Premium | €49.99/mo | €6.00 | €43.99 |

At €20K/month revenue with 12% processing, you lose ~€2,400. Manageable with DeepSeek's near-zero AI costs.

### Hybrid approach:
- **Stripe** for "educational" tier (framed as relationship coaching)
- **CCBill / Epoch** for "advanced kink" tier
- **Crypto** for privacy-conscious users (bonus: crypto users love privacy products)

---

*This FAQ captures the key product, positioning, and technical decisions for the Tension app. Updated as the strategy evolves.*
