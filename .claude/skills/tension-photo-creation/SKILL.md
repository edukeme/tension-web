# Tension Photo Creation Skill

**Purpose**: Generate tasteful, premium AI-created silhouette imagery for Tension blog posts. Creates mood-driven, artistic photography that conveys intimacy and dynamics without being explicit.

## Master Prompt Template

Use this base template for all photo generation requests. **Change BOTH bracketed sections for each new image** to ensure poses and environments are completely unique:

```
A completely dark, high-contrast silhouette of [DESCRIBE COUPLE POSING HERE]. 
The background is heavily blurred and diffuse, set in [DESCRIBE AMBIENT BACKGROUND HERE]. 
The entire image is bathed in deep, moody, burnt orange and dark crimson red lighting. 
Extreme shadows, cinematic low-light photography, premium erotic aesthetic, 
exploring intimacy and dominance fantasies tastefully without being explicit. 
Monochromatic warm amber-red color grading.
```

## Customization Examples

### Example 1: Bedroom Ambient
```
A completely dark, high-contrast silhouette of a couple's hands intimately intertwined. 
The background is heavily blurred and diffuse, set in a luxurious, dimly lit hotel bedroom with soft glowing lamps. 
The entire image is bathed in deep, moody, burnt orange and dark crimson red lighting. 
Extreme shadows, cinematic low-light photography, premium erotic aesthetic, 
exploring intimacy and dominance fantasies tastefully without being explicit. 
Monochromatic warm amber-red color grading.
```

### Example 2: Urban / Nightlife Ambient
```
A completely dark, high-contrast silhouette of a man kneeling in front of a woman standing in stilettos. 
The background is heavily blurred and diffuse, set in a dark, rainy city street at night with distant glowing streetlights and bokeh. 
The entire image is bathed in deep, moody, burnt orange and dark crimson red lighting. 
Extreme shadows, cinematic low-light photography, premium erotic aesthetic, 
exploring intimacy and dominance fantasies tastefully without being explicit. 
Monochromatic warm amber-red color grading.
```

### Example 3: High-End Lounge Ambient
```
A completely dark, high-contrast silhouette of a couple in a romantic embrace, faces almost touching. 
The background is heavily blurred and diffuse, set in an upscale, empty cocktail lounge with glowing amber bar shelves. 
The entire image is bathed in deep, moody, burnt orange and dark crimson red lighting. 
Extreme shadows, cinematic low-light photography, premium erotic aesthetic, 
exploring intimacy and dominance fantasies tastefully without being explicit. 
Monochromatic warm amber-red color grading.
```

## How to Customize

### [DESCRIBE COUPLE POSING HERE]

Be specific about the dynamic, position, and body language. Each post needs a **completely unique pose**:

**Pose Ideas:**
- Hands intertwined (vulnerability, connection)
- One kneeling before the other (submission, dominance)
- Standing embrace, faces almost touching (intimacy)
- One figure standing behind, hands on shoulders (control, protection)
- Leaning against wall, partner standing close (vulnerability)
- Back-to-back, heads turned toward each other (intimacy and distance)
- One hand on the other's face (tenderness, control)
- Figures bound loosely (restraint, trust)
- One guiding the other's chin up (confidence, submission)

### [DESCRIBE AMBIENT BACKGROUND HERE]

Set the mood with **completely different environmental contexts** for each post:

**Ambient Ideas:**
- **Luxury bedroom** — hotel, silk sheets, soft lamps, intimate
- **Urban nightlife** — rainy streets, streetlights, bokeh, contemporary
- **High-end lounge** — cocktail bar, amber shelves, upscale emptiness
- **Minimalist bedroom** — clean lines, window light, modern sanctuary
- **Private villa** — outdoor/indoor blend, luxury furniture, isolation
- **Penthouse** — floor-to-floor windows, city lights, sophisticated
- **Sparse apartment** — candlelight, few objects, intimate focus
- **Garden/outdoor** — trees, moonlight, natural intimacy
- **Luxury car** — leather, interior lighting, enclosed intimacy

## Key Requirements (Always Apply)

✓ **Always silhouette-based** — Figures are dark shapes against moody backgrounds  
✓ **High-contrast** — Strong visual separation between subjects and background  
✓ **Burnt orange + crimson red** — Consistent warm, moody color grading  
✓ **Cinematic quality** — Professional, premium photography aesthetic  
✓ **Tasteful, not explicit** — Suggest intimacy and dynamics without nudity or graphic content  
✓ **Monochromatic warm palette** — Amber-red color grading throughout  
✓ **Extreme shadows** — Deep, dramatic shadows create mood  
✓ **Unique for each post** — No two images should use same pose + environment combo

