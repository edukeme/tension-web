# Tension — Product Requirements Document

**Version:** 1.1
**Date:** 2026-05-11 (v1.0) → 2026-05-14 (v1.1 update)
**Author:** Mr. D (with Paulo)
**Status:** v1.0 strategy → v1.1 PIVOT to digital-products-first execution

---

## ⚠ v1.1 ADDENDUM (Read This First)

This PRD was originally written 2026-05-11 as an AI-coaching-subscription-first product targeting €20k MRR in 18 months. After two rounds of strategic review and validation research, the **execution sequence has pivoted** while the long-term vision is unchanged. Read this addendum before reading the rest of v1.0 — many sections below are superseded.

### Locked decisions (2026-05-11)

| Decision | Value |
|---|---|
| **Founder identity** | Mr. D pseudonym (Paulo's real identity stays private) |
| **Mia involvement** | None — sealed private space; no co-branding, no testimonials, no audio |
| **Audio narrator** | ElevenLabs AI voice — no human recording dependency |
| **Founder time** | 4 hours/week × 8 weeks = 32 hours total (Hermes drafts, Paulo edits) |
| **V1 strategy** | Digital products first (PDFs €9.90 / Audio €19.90 / Bundle €49) — NOT subscription |
| **V2 strategy** | AI Coach + Scene Planner subscription launches month 4–6 (after warm audience exists) |
| **Payment processor** | Stripe primary + CCBill backup. Never Gumroad, Lemon Squeezy, or PayPal (all ban our content category) |
| **V1 target** | €5,000 month-2 revenue (one-time + affiliate-driven), ~20% probability at 4 hr/week |

### What changed from v1.0 to v1.1

| v1.0 said | v1.1 says | Why |
|---|---|---|
| Subscription €14.99 Pro from V1 | Digital products (€9.90–€49) first; subscription V2 | 3–5x higher cold-traffic conversion on one-time products vs. subscription |
| Lemon Squeezy or Gumroad | Stripe + CCBill | Lemon Squeezy + Gumroad ban "sexual coaching/instructional content" |
| 18-month roadmap | Same long-term, but month-2 revenue from products not MRR | Cash today + warm audience for V2 |
| Build custom Next.js app V1 | Astro static + Carrd + Stripe Payment Links V1 | 4 hr/week + Hermes-led production can't support custom app |
| Paulo or hired Fiverr voice | ElevenLabs | Locked decision; zero recording overhead |
| 200 articles in 60 days for SEO | 15–20 articles via Hermes for month-2 SEO seed (real SEO compounds in months 3–9) | Realistic at 4 hr/week with Hermes drafts |
| 50-prospect affiliate outreach | 15-prospect personalized outreach (Hermes-researched) | Quality over quantity at 4 hr/week |

### Forward integration (the bridge)

The €49 bundle includes **"3 months free Tension app access when launched"** — every product buyer becomes a future V2 subscriber. This converts the "digital products business" into the "AI subscription business" without losing customer LTV. The PRD's V2 + V3 plans (sections 6.V2, 16, 17) remain valid; only the V1 launch is restructured.

---

## RESEARCH VALIDATION (2026-05-14)

Validation conducted via DataForSEO live keyword research (workspace `/Users/gaudi/HERMES/Tension/content/`) + web research on competitors, payment processors, and audience sizing.

### Real keyword volumes (DataForSEO, US locale, English)

| Keyword | Monthly Volume | Competition | CPC |
|---|---|---|---|
| bdsm | 368,000 | LOW | $1.53 |
| bdsm test | 368,000 | LOW | $1.82 |
| what is bdsm | 60,500 | LOW | $0.67 |
| bdsm toys | 14,800 | MEDIUM | $1.50 |
| bdsm collars | 9,900 | MEDIUM | $1.07 |
| bdsm furniture | 8,100 | LOW | $1.00 |
| bondage bdsm | 6,600 | LOW | $1.84 |
| bdsm spanking | 6,600 | LOW | $0.99 |
| bdsm club | 5,400 | LOW | $1.73 |
| bondage for beginners | 1,600 | LOW | $0.88 |
| kink checklist | 1,300 | LOW | — |
| kink for beginners | 210 | LOW | $0.15 |
| dominant training | 210 | LOW | $0.01 |
| spanking guide | 90 | LOW | — |
| submissive psychology | 70 | LOW | $0.02 |

**Total cumulative volume across 92 kink-related keywords with vol > 50: ~1,073,040/month**

**Implication:** Massive demand, mostly LOW competition. Even capturing 0.1% of search traffic = 1,000+ visits/month. SEO is a real long-term lever (months 3+), but pre-launch articles seeded now compound over time.

**Critical insight from real data:**
- **"bdsm test" (368k/mo)** = curiosity quiz / "Am I Kinky?" intent. Our existing `post61_am-i-kinky-sexy.md` article hits this exact intent. **Highest-priority SEO target.**
- **"what is bdsm" (60.5k/mo)** = educational, top-of-funnel. Easy to rank with high-quality content.
- Pure educational/coaching terms ("BDSM aftercare guide", "BDSM for beginners") return null in DataForSEO — Google hides these in keyword tools but actual search behavior shows them via "what is bdsm" and "bondage for beginners" as proxies.

### Audio erotica market (validation for €19.90 audiobook)

| Company | Revenue | Pricing | Users | Demographics |
|---|---|---|---|---|
| **Quinn** | $12M ARR (June 2025), 440% YoY growth | $4.99/mo or $47.99/yr | 24M listened-minutes/month | 77% women, 56% age 18–24 |
| **Dipsea** | $313K revenue Oct 2024; acquired by RevenueCat Sept 2024 | $7.99/mo | ~50K subscribers | Female-dominant |

**Implication:** Audio erotica is a validated $10M+ market with female-dominant audience. Couples-focused listen-together audio is under-served. Our €19.90 audiobook is right-priced and right-positioned. ElevenLabs production drops audio production cost to near-zero.

### Direct competitor: Dom Sub Living "All-Access Pass"

- **Pricing:** $599/year pay-in-full (reduced from $1,199), or $179/quarter (~$716/year)
- **Catalog "value":** $1,508 across 12 stacked products
- **Individual courses:** $19 (Scene Creation Mastery, Plug-and-Play Planner) → $399 (Dom Sub Training, Summit Replays)
- **Educator:** Alesandra Madison
- **Source:** [Dom Sub Training All-Access Promo](https://domsubtraining.com/all-access-promo/)

**Implication:** Validates the membership/bundle model and gives a clear pricing benchmark. Our €9.90–€49 ladder is well below their floor ($19 → €17), positioning Tension as the entry-level entry product for the same audience.

### Audience reach (cold-start traffic candidates)

| Platform | Size | Source |
|---|---|---|
| r/BDSMcommunity | ~452k members | [subredditstats](https://subredditstats.com/r/BDSMcommunity) |
| r/BDSM | 237k | (same) |
| r/Bondage | 221k | (same) |
| FetLife | 10M registered, ~300k monthly active, **57M website visits/month** (April 2026) | [SemRush fetlife.com](https://www.semrush.com/website/fetlife.com/overview/) |
| Quinn | 24M listened-minutes/month (audio audience proxy) | [Fast Company](https://www.fastcompany.com/91279497/quinn-audio-erotica-r) |

**Implication:** ~1.5M+ engaged adults across reachable English-speaking platforms. Cold-start traffic IS available — execution challenge is earning attention, not finding audience.

### ⚠ Payment processor reality (CRITICAL)

| Platform | Policy | Verdict for Tension |
|---|---|---|
| Stripe direct | Prohibits adult content + "adult-themed digital goods" | ⚠️ Risky but works with strict "intentional intimacy coaching" framing |
| PayPal | Hostile to adult since 2010s | ❌ Avoid |
| Gumroad | Banned "sexual coaching services or explicit instructional content" March 2024 | ❌ Exact category banned |
| Lemon Squeezy | "Doesn't accept anything that even slightly hints toward sensual or sexual" (acquired by Stripe 2024) | ❌ |
| Payhip | Bans pornography (less clear on educational kink) | ⚠️ Possibly OK |
| FastSpring | Explicitly bans adult content | ❌ |
| SendOwl | Permissive, but limited by Stripe/PayPal underneath | ⚠️ Same Stripe risk |
| CCBill | Designed for adult/high-risk. **10.8–14.5% fees** + $25 chargeback + $1,000/yr annual fee | ✅ Reliable but expensive |
| NOWPayments (crypto) | 0.5–1% fees, 350+ cryptocurrencies, no content restrictions | ✅ Privacy-positive backup |

**This is the single biggest constraint on the launch.** Strategy:
1. **Stripe primary** with strict Language 1 framing ("intentional intimacy coaching," "couples coaching," never "kink/BDSM/sex" in merchant description). Daily payout sweep — never let >7 days of revenue sit in Stripe.
2. **CCBill account opened in parallel from week 1** as live fallback. Higher fees, but reliable.
3. **NOWPayments/crypto** as third option by month 2 — also serves as privacy-positive marketing angle.
4. **Reserve cash:** Keep 60 days OpEx in a separate bank account in case Stripe freezes.

**Sources:**
- [Gumroad adult content policy](https://help.gumroad.com/article/156-gumroad-and-adult-content)
- [TechCrunch — Gumroad bans NSFW](https://techcrunch.com/2024/03/15/gumroad-no-longer-allows-most-nsfw-art-leaving-its-adult-creators-panicked/)
- [Lemon Squeezy prohibited products](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products)
- [Merchant Maverick — CCBill review](https://www.merchantmaverick.com/reviews/ccbill-review/)

### Affiliate / sponsorship economics

| Channel | Rate |
|---|---|
| Sexual wellness physical products affiliate | 6–20% (EdenFantasys 20%, Honey Play Box 20%, Sextoy.com 10%) |
| Digital info-product affiliate (general) | 30–50% |
| **Tension's offer** | **40% commission, 60-day cookie** (above sexual-wellness physical norms, justified by 95%+ digital margin pre-fees) |
| Podcast CPM | $18 pre-roll / $25 mid-roll / $10 post-roll |
| Newsletter CPM | $35–50+ primary placement |

**Source:** [getlasso adult affiliate programs](https://getlasso.co/niche/adult/), [beamly sponsorship calculator](https://beamly.com/tools/sponsorship-calculator/)

---

## V1.1 EXECUTION PLAN SUMMARY

Detailed plan at: `/Users/gaudi/.claude/plans/analyze-the-plan-hermes-setup-plan-md-abstract-octopus.md`

### V1 product ladder (digital products, months 0–4)

| Product | Price (List) | Net to us (Stripe 2.9%) | Source content |
|---|---|---|---|
| Free: BDSM Checklist (lead magnet) | €0 | — | Training material #2 polished |
| PDF: 21 Scenes That Will Drive You Crazy | €9.90 | €9.31 | Handbook Vol 06 + Training #10 |
| PDF: The Brat Submissive Playbook | €14.90 | €14.18 | Handbook Vol 04 expanded |
| PDF: The Verbal Arsenal | €9.90 | €9.31 | Handbook Vol 05 + phrases |
| PDF: The Negotiation Workbook | €9.90 | €9.31 | Handbook Vol 02 + worksheets |
| Audio: 10 Erotic Tales for Couples | €19.90 | €19.04 | ElevenLabs renders Hermes scripts |
| **🌟 The D/s Mastery Collection (bundle)** | **€49.00** | **€47.27** | All 4 PDFs + audio + bonus + 3-mo Tension future access |
| Founders Bundle (early-bird, first 100) | €39.00 | €37.59 | Same contents, urgency pricing |

### V1 → V2 → V3 flow

- **V1 (months 0–4):** Digital products + email list + community presence. Goal: €5k month-2 revenue, 1k–3k email subs, warm audience for V2.
- **V2 (months 4–8):** AI Coach + Scene Planner subscription launches to warm audience. Founders Bundle buyers get 3 months free. Target: €5k MRR by month 6.
- **V3 (months 8–18):** Couples linking, native app, human coach marketplace. Target: €21.6k MRR by month 18 (original PRD target unchanged).

### V1 channel mix (cold start, <€500 budget, 4 hr/wk + Hermes leverage)

1. **Affiliate program** — 15 personalized outreach (Hermes-researched), 3–5 active affiliates, 25–75 sales over month 2
2. **Reddit value-first** — r/BDSMcommunity, r/BDSM, r/BDSMnot4newbies, etc. Hermes drafts, Paulo posts 2/week
3. **FetLife groups** — same model, 1 post/week
4. **Twitter "Mr. D" persona** — Hermes drafts 5–10/week, Paulo schedules
5. **ProductHunt launch (week 6)** — coordinated, Language 1 framing
6. **Newsletter swaps** — value-trade with 2–3 small kink-positive newsletters

### Revenue scenario (revised for 4 hr/wk)

| Outcome | Probability | Revenue (month 2) | Customers |
|---|---|---|---|
| Stretch | ~20% | ≥ €5,000 | 200+ |
| Realistic median | ~50% | €2,500–€4,000 | 130–180 |
| Floor | ~75% | ≥ €1,000 | 75+ |

Even the realistic median outcome (~€3k month-2 revenue + 1.5k email subs) is dramatically ahead of v1.0's month-6 target (€900 MRR). The forward integration via the Founders Bundle means V2's subscription launch in month 4 has a warm pre-built audience.

---

## SECTIONS BELOW THIS LINE = v1.0 (HISTORICAL, KEEP AS REFERENCE)

The v1.0 sections below remain as historical record + reference for V2 design (AI Coach + Scene Planner architecture is unchanged; only V1 launch sequence pivoted). When reading v1.0:
- Sections 1, 2, 3, 4, 5, 8, 9, 10, 12, 17 are **still valid** (vision, users, problem, content IP, AI architecture, safety, brand, success metrics for V2+)
- Section 6 (Product Scope) — V1 scope is superseded by v1.1 above; V2 + V3 still valid
- Section 7 (Feature Spec) — applies to V2 (AI Coach + Scene Planner), not V1
- Section 11 (Technical Architecture) — applies to V2; V1 uses Astro + Stripe Payment Links + ConvertKit + ElevenLabs (no custom backend)
- Section 13 (Go-to-Market) — superseded by v1.1 channel mix above
- Section 14 (Business Model) — V1 pricing changed (see ladder above); V2 subscription pricing still valid
- Section 15 (Legal/Compliance) — superseded: never Gumroad/Lemon Squeezy; Stripe + CCBill hybrid
- Section 16 (Roadmap) — V1 month 0–3 superseded; months 3+ still valid framework

---

# v1.0 PRD (Original — 2026-05-11)

**Version:** 1.0
**Date:** 2026-05-11
**Author:** Paulo (synthesized from Mr. D research corpus)
**Status:** Draft — Pre-MVP planning

---

## 0. Document Map

| Section | Purpose |
|---------|---------|
| 1. Executive Summary | One-pager: what, why, who, how, financials |
| 2. Vision & Positioning | Brand stance, what we are and aren't |
| 3. Target Users | Personas, JTBD, segment sizing |
| 4. Problem & Opportunity | The gap, the timing, the moat |
| 5. Competitive Landscape | Who exists, why we win |
| 6. Product Scope | What ships in V1, V2, V3 — and what never ships |
| 7. Feature Spec | Detailed feature definitions |
| 8. Knowledge & Content Architecture | The Mr. D corpus as IP |
| 9. AI Coaching Architecture | LLM stack, prompts, guardrails |
| 10. Safety, Consent & Liability | The non-negotiables |
| 11. Technical Architecture | Stack, infra, data |
| 12. Brand, Naming & Messaging | The two-language strategy |
| 13. Go-to-Market | Acquisition, channels, partnerships |
| 14. Business Model | Pricing, unit economics, revenue plan |
| 15. Legal & Compliance | Stores, payments, jurisdictions |
| 16. Roadmap | 18-month phased plan |
| 17. Success Metrics | What we measure, what "winning" looks like |
| 18. Risks & Mitigations | The honest list |
| 19. Open Questions | What's still undecided |
| 20. Appendix | Source documents, glossary |

---

## 1. Executive Summary

**Tension** is an AI-powered relationship coaching app for couples exploring **power dynamics, D/s relationships, and intentional intimacy.**

We are not a sex app. We are not an erotica generator. We are not a hookup product. We coach **everything around the bedroom** — the psychology, communication, scene structure, safety protocols, and emotional aftercare that make these dynamics work.

**The wedge:** Nobody is doing AI-powered D/s coaching. The market is a blue ocean — static checklist tools (MojoUpgrade) and passive video libraries (Kink Academy) exist, but no platform combines personalized AI coaching with the depth of a real Mr. D-style mentor. Tension fills that gap.

**The defensible moat:** The Mr. D knowledge corpus — ~25,000 words of original, structured coaching IP across negotiation, psychology, scene architecture, brat-handling, verbal arsenal, and aftercare mastery — feeding an AI that delivers personalized guidance no competitor can replicate from a video library.

**Target:** €20,000/month MRR within 18 months.

**Primary risks:** AI provider NSFW policies (mitigated by self-hosted/Chinese LLMs), app store rejection (mitigated by PWA-first), payment processing (mitigated by adult-friendly processors + crypto fallback).

**Founder fit:** Paulo built this from personal need. He has the technical skills (operates a multi-agent Hermes stack), the lived experience (active D/s relationship with Mia), and the strategic clarity to build with safety rails from day one.

---

## 2. Vision & Positioning

### Vision Statement

> Tension is the trusted private coach for couples who want to build deeper intimacy through intentional power dynamics — accessible 24/7, personalized to their relationship, and grounded in safety, consent, and emotional intelligence.

### Positioning Statement (Public-Facing)

> Tension is an AI-powered relationship coaching app for couples who want to explore power dynamics, deepen intimacy, and build intentional connections.

**Words deliberately absent:** "sex," "BDSM," "kink," "fetish."
**Words deliberately present:** "relationship," "couples," "intimacy," "power dynamics," "intentional."

This wording passes app store reviewers, payment processor compliance teams, and ad platform moderators. It also signals correctly to the in-the-know audience: anyone in the lifestyle reads "Tension" and immediately knows.

### What Tension IS

- A **coach** — guidance, frameworks, dialogue patterns, scene planning
- A **container** — structured education on safety, consent, ethics
- A **mirror** — helps users reflect on their dynamic, their growth, their bratting patterns
- A **library** — searchable corpus of D/s psychology, techniques, troubleshooting
- A **memory** — keeps continuity across sessions like a real mentor would

### What Tension IS NOT

- ❌ Not a sex chatbot. Will not generate erotica or graphic sexual narratives.
- ❌ Not a hookup app. No matching, no profiles, no dating.
- ❌ Not a porn platform. No imagery beyond educational diagrams.
- ❌ Not a "Cosmo for kink." We're depth, not listicles.
- ❌ Not a replacement for therapy. We say so explicitly when needed.
- ❌ Not safe for hardcore/extreme play (suspension, breath play, blood, needles) — we redirect.

### The Tagline Candidates

- **Primary:** "Intimacy, by design."
- **Alt 1:** "Coaching for the relationship behind closed doors."
- **Alt 2:** "Power dynamics, done with intention."
- **Alt 3:** "Where intentional couples build deeper trust."

---

## 3. Target Users

### Primary Persona: "The Intentional Couple"

**Demographics:**
- Age 28–48
- Long-term relationship (6 months – 20 years)
- Mid-to-high income, urban/suburban, dual-income
- College-educated, technology-comfortable
- One or both partners hold leadership/professional roles
- Western, secular-leaning, sex-positive but private

**Psychographics:**
- Curious about power dynamics, just starting to explore — or 1–3 years in
- Read books, listen to podcasts, take their relationship seriously
- Want structure and frameworks, not just "freestyle and hope"
- Privacy-paranoid: refuse to discuss this with friends, therapists, or in forums
- Trust their partner but want a third-party expert voice
- "I want to do this RIGHT, not just do it"

**Jobs-to-be-Done:**
1. *"Help me understand WHY my partner wants this — and whether I do."*
2. *"Teach me to negotiate a scene without killing the energy."*
3. *"Show me how to handle [specific situation] my partner just brought up."*
4. *"Plan a scene for me that fits our experience level and what we have."*
5. *"My partner had an emotional response after our last session. What happened, and what do I do?"*
6. *"Help me communicate about this when I struggle to find words."*
7. *"Give me ideas. I feel like we've plateaued."*

**Pains:**
- Internet info is fragmented, often unsafe, often porn-adjacent
- Therapists are often not kink-knowledgeable or kink-positive
- Books exist but lack personalization and interactivity
- Friends aren't an option (privacy)
- Existing apps are either dating, generic wellness, or static checklists

### Secondary Persona: "The Aspiring Dominant"

**Demographics:**
- Men 25–45 (predominantly, though not exclusively)
- Partner already submissive-curious or actively requesting the dynamic
- Often feels under-equipped: "she trusts me with this and I'm winging it"

**JTBD:**
- *"Teach me to LEAD without faking it."*
- *"Give me language I can actually use without sounding stupid."*
- *"Help me with the brat-handling specifically."*
- *"Walk me through aftercare so I don't drop the ball after the climax."*

This persona maps almost exactly to Paulo's own journey, and the Mr. D handbook content addresses it directly.

### Tertiary Persona: "The Curious Solo"

- Single, exploring identity (Dom or sub)
- Researching before committing to a partner discussion
- Lower lifetime value but high volume; primary funnel-top for the free tier

### Anti-Personas (Who We Are NOT For)

- Anyone seeking explicit sexual content / erotica generation
- Anyone looking for a sexual partner / dating
- Hardcore practitioners exploring extreme play (suspension, breath play, blood, knife play)
- Anyone under 18 (strict age gate)
- Anyone interested in non-consensual scenarios in reality (CNC roleplay is a different topic, treated cautiously)

### Audience Sizing (Order-of-Magnitude)

- Online sex education market: $3–5B globally (2026 est.)
- BDSM/kink-specific subset: estimated ~10–15% of the broader sex ed market
- Adults in committed relationships who are kink-curious: ~15–20% in Western markets (varies by survey methodology)
- Reachable English-speaking TAM: ~5M households
- Realistic 3-year SOM: 25k–50k paying subscribers

---

## 4. Problem & Opportunity

### The Problem

People exploring power dynamics in their relationships have three options today, all bad:

1. **The Reddit/forum rabbit hole** — fragmented, contradictory, often unsafe, no privacy
2. **Static content (books, video courses)** — passive, no personalization, no real Q&A
3. **In-person education (kink classes, mentors)** — geographic, time-constrained, expensive, public

Nobody helps them with the *specific situation* they're in *right now* in a way that respects their privacy and meets them at their level.

### The Opportunity

Three forces converge:

**1. AI coaching is finally credible.**
LLMs in 2026 are good enough for nuanced, emotionally intelligent conversations. The technology that didn't work in 2020 works now.

**2. Kink is mainstreaming.**
Post-Fifty Shades, post-pandemic digital intimacy, post-MeToo conversations about consent — kink-curiosity is no longer fringe. Demand has outgrown supply of qualified educators.

**3. Mainstream AI products refuse to engage.**
ChatGPT, Claude, Gemini all decline these conversations. This creates a vacuum: users with legitimate, healthy, safety-conscious questions get refused by the products they already use. Tension fills that vacuum with a product that responds — within strict ethical limits.

### Why Now (vs. Last Year or Next Year)

- **AI quality threshold crossed:** GLM, DeepSeek, and open-source models (Llama 3 70B, Mistral) now match GPT-3.5 quality at 1–5% the cost. Affordable to scale.
- **Programmatic SEO is still effective** for low-competition long-tail in this vertical. Window may close as competitors arrive.
- **Mainstream platforms tightening policies** push users to dedicated platforms — opportunity to be that platform.
- **Paulo has the personal momentum.** The Mr. D corpus is already largely written. The window to build before life moves on is now.

### The Moat

| Layer | Defensibility |
|-------|---------------|
| **Knowledge IP** | The Mr. D handbook (25k+ words of structured original frameworks) is the highest-value differentiator. Hard to replicate without lived experience and coaching skill. |
| **AI tuning** | Custom prompts, retrieval, safety rails specifically tuned for this niche. Compound advantage over time. |
| **Community + content flywheel** | 500–1,000 long-tail SEO articles + Reddit/FetLife seeding creates a content moat over 12 months. |
| **Trust + brand** | "Tension" as the *trusted* place for this — the moat that takes 2+ years to build and is the most durable. |

---

## 5. Competitive Landscape

### Direct Competitors (None Are AI-Coaching)

| Platform | What They Do | Why We Beat Them |
|----------|--------------|------------------|
| **Dom Sub Living** | Blog + courses + 1-on-1 mentoring | Static content, no personalization, expensive (1-on-1 €100+/hr) |
| **Kink Academy** | 2,000-video kink education library | Passive learning, no coaching, no answers to "MY specific situation" |
| **Submissive Guide** | Blog + courses (sub-focused) | Single perspective, no Dom support, no dynamic coaching |
| **Kinkly** | General sex ed content + shop | Not coaching, not kink-specific |
| **Kinky Events (UK)** | In-person workshops | Geographic, time-bound, not private |

### Adjacent (AI + Intimacy)

| Platform | Why Not a Threat |
|----------|------------------|
| **MojoUpgrade** | One-and-done static checklist; we offer ongoing coaching + planning + library |
| **Rosy** | Vanilla sexual wellness; doesn't touch power dynamics |
| **Dipsea** | Audio erotica; we don't compete on content consumption |
| **Replika / Character.ai** | AI companion/roleplay; we are coaching, not roleplay |
| **KinkD / Feeld / #open** | Dating apps; we don't match, we educate |

### The Big AI Players (Why They Won't Catch Us)

- **OpenAI / Anthropic / Google:** Strict NSFW policies. Their core products will never serve this audience. Their corporate brands can't risk this category.
- **Character.ai:** Cracked down on NSFW after backlash. Pivoting away from this market.
- **Replika:** Burned by user revolt over removing erotic roleplay. Won't double down.

The mainstream big-tech path of least resistance is to *avoid* this category. That structurally protects Tension.

### Competitive Risk Watch

- Better-funded startup enters with similar positioning → mitigation: speed, IP depth, community
- A creator (kink educator with following) launches their own app → mitigation: partner with them as content advisor before they ship; Tension can become their backend
- Open-source community model gets traction → unlikely to challenge consumer UX

---

## 6. Product Scope

### V1 — MVP (Months 0–6)

**Goal:** Validate willingness to pay and core coaching UX with 50–500 users.

**In Scope:**
1. Web app (PWA), responsive, mobile-first
2. AI Coach chat (text-based, with memory across conversations)
3. Scene Planner (guided wizard → output: structured scene plan with arc, equipment, language, aftercare)
4. Negotiation & Checklist tool (couples can each fill, see overlaps + gaps)
5. Knowledge library (browsable, searchable) — the Mr. D handbook + training materials as in-app content
6. Aftercare check-in (post-scene mini-survey, drop monitor next-day nudge)
7. Account + privacy (passwordless login, end-to-end encryption for sensitive data, deletable account)
8. Free tier + 1 paid tier (€14.99/mo Pro) → keep pricing simple in V1
9. Age gate (DOB + click-confirm; full ID verification deferred to V2 if regulators require)
10. Basic content moderation + safety guardrails

**Out of Scope for V1:**
- Native iOS/Android apps (PWA only)
- Partner-linking (couples' shared session)
- Voice / audio
- Video / imagery generation
- Marketplace, affiliate, community forums
- Multi-language (English V1; Portuguese V2)
- Credit / micro-payment system (V2)

### V2 — Couples & Depth (Months 6–12)

- Partner-link accounts (shared checklists, joint scene planning, in-scene check-ins)
- Mobile app (iOS/Android, PWA-wrapped)
- Credit pack pricing tier
- Premium tier (€49.99/mo) with deeper coaching, longer memory, advanced techniques
- Portuguese, Spanish localization
- Affiliate content (equipment recommendations with disclosure)
- Voice mode (read-aloud coaching, audio aftercare)

### V3 — Scale & Ecosystem (Months 12–18)

- Verified human coach add-on (Tension-certified educators offering 1-on-1 video sessions)
- Community (moderated, behind paywall, opt-in only)
- API for kink educators / creators to white-label
- Couples retreats (in-person, partnered events)
- Multi-LLM router for cost optimization at scale

### Will Never Ship

- Erotica / sexual fantasy generation
- Body-part-specific sexual technique coaching
- Explicit sexual content of any form
- Hookup matching, dating
- Anything supporting hardcore play we've ruled out (suspension, breath play, blood, needles)
- Anything that could be used to coach predatory behavior
- AI roleplay as a "partner" (we are a coach, not a substitute)

---

## 7. Feature Spec

### 7.1 AI Coach Chat

**Description:** Persistent, memory-enabled conversational interface with the "Tension Coach" — an AI persona inspired by the Mr. D framework.

**Capabilities:**
- Answer scenario-based questions ("My sub bratted during dinner, how do I respond?")
- Explain frameworks ("Walk me through the 4-Layer Dominance framework")
- Help plan specific scenes (handoff to Scene Planner)
- Debrief past scenes (user describes what happened; coach analyzes and recommends)
- Educate on safety, consent, ethics
- Recognize when to redirect to human professional (mental health flags, safety red flags)

**Memory:**
- Per-user persistent memory of relationship details, partner name, experience level, preferences, hard limits
- Cross-conversation continuity — coach references previous sessions
- User-controllable: full memory editing, "forget this" command, full export

**Personality:**
- Calm, direct, non-judgmental, warm-but-confident
- Mirrors Mr. D voice from the handbook
- Adapts tone: more clinical when user wants instruction, warmer when user is processing emotion

**Safety Rails:**
- Cannot recommend activities beyond user's stated experience level
- Mandatory safety notes on every scene/technique suggestion
- Hardcoded refusals on out-of-scope activities (breath play, etc.) with redirect to safer alternatives
- Detects emotional distress patterns → offers mental health resources

**Constraints (Cost Control — burned from prior context-bloat issues):**
- Aggressive context compaction
- Default to summarizing referenced library entries, not pasting full text into context
- Hard cap on conversation length before forced summary-and-archive
- Token budget per user per day on free tier

### 7.2 Scene Planner

**Description:** Guided wizard producing a structured scene plan output.

**Inputs:**
- Available time (15min / 30min / 45min / 60+min)
- Energy / mood (firm-commanding / sensual-soft / playful / intense-psychological)
- Equipment available (multi-select from inventory)
- Experience level (beginner / intermediate / advanced)
- Specific desires for this scene
- Hard limits + active soft limits
- Any context (Mia stressed this week, anniversary, first time trying X, etc.)

**Outputs (structured document):**
1. Scene type + tagline
2. Energy guidance
3. Equipment list (final)
4. Pre-scene preparation checklist
5. Phase-by-phase arc with durations:
   - Entry / ritual
   - Anticipation
   - Surrender
   - Intensity
   - Breakthrough / Climax
   - Release
6. Key language / phrases per phase
7. Brat-handling notes (if relevant)
8. Aftercare protocol
9. Safety reminders specific to chosen activities
10. Optional: scene blueprint reference (Blueprint A: The Taming, B: Sensual Surrender, C: Interrogation, etc.)

**Save / Reuse:**
- Save plans to personal library
- Mark as "completed" with debrief link
- Adapt previous plans for new scenes

### 7.3 Negotiation & Checklist Tool

**Description:** Each partner fills independently → app surfaces overlaps + gaps + flags for conversation.

**Categories:**
- Bondage interests + limits
- Impact / discipline interests + limits
- Sensation play interests + limits
- Power exchange protocols interest
- Roleplay / scenarios interest
- Specific activities (with safety flags on advanced items)
- Soft limits, hard limits, deal-breakers
- Safewords

**Output:**
- Side-by-side comparison (visible only with both partners' consent)
- Suggested talking points based on mismatches
- "Negotiation script" generator: pulls from handbook's negotiation framework, customizes to the couple

**Privacy:**
- Solo mode: partner not linked, no comparison
- Linked mode: requires both to opt in; revocable
- Default: solo until both partners opt to share

### 7.4 Knowledge Library

**Content (V1 launch corpus):**

**Foundations (10 articles)**
- What is D/s? (vs. BDSM / vs. kink — vocabulary primer)
- Safe, Sane, Consensual vs. Risk-Aware Consensual Kink
- Consent in power exchange
- Safewords — choosing, using, respecting
- The myth of the strong submissive
- Negotiation 101
- Pre-scene preparation
- Building anticipation
- Aftercare basics
- Sub drop & Dom drop

**The Dominant Track (12 articles, derived from Mr. D handbook)**
- The Psychology of Power Exchange
- Everyday Dominance (Layer 1)
- The Dominant Negotiation (Layer 2)
- The Pre-Scene Ritual (Layer 3)
- The Scene Arc (Layer 4)
- The 5 Dominant Truths
- Believing You Deserve to Lead
- The Brat Submissive — Complete Playbook
- The Brat Spectrum (Challenger, Smartass, Princess, Wiggler, Withholder, Distractor)
- Brat Tamer's Toolkit (5 counters)
- The Brat Cycle
- Brat-Specific Dialogue

**The Submissive Track (10 articles, to be commissioned/written)**
- The Power in Submission
- Communicating Your Needs to Your Dom
- Bratting as Language — Understanding Your Own Style
- Dropping into Sub Space
- Asking for Aftercare
- When You Don't Want What You Thought You Wanted
- Submission Outside the Bedroom
- Sub Drop Recovery
- Building Trust With Your Dom
- Solo Submission Practices

**The Verbal Arsenal (8 articles)**
- Voice technique
- Command language rules + library
- Ownership language
- Praise language (the underrated weapon)
- Challenge language
- Interrogation language
- Transition phrases
- What never to say

**Scene Architecture (6 articles)**
- The Master Template
- The Three-Category Equipment System
- Blueprint A: The Taming
- Blueprint B: The Sensual Surrender
- Blueprint C: The Interrogation
- Building Your Own Scenes

**Aftercare Mastery (7 articles)**
- Why Aftercare Is Not Optional
- Immediate aftercare (first 30 min)
- Extended aftercare (24–48 hr)
- Sub Drop — signs and handling
- Dom Drop — the unspoken topic
- The Debrief (24h later)
- Aftercare by scene type

**Safety + Troubleshooting (10 articles)**
- Equipment failure handling
- Unexpected reactions (panic attacks, triggers)
- Miscommunication recovery
- Physical injuries — what to do
- Safety equipment checklist
- When to seek medical help
- The Consensual Non-Consent conversation
- Race, culture, and ethics in D/s
- Public play ethics
- Privacy + discretion

**Total V1 corpus:** ~63 articles, each 800–2,000 words.

**Format:**
- Markdown / rich-text web
- "Quick Reference" inline cards (e.g., the brat response map table)
- "Save to my library" / annotate
- AI Coach can pull and summarize any article in-conversation
- Browsable + searchable + tag-filtered

### 7.5 Aftercare Check-In

**Description:** Lightweight post-scene flow to support both partners through the landing.

**Immediate (0–30 min after scene marked complete):**
- "How are you feeling right now?" (emoji + 1-line text)
- Body check (any pain, marks needing attention?)
- Suggested aftercare actions based on scene type (pulled from handbook)
- Reminder card for Dom: "Did you drink water? Did she?"

**24-Hour Check-In:**
- Push/email nudge to user the next day
- 5-question debrief (favorite moment, anything that didn't work, surprises, body, heart)
- Sub-drop screener (validated short questions adapted from psychology screening)
- Auto-saves to a "scene journal"

**Scene Journal:**
- Timeline of all completed scenes
- Searchable, with debrief notes
- Coach references it to make future scenes better

### 7.6 Account & Privacy

**Account creation:**
- Email + passwordless magic link OR passkey (preferred)
- Optional anonymization (display name, no real name required)
- DOB age gate (18+ hard cutoff)

**Privacy controls:**
- Full data export (JSON + Markdown)
- Hard delete account → all data, conversations, scenes purged within 7 days
- "Panic exit" button (signs out + obscures app icon on PWA install — known privacy feature)
- No third-party analytics on conversation content (PostHog-style with privacy-respecting telemetry only on UI events)
- End-to-end encryption for conversations (where technically feasible with LLM provider)
- Pseudonymized session IDs to LLM provider

**Visibility:**
- Solo by default
- Couples linking: explicit, dual-confirmed, revocable
- No public profiles, no social, no leaderboards — ever

---

## 8. Knowledge & Content Architecture

The Mr. D corpus is the primary product asset. This section describes how it's structured.

### Source Material (Current State)

| Source | Volume | Status |
|--------|--------|--------|
| Mr. D Handbook (Vol 00–07) | ~25,000 words | Drafted, needs editorial pass |
| Mr. D Training Materials (10 modules) | ~12,000 words | Third-party (Dom Sub Living), licensed/adapted or used as reference |
| Mr. D Business Idea docs (3) | ~31,000 words | Internal-only (strategy, not product content) |

### Content Pipeline

**1. Original Mr. D corpus (proprietary IP):**
- Handbook volumes are the seed
- Expand each volume into 8–15 long-tail articles
- Maintain Mr. D voice (calm, direct, warm, non-preachy)
- Editorial standards: no porn-adjacent language, all activities scoped to soft kink, all advice with safety notes

**2. Programmatic SEO content (scale layer):**
- Targets long-tail keywords (e.g., "how to introduce blindfolds to a partner", "first scene with rope bondage")
- Generated with AI assistance from corpus + tuned templates
- Editorial review pass before publish
- Each article links back to in-app coaching CTA
- Initial batch: 500 articles over months 3–9
- Compounding goal: 1,500 by month 18

**3. Living scene blueprints:**
- Starting templates (The Taming, Sensual Surrender, Interrogation)
- AI-generated personalized variations as outputs of Scene Planner
- User-shared variations (anonymized, opt-in) feed a growing library

### Retrieval / RAG Architecture

- Corpus chunked at semantically meaningful boundaries (sections, not arbitrary char-count)
- Embeddings stored in vector DB (pgvector on Postgres for V1; consider Qdrant at scale)
- Retrieval at AI Coach query time: top-k semantic + keyword hybrid
- Result: coach answers reference real corpus content rather than hallucinating, AND keeps prompt cost manageable (no need to stuff entire handbook into context)

### Content Governance

- All published content reviewed by Paulo before live
- Update cadence: review every 90 days for safety guidance accuracy
- User-flagged content triage SLA: 48 hours
- Version control: all content in Git, deployed via CMS or static SSG

---

## 9. AI Coaching Architecture

### LLM Strategy

**Primary (V1):** GLM-5.1 via Z.AI Coding Plan (current Hermes setup) OR DeepSeek API
- Reasons: Cost ($0.14/1M input tokens DeepSeek; flat-rate plan for GLM); content policy more permissive than US providers; Paulo already operating GLM stack
- Risk: Chinese-origin providers face geopolitical / data residency concerns from some users

**Secondary (V2):** Self-hosted Llama 3 70B or Mistral fine-tunes
- Reasons: Sovereignty, no API risk, can fine-tune on Mr. D corpus
- Cost: Higher infra spend, requires GPU hosting
- Trigger to migrate: 5k+ active monthly users (cost crossover) OR provider policy change

**Fallback:** Multi-provider router (LiteLLM-style) so we can swap providers without downtime

**What we do NOT use:**
- OpenAI (NSFW policy = account ban risk)
- Anthropic (strictest of all)
- Google Gemini (similar restrictions)

### Prompt Architecture

**System prompt (loaded every conversation):**
- Identity: Tension Coach persona, drawing from Mr. D voice
- Hard rules: no erotica, no graphic sexual technique, no out-of-scope activities
- Tone guidance: calm, direct, warm, non-judgmental
- Memory references (compressed user profile, recent context summaries)
- Active scene context if applicable

**User context (per-conversation):**
- Relationship snapshot (length, partner name, dynamic style)
- Experience level
- Recent scenes (summaries, not full transcripts)
- Active preferences and hard limits
- Last 5 messages in current conversation (sliding window)
- Top-3 retrieved corpus chunks relevant to current message

**Compression / cost discipline:**
- Aggressive summarization of older conversation turns
- File reads in coaching context: extract bullets, NOT paste full content
- Token budget alerts shown to user in advanced settings (optional power feature)
- Context anchor at ~50% threshold, not 85% (we've seen 85% fail in production with current model)

### Safety Guardrails (Hard-Coded)

| Trigger | Response |
|---------|----------|
| Request for explicit sexual content / erotica | Refuse + redirect to relationship/coaching framing |
| Out-of-scope activity (breath play, suspension, etc.) | Refuse + explain risk + suggest safer alternatives |
| User describes signs of abuse (non-consensual real situation) | Stop coaching tone, offer resources + crisis lines |
| User describes self-harm or severe distress | Mental health resource handoff (region-specific) |
| Request involving minors in any way | Hard refuse + report mechanism for repeated attempts |
| Request for graphic detail "for the story" | Refuse — we're not a fiction tool |

### Continuous Improvement

- Conversation eval pipeline: weekly sample audit by Paulo
- User-flagged turns ("this wasn't helpful" / "this felt wrong") feed retraining queue
- Quarterly prompt updates with versioning
- A/B testing framework for prompt changes (cohort-level, not per-user)

---

## 10. Safety, Consent & Liability

### Core Principles

1. **Consent is non-negotiable.** Every recommended activity includes consent framing.
2. **Safety first, always.** Every technique includes safety notes.
3. **Stay in scope.** Soft kink only — we never coach activities with high physical risk.
4. **Respect the user's experience level.** Coach cannot recommend beyond user-stated experience.
5. **No replacement for professional help.** When in doubt, refer out.

### Scope Boundaries (What We Coach vs. Refuse)

| Activity | In Scope | Notes |
|----------|----------|-------|
| Blindfolds, sensory deprivation | ✅ | Standard, low-risk |
| Light bondage (scarves, cuffs, simple rope) | ✅ | With circulation safety notes |
| Spanking, paddling | ✅ | Target zones, intensity progression |
| Sensation play (ice, feathers, low-temp wax) | ✅ | Temperature, allergy notes |
| Verbal D/s, protocols, roleplay | ✅ | Our strongest area |
| Aftercare, drop management | ✅ | Critical, always covered |
| Suspension bondage | ❌ | Refuse + recommend in-person training |
| Breath play / choking | ❌ | Refuse — fatal risk |
| Needle play, cutting | ❌ | Refuse — medical risk |
| Anything drawing blood | ❌ | Refuse |
| Edge play (extreme) | ❌ | Refuse |
| Consensual Non-Consent | ⚠️ Cautious | Coach the discussion, not the execution |

### Mandatory Safety Components

- Every scene plan output: includes safety reminders for chosen activities
- Every first-time-trying-X conversation: foundational safety primer
- Equipment recommendations: only well-reviewed, safety-tested items (no fly-by-night purchases)
- Safety equipment checklist available in-app at all times

### Liability Posture

- Terms of Service: explicit disclaimer that we are educational, not medical or therapeutic
- Liability waiver at signup (with state-by-state legal review)
- Age gate enforced
- DMCA / abuse reporting in place
- Insurance: media liability + tech E&O before public launch
- Legal counsel specializing in adult-adjacent / digital health from Day 1

### Emergency Handoffs

When the coach detects:
- Crisis language → mental health resources (region-detected)
- Abuse indicators → trained crisis lines + safety planning resources
- Medical emergency description → urgent care info + 911-equivalent
- Suicidal ideation → immediate handoff to verified crisis resources

These are bundled into the prompt safety layer and tested as part of CI.

---

## 11. Technical Architecture

### Stack (V1)

**Frontend:**
- Next.js 15+ (App Router)
- TypeScript
- TailwindCSS
- Mobile-first responsive PWA
- Service worker for offline access to library content

**Backend:**
- Next.js API routes + server actions for low-complexity endpoints
- Edge functions for low-latency (regional)
- Background jobs: cron + queue (Inngest or BullMQ)

**Database:**
- Postgres (Supabase or self-hosted)
- pgvector extension for embeddings
- Redis for caching + rate limits

**Auth:**
- Magic links + passkeys (Supabase Auth or Clerk — choose based on privacy posture)

**AI Layer:**
- LLM provider abstraction (LiteLLM-style)
- LangChain or LlamaIndex for retrieval
- Tracing: Langfuse self-hosted for privacy

**Storage:**
- S3-compatible for any user uploads (image of equipment, hand-written notes scans)
- Encrypted at rest, signed URLs for access

**Hosting:**
- Vercel for app (V1) — assess privacy posture for V2 (may need EU-only hosting)
- Supabase EU region for DB
- Cloudflare for CDN + DDoS

**Observability:**
- Sentry for errors
- PostHog for product analytics (self-hosted, privacy-respecting)
- Plausible for marketing site analytics (no cookies)

### Data Model (Sketch)

```
users (id, email_hash, dob, created_at, deleted_at, locale, ...)
profiles (user_id, display_name, experience_level, dynamic_style, ...)
relationships (id, owner_user_id, partner_link_id, status, ...)
preferences (user_id, category, item, level [yes/maybe/limit/hard_limit])
safewords (user_id, value, type [stop / slow])
conversations (id, user_id, started_at, archived_at, summary)
messages (id, conversation_id, role, content_encrypted, tokens, created_at)
scenes (id, user_id, planned_at, completed_at, plan_doc, debrief_doc)
scene_phases (scene_id, phase, duration_min, language_used, ...)
aftercare_checkins (scene_id, user_id, at, mood, body, heart, ...)
library_articles (slug, title, body, tags, version)
embeddings (chunk_id, vector, source_type, source_id)
audit_logs (user_id, event, metadata, at)
```

### Privacy / Security Hardening

- All sensitive columns (`messages.content`, `scene_plans`, `debrief_doc`) encrypted with per-user keys
- Per-user key derived from password / passkey + server salt
- Server-side decryption only at message-render time (not stored decrypted)
- Zero-knowledge mode (V2): client-side encryption with user-held key; server cannot decrypt
- GDPR Article 9 (sensitive data) treatment for sexual orientation/practice data
- Regular pen tests (quarterly after launch)

### Performance Budgets

- App TTI < 2.5s on 4G mobile
- AI Coach first token < 1.5s (with streaming)
- Library article load < 500ms
- 99.9% uptime SLO

---

## 12. Brand, Naming & Messaging

### Brand: Tension

**Why:**
- One word, memorable, brandable
- Multiple meanings: sexual, emotional, narrative — all on-target
- Passes app store, payment processor, ad platform screens
- Subtle wink to those in the lifestyle

**Domain strategy:**
- `tension.app` — primary product
- `blog.tension.app` OR `explore-intimacy.com` — SEO content engine
- Separate domain protects payment processor relationship with `tension.app`

### Visual Identity (Brief, not finalized)

- Premium-warm color palette (deep burgundy + warm neutrals + matte black)
- Typography: serif headline (Söhne / Tiempos / Söhne Mono mix)
- Imagery: abstract, sensual but not explicit (knot tying, candle, silk — never bodies)
- Tone: confident, calm, knowing — never crass, never clinical

### The Two-Language Strategy

| Channel | Vocabulary |
|---------|------------|
| Public marketing, ads, App Store, payments | "Power dynamics," "intentional intimacy," "couples coaching," "alternative connection" |
| Blog / SEO content | Full real-world vocabulary ("BDSM for beginners", "D/s relationship", "kink scene planning") |
| In-app (post-age-gate) | Full real-world vocabulary, Mr. D voice |

**Critical operational rule:** App marketing, app store description, payment processor merchant description, and any ads use Language 1. Behind the login is Language 2. This is the wall that keeps us shippable.

### Brand Voice Pillars

1. **Calm** — never urgent, never alarming
2. **Direct** — say it plainly
3. **Warm** — like a trusted older friend, not a clinician
4. **Knowing** — we've thought about this more than you have, but we won't lecture
5. **Discreet** — we will never out you, ever

### Sample Public-Facing Copy

> *"For couples who want more than 'fine.' Tension is your private coach for the relationship behind closed doors — the trust, the communication, the structure that makes intentional intimacy work."*

> *"Power dynamics, done with intention. Get personalized guidance, plan deeper experiences, and build the kind of trust that doesn't happen by accident."*

---

## 13. Go-to-Market

### Channel Strategy

**Tier 1 — Organic SEO (the long game, biggest moat)**
- 500+ articles in 9 months, 1,500+ by month 18
- Target long-tail D/s + BDSM-curious queries
- Each article funnels to the AI Coach as the CTA ("Get personalized guidance from your AI coach →")
- Math: 1,500 articles × 30 organic visits/mo = 45,000 visitors/mo by month 18 → ~900 signups → ~45 paid

**Tier 2 — Community Seeding**
- FetLife groups: "D/s relationships", "Couples in the lifestyle"
- Reddit: r/BDSMcommunity, r/BDSMnot4newbies, r/sub4sub, r/Dominant
- Sex-positive Discord servers
- Approach: helpful posts, never spammy; offer the app as a tool only when contextual
- Cadence: 2–3 thoughtful posts/week across 5–10 communities

**Tier 3 — Kink Educator Partnerships**
- Identify 20 prominent kink educators (Dom Sub Living, Evie Lupine, others)
- Affiliate program: 30% of first-year revenue for referred users
- Co-branded "Tension recommends" badge for compatible educators
- Guest-content swaps

**Tier 4 — Podcast / Long-Form**
- Paulo (or pseudonymous Mr. D persona) on sex-positive podcasts
- Targeted: "Sex With Dr. Jess," "Why Are People Into That?", "American Sex Podcast"
- Tone: educational, accessible, not promotional

**Tier 5 — Paid (later, careful)**
- Reddit Ads (accepts kink-adjacent in certain subs) — months 4–6
- Direct sponsorships of kink-positive content creators — months 6+
- Avoid Meta, Google, TikTok adult-content bans

### Launch Plan

**Phase 0 — Pre-launch (Months 0–2)**
- Build MVP
- Create initial 50 SEO articles (foundations + Dominant track)
- Set up community seeding accounts (handles, baseline activity)

**Phase 1 — Closed Beta (Month 3)**
- 50 hand-picked beta users (Paulo's reachable network + FetLife volunteers)
- Free access, weekly feedback Zoom (Paulo + Mr. D persona)
- Iterate aggressively

**Phase 2 — Public Beta (Months 4–6)**
- Launch on ProductHunt (clean positioning, no kink emphasis on PH)
- Email waitlist + soft Reddit / FetLife reveal
- 500 free users target, 50 paid

**Phase 3 — Scale (Months 7–18)**
- Content engine in full swing (50 articles/month)
- Affiliate program launched
- Couples linking (V2 feature) drives partner referrals organically
- €20k/mo MRR target by month 18

### Acquisition Cost Discipline

- Track Cost per Activated User (CAU) — defined as completed first scene plan OR 5+ coach messages
- Target CAU < €10 in V1
- Target Customer Acquisition Cost (CAC) for paid users < €30
- Target LTV / CAC > 3:1 by month 12

---

## 14. Business Model

### Pricing (V1)

| Tier | Price | Features |
|------|-------|----------|
| **Free** | €0 | Library access (limited articles), 10 AI Coach messages/month, 1 scene plan/month |
| **Pro** | €14.99/mo | Unlimited library, unlimited Coach, unlimited Scene Plans, full debrief tools, partner linking (V2) |

**V1 ships with just Free + Pro to keep onboarding simple.**

### Pricing (V2)

| Tier | Price | Features |
|------|-------|----------|
| **Free** | €0 | Limited (as V1) |
| **Basic** | €4.99/mo | Unlimited library, 50 AI Coach messages/month, 5 scene plans/month |
| **Pro** | €14.99/mo | Everything unlimited (as V1 Pro) |
| **Premium** | €49.99/mo | Pro + priority Coach response time + extended memory + advanced techniques layer + early access to features |
| **Credit packs** | €4.99 / 50 credits OR €19.99 / 250 credits | For one-off heavy users |
| **Couples add-on** | +€9.99/mo | Partner linking + joint planning + cross-account aftercare |

### Unit Economics (Targets)

| Metric | Target |
|--------|--------|
| Average ARPU (across paid tiers) | €18/mo |
| Gross margin (after LLM + payment) | 70–80% |
| Paid conversion (free → paid) | 5–8% |
| Monthly churn | < 6% |
| LTV (24-mo horizon) | €260+ |
| CAC | < €30 |
| Payback period | < 3 months |

### Revenue Plan (Path to €20k/mo MRR)

| Month | Free users | Paid users (avg) | MRR (€18 ARPU) |
|-------|-----------|------------------|----------------|
| 3 | 50 (beta) | 0 | €0 |
| 6 | 500 | 50 | €900 |
| 9 | 2,000 | 200 | €3,600 |
| 12 | 5,000 | 500 | €9,000 |
| 15 | 9,000 | 900 | €16,200 |
| 18 | 12,000 | 1,200 | **€21,600** ✓ |

**Total paid users at €20k/mo:** ~1,100 with €18 ARPU. Achievable if SEO funnel performs to plan AND content quality compounds.

### Cost Structure (Steady State, Month 18)

| Line | Cost / Month |
|------|--------------|
| LLM (GLM/DeepSeek) | ~€800 (assuming 1.2k paid users, moderate use) |
| Hosting (Vercel + Supabase + Cloudflare) | €400 |
| Payment processing (12% adult processor on €21k) | €2,500 |
| Tools (Sentry, Langfuse, PostHog, etc.) | €200 |
| Legal retainer | €500 |
| Insurance | €300 |
| Content costs (editing, writers if needed) | €1,500 |
| **Total OpEx** | ~€6,200 |
| **Net margin at €21k MRR** | ~71% (€14,800/mo) |

---

## 15. Legal & Compliance

### Jurisdiction Posture

- **Company location:** Portugal (Paulo's residency); EU-favorable jurisdiction
- **Primary user markets:** EU + US English-speaking + ROW English
- **Compliance baseline:** GDPR (highest bar — applies everywhere we go)

### Required Legal Documents (Pre-Launch)

1. Terms of Service (with mandatory arbitration, liability waiver, scope of educational use)
2. Privacy Policy (GDPR-compliant, sensitive data Article 9 treatment)
3. Acceptable Use Policy
4. DMCA / takedown policy
5. Age verification policy
6. Cookie / tracker policy (minimal cookies, no third-party trackers on app)
7. Data Processing Agreement (for B2B partner integrations later)

### Age Verification

- V1: Self-reported DOB + click-attestation (industry baseline)
- V2: Third-party age verification provider if any regulator demands it (Yoti, Persona)
- Conservative posture: never serve any explicit content; everything is education-coded so age verification is "best practice" not regulator-mandated for this scope

### App Store Strategy

- **V1: PWA only.** Avoid app store risk entirely. Install via "Add to Home Screen" or browser-installable PWA.
- **V2: App Store (Apple/Google) submission**, with cleaned-up "relationship coaching" positioning. Realistic expectation: 30% chance of rejection at first try, iterate.
- Backup: stay PWA-forever if stores reject. PWA experience can match native for our use case.

### Payment Processing

- **V1: Stripe** with "relationship coaching app" merchant description. Have CCBill or Epoch account pre-approved as backup before Stripe ever has a problem.
- **V2:** Diversify — Stripe + adult processor for higher tiers; crypto for privacy-conscious users
- **Reserves:** Maintain 3 months operating cash to weather payment-processor freeze events

### Insurance

- Media liability / Errors & Omissions (E&O) — €1M minimum
- General liability
- Cyber liability (data breach response)
- Annual review with broker

### Open Questions for Legal Counsel (Pre-MVP)

- Does our scope ("educational coaching, soft kink only") qualify us OUT of "adult industry" categorization?
- What jurisdiction is optimal for incorporation?
- Are there specific certifications (e.g., RSA, NCSE-aligned principles) we should commit to?

---

## 16. Roadmap

### Q0 (Months 0–3) — Foundation

| Workstream | Milestones |
|------------|------------|
| Product | MVP wireframes → V1 build (Coach + Planner + Library + Auth) |
| Content | Editorial pass on Mr. D handbook; write 50 SEO articles |
| Tech | Stack chosen, hosting set up, LLM provider integrated, RAG working |
| Legal | Counsel engaged, ToS/Privacy drafted, age gate spec'd |
| Brand | Visual identity, domain finalized, landing page live |
| Beta prep | Recruit 50 closed-beta users |

### Q1 (Months 3–6) — Beta & Iterate

| Workstream | Milestones |
|------------|------------|
| Product | Closed beta launched; weekly iterations; first paid users |
| Content | 100 articles total live; SEO indexing began |
| GTM | First Reddit + FetLife seeding; podcast bookings for Q2 |
| Metrics | First retention + activation cohorts measured |

### Q2 (Months 6–9) — Public Launch

| Workstream | Milestones |
|------------|------------|
| Product | Public launch; payments live; daily-active users tracked |
| Content | 250 articles; SEO traffic crosses 5k/month |
| GTM | ProductHunt launch; 2 podcast appearances; affiliate program v0 |
| Financials | €1k MRR target |

### Q3 (Months 9–12) — Couples & Mobile

| Workstream | Milestones |
|------------|------------|
| Product | V2 partner linking; native app wrappers; Premium tier |
| Content | 500 articles; SEO traffic crosses 20k/month |
| GTM | Kink educator partnerships live; Portuguese localization |
| Financials | €9k MRR target |

### Q4 (Months 12–15) — Scale

| Workstream | Milestones |
|------------|------------|
| Product | Voice mode beta; advanced safety features; performance optimization |
| Content | 800 articles; SEO traffic crosses 50k/month |
| GTM | Spanish localization; 2nd-tier educator partnerships |
| Financials | €16k MRR target |

### Q5 (Months 15–18) — €20k Milestone

| Workstream | Milestones |
|------------|------------|
| Product | V3 planning; human coach integration design |
| Content | 1,500 articles; SEO traffic crosses 100k/month |
| GTM | First in-person event experiment; community beta |
| Financials | **€20k+ MRR achieved** |

### Beyond V3 (Months 18+)

- Verified human coach marketplace
- Couples retreat events
- API for educators / white-label
- Multi-LLM cost optimization at scale
- Expansion into adjacent niches (polyamory dynamics, gentle femdom, etc. — separate verticals or sub-brands)

---

## 17. Success Metrics

### North Star Metric

**Weekly Coached Couples** — number of users who, in a 7-day window, either:
- Completed a Scene Plan + Aftercare check-in, OR
- Had a substantive Coach conversation (5+ messages) about their relationship

This captures real engagement with the *product's purpose*, not vanity DAU.

### V1 KPIs (Month 6 Targets)

| Metric | Target |
|--------|--------|
| Free signups | 500 |
| Paid subscribers | 50 |
| MRR | €900 |
| Free → Paid conversion | 5% |
| Activation rate (first Coach conv OR Scene Plan within 7 days) | 40% |
| 4-week retention (paid) | 70% |
| NPS (in-app, 30 days post-activation) | 40+ |

### Month 18 Targets

| Metric | Target |
|--------|--------|
| Total free users | 12,000+ |
| Paid subscribers | 1,200 |
| MRR | €21,600+ |
| Monthly churn | < 6% |
| LTV | €260+ |
| LTV/CAC | > 3:1 |
| Organic SEO traffic | 100k/month |
| Activation rate | 50% |
| NPS | 50+ |

### Content / Quality Metrics

- AI Coach satisfaction (thumbs-up/down per response) > 80% positive
- Library article rating (5-star inline) > 4.3 avg
- Safety incident rate (user-flagged + internal audit) → near zero
- Coach refusal accuracy (refuses out-of-scope correctly) > 95%

### Privacy / Trust Metrics

- Account deletion completion < 7 days from request: 100%
- Data breach incidents: 0
- Privacy policy comprehension test (sampled users): > 80%

---

## 18. Risks & Mitigations

### 🔴 Critical Risks

**R1. LLM provider bans / policy changes**
- *Mitigation:* Multi-provider abstraction from Day 1. Self-hosted fallback path (Llama 3 70B) on standby. Monthly content-policy review.

**R2. App store rejection (when V2 attempts native)**
- *Mitigation:* PWA-first means launch isn't gated on store approval. App store is a growth lever, not a dependency.

**R3. Payment processor account freeze**
- *Mitigation:* 3-month cash reserves; backup processor pre-approved (CCBill); crypto rail under development by month 12.

**R4. Legal action over advice gone wrong**
- *Mitigation:* Strict scope (soft kink only); mandatory safety notes on every recommendation; ironclad ToS; insurance from Day 1; refuse-and-redirect on anything out of scope.

**R5. Data breach exposing user content**
- *Mitigation:* Per-user encryption at rest; minimal data retention; quarterly pen tests; zero-knowledge mode planned for V2; insurance.

### 🟡 Serious Risks

**R6. AI hallucinated unsafe advice**
- *Mitigation:* RAG-grounded responses (corpus retrieval), not free generation; weekly conversation audits; user-flag feedback loop.

**R7. SEO strategy underperforms**
- *Mitigation:* Diversified channel strategy (community seeding, partnerships, podcasts) — SEO is the biggest lever but not the only one.

**R8. Paulo burnout**
- *Mitigation:* Realistic 18-month timeline; clear phase gates; hire 1 part-time editor by month 6, 1 part-time engineer by month 9 if MRR supports it.

**R9. Privacy paranoia limits adoption**
- *Mitigation:* Privacy IS the product. Make it a marketing asset, not a hidden detail.

### 🟠 Moderate Risks

**R10. Competitor enters the niche**
- *Mitigation:* Speed; IP depth (Mr. D corpus); community moat building from Day 1.

**R11. Mia's role / comfort with public association**
- *Mitigation:* Brand can be operated under "Mr. D" persona; Paulo's identity stays as private as desired; Mia's input shapes product but she does not need to be public.

**R12. AI cost scaling unexpectedly**
- *Mitigation:* Token budgets per tier; aggressive context compaction; LLM provider switching playbook.

**R13. Regulatory shift on AI / adult content / EU AI Act**
- *Mitigation:* Compliance counsel from launch; conservative content scope; ability to add controls quickly.

---

## 19. Open Questions

1. **Mia's involvement:** Public co-founder, anonymous advisor, or zero role? Affects brand authenticity vs. privacy trade.
2. **Public Paulo vs. Mr. D persona:** Does Paulo build under his name or pseudonymously? Affects PR, networking, hiring, exit options.
3. **Solo or co-founder:** Bring in a technical co-founder, hire contractors, or fully solo for 18 months?
4. **Funding posture:** Bootstrap to profitability, or raise a small angel round for content velocity?
5. **Submissive track content:** Commission a female (or sub-experienced) writer, or write under Mr. D voice? Authenticity gap concern.
6. **Couples therapy adjacency:** Should we explicitly position as "complement to couples therapy" or stay clear of therapy framing entirely (liability)?
7. **CNC scope:** Coach the discussion only, or coach the execution with extra safeguards? Hard decision.
8. **Multi-language priority:** Portuguese (Paulo's home), Spanish (next-largest EU), or German (highest-paying EU market)?
9. **App store gambit timing:** When V2 is ready, or only after content moat is firmly established?
10. **Exit ambition:** Profitable lifestyle business indefinitely, or build to be acquirable in 3–5 years by an adjacent player (Headspace-for-couples, sex-positive media co)?

---

## 20. Appendix

### A. Source Documents

**Business Strategy:**
- `business_idea/FAQ_product_clarity.md` — 10 FAQs on positioning, AI strategy, vocabulary, SEO, payments
- `business_idea/brand_name_and_positioning.md` — Brand evaluation framework, name candidates, "Tension" rationale
- `business_idea/competitive_analysis_and_roast.md` — Direct & adjacent competitors, opportunity sizing, risks, recommendations

**Knowledge Corpus (Mr. D Handbook):**
- `MrD_handbook/00_Introduction.md` — Volume map and usage guide
- `MrD_handbook/01_Psychology_of_Power_Exchange.md` — 4-layer Dominance framework, 5 Truths, scene arc
- `MrD_handbook/02_The_Dominant_Negotiation.md` — Negotiation script, anticipation window, brat handling
- `MrD_handbook/03_The_Pre-Scene_Ritual.md` — 30-minute protocol, triggers, briefing template
- `MrD_handbook/04_The_Brat_Submissive.md` — Brat spectrum, 5 counters, cycle, dialogue
- `MrD_handbook/05_The_Verbal_Arsenal.md` — Voice technique, command/ownership/praise/challenge language
- `MrD_handbook/06_Scene_Architecture.md` — Master template, 3-category equipment, 3 blueprints
- `MrD_handbook/07_Aftercare_Mastery.md` — Immediate + extended aftercare, debrief, drop handling

**Training Materials (Reference — third-party, attribution: Dom Sub Living):**
- `training_materials/01_SCENE_CREATION_MASTERY.md` — Workbook intro
- `training_materials/02_Laying_the_Foundation.md` — SSC, RACK, negotiation, safewords
- `training_materials/03_Scene_Planning.md` — 5-step scene planning
- `training_materials/04_Mastering_the_Art_of_BDSM_Techniques.md` — Impact, rope, sensation
- `training_materials/05_Mastering_Scene_Communication.md` — Verbal/nonverbal communication
- `training_materials/06_Troubleshooting_a_Scene.md` — Equipment, reactions, miscommunication, injuries
- `training_materials/07_Consent_and_Ethics.md` — Power dynamics, race, public play, CNC
- `training_materials/08_Quick_Scene_Creation_Tip.md` — Screenshot + 3-category idea bank
- `training_materials/09_BONUS_Scene_Creation_Worksheets.md` — Safety, planning, aftercare worksheets
- `training_materials/10_SAMPLE_SCENE.md` — Example scene walkthrough

### B. Glossary (In-App Vocabulary, Behind Age Gate)

| Term | Definition |
|------|-----------|
| **Aftercare** | Physical and emotional care provided after a scene |
| **Brat / Bratting** | Submissive who playfully resists; testing the Dominant's authority |
| **CNC** | Consensual Non-Consent — pre-agreed roleplay of resistance/force scenarios |
| **D/s** | Dominance/submission dynamic |
| **Dom / Dominant** | Partner who leads in the dynamic |
| **Drop** | Emotional/physical comedown after a scene (sub drop / dom drop) |
| **Edging** | Bringing close to orgasm then stopping; repeated |
| **Hard limit** | Activity that is absolutely off the table |
| **Negotiation** | Pre-scene conversation establishing what will happen and what won't |
| **Power exchange** | Consensual transfer of decision-making authority |
| **Protocol** | Behavioral expectations within a dynamic |
| **RACK** | Risk-Aware Consensual Kink |
| **Safe Word** | Pre-agreed word that signals stop or slow down |
| **Scene** | A structured intimate session with a beginning, middle, and end |
| **Soft limit** | Activity that is uncomfortable but possible under right conditions |
| **SSC** | Safe, Sane, Consensual |
| **Sub / Submissive** | Partner who follows in the dynamic |
| **Sub Space** | Altered state of consciousness submissives can enter during intense scenes |
| **Vanilla** | Conventional, non-kink sexual practice |

### C. Public-Facing Vocabulary (Language 1)

| In-App Term | Public-Facing Term |
|-------------|---------------------|
| BDSM | Power dynamics / D/s relationships |
| Kink | Alternative intimacy / Adventurous couples |
| Fetish | Sensory exploration / Preference mapping |
| Bondage | Trust exercises / Sensory restriction |
| Spanking | Impact play |
| Submission | Surrender / Receptive partner |
| Dominance | Leadership / Intentional presence |
| Scene | Intentional session / Guided experience |

### D. Decision Log (To Be Maintained)

| Date | Decision | Rationale | Decided by |
|------|----------|-----------|------------|
| 2026-05-10 | Brand: Tension | Multiple meanings, brandable, payment/store-safe | Paulo |
| 2026-05-10 | Soft-kink scope only | Liability + ship-ability tradeoff | Paulo |
| 2026-05-10 | PWA-first | Bypass app store risk in V1 | Paulo |
| 2026-05-11 | LLM: GLM-5.1 primary, DeepSeek backup | Cost + content policy | Paulo |
| 2026-05-11 | Pricing: Free + Pro (€14.99) in V1 | Simplicity for MVP | Paulo |
| TBD | Couples linking timing (V1 or V2) | Need beta feedback first | — |
| TBD | Public Paulo vs. Mr. D persona | Privacy / brand tradeoff | — |

---

**End of PRD v1.0**

*This is a living document. Iterate freely. Review quarterly or upon major decision changes.*