## Naming Convention

Save generated images with this pattern:

```
blog_[post-slug].png
```

**Examples:**
- `blog_bdsm-couples-test.png`
- `blog_bondage-for-beginners.png`
- `blog_am-i-kinky.png`

Files go in: `public/images/blog_[post-slug].png`

## Image Specifications

- **Format:** PNG (supports transparency)
- **Dimensions:** 1200x800px (6:4 aspect ratio, optimal for blog cards)
- **File size:** <500KB (compressed for web)
- **Color space:** sRGB
- **Resolution:** 72 DPI (web optimized)

## Integration in Blog Posts

The blog post layout automatically pulls images from `public/images/`:

```
/images/blog_[post-slug].png
```

The image displays as:
1. **Blog card hero** on the blog index (`/blog`) with applied filters
2. **Post hero banner** at the top of the blog post

Applied filters (automatic):
- Grayscale filter
- Sepia tone
- Hue rotation to red
- Saturation boost
- Contrast enhancement
- Brightness reduction

**No action needed** — Just save the image with the correct filename and it auto-displays.

## Workflow

1. **Choose post** — Decide which blog post needs an image
2. **Brainstorm pose** — Pick a unique couple interaction for this post's topic
3. **Choose environment** — Select a different ambient setting (not used on other posts)
4. **Create prompt** — Fill in both bracketed sections with your choices
5. **Generate image** — Use your AI image generation tool (DALL-E, Midjourney, Ideogram, etc.)
6. **Review** — Verify:
   - Silhouettes are clear and high-contrast
   - Lighting is burnt orange/crimson red
   - Mood is cinematic and tasteful
   - No explicit content
   - Completely unique from other blog post images
7. **Save** — Export as PNG, 1200x800px, save to `public/images/blog_[slug].png`
8. **Deploy** — Image auto-displays on blog card and blog post hero

## Post Creation Checklist

When creating a blog post with AI image:

- [ ] Brainstorm unique couple pose (different from other posts)
- [ ] Choose unique ambient background (not used on other blog posts)
- [ ] Generate image using filled-in prompt template
- [ ] Save as `blog_[post-slug].png` in `public/images/`
- [ ] Verify image displays on blog index (`/blog`)
- [ ] Verify image displays as post hero
- [ ] Check lighting is moody and tasteful
- [ ] Confirm no image artifacts or quality issues
- [ ] Verify pose and environment are completely unique

## Quality Standards

### ✓ Good
- Clear silhouettes with emotional resonance
- Warm, moody lighting creating atmosphere
- Tasteful suggestion of dynamics
- Professional, premium feel
- Appropriate contrast and composition
- Completely unique pose + environment combo per post

### ✗ Avoid
- Explicit or graphic content
- Poor contrast (hard to see silhouettes)
- Cold or blue lighting (breaks the aesthetic)
- Cartoonish or amateur appearance
- Images that feel objectifying rather than intimate
- Reusing same pose or environment across multiple posts

## Tips

1. **Pose + environment pairing matters** — Match dynamics to setting (kneeling works better in intimate spaces, standing works in public)
2. **Vary the dynamics** — Mix submission, dominance, intimacy, vulnerability across different posts
3. **Lighting is everything** — The burnt orange/crimson palette is non-negotiable for brand consistency
4. **Silhouettes hide details** — Use this to suggest without showing
5. **Less is more** — Sparse, clean compositions often work better than busy backgrounds
6. **Keep a log** — Track which poses and environments you've used so you don't repeat them

## File Organization

```
tension-web/
├── public/
│   └── images/
│       ├── blog_bdsm-couples-test.png
│       ├── blog_bondage-for-beginners.png
│       ├── blog_am-i-kinky.png
│       ├── blog_bdsm-contract-guide.png
│       ├── blog_bdsm-starter-kit.png
│       └── ...
```

All blog post hero images go in `public/images/` with `blog_` prefix matching the post slug.

## Pose + Environment Log

Keep track of what you've created to ensure uniqueness:

| Post Slug | Couple Pose | Ambient Background |
|-----------|------------|-------------------|
| bdsm-couples-test | (pending) | (pending) |
| bondage-for-beginners | (pending) | (pending) |
| am-i-kinky | (pending) | (pending) |
| bdsm-contract-guide | (pending) | (pending) |
| bdsm-starter-kit | (pending) | (pending) |
