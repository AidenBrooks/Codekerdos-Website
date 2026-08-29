# CodeKerdos Design System

CodeKerdos is an Indian online engineering-education platform that positions itself as **"India's most practical AI engineering platform."** It sells live, mentor-led cohort programs — Advance DSA + System Design, DevOps & SRE, Generative AI, AI FDE, Agentic AI, Advanced System Design, LaunchPad Full Stack, and Cloud & DevOps — to freshers and working professionals across Gurugram, Bangalore, Delhi, Hyderabad, Chennai, Mumbai and Kolkata. Founder & CEO Yogesh Sharma; CTO Soumyadeep Paul (SDE-2, Amazon); mentor roster drawn from Amazon, Walmart, Autodesk, Microsoft, Intuit, Oracle, Visa and Docusign. Recognized under the Startup India initiative.

## Surfaces represented

| Surface | Status here | Notes |
|---|---|---|
| Marketing website (`codekerdos.in`) | Recreated — see `ui_kits/website/` | The primary product surface: home, course detail, counseling capture |
| Marketing homepage, v4 art direction | Recreated — see `ui_kits/ck-website/` | Full single-page recreation of `CK Website v4.html` (the Claude Design prototype iterated on across 11 chat sessions) — light steel-tint hero with character cutout, Hall of Fame carousel, bento "why us" grid, 8 courses, 15 projects, testimonials flip-deck, journey arc-dial, mentors coverflow |
| Classroom app (`classroom.codekerdos.in/login`) | **Not recreated** | Behind login; no code, screenshots or design files were provided |
| Blog (`blog.codekerdos.in`) | **Not recreated** | Not provided |

## Sources used

- **Written brief** supplied in chat: full colour, type, spacing, component and motion specification, including the reference direction (Pesto Tech's editorial pattern — dark hero unlocking into pastel-tinted proof sections, bold tight-tracked type, numbered story beats, one recurring motion move). The *pattern* was borrowed structurally; the *skin* is entirely CodeKerdos' cyan-on-black.
- **`uploads/CK full logo.jpeg`** — the full logo lockup, copied to `assets/codekerdos-logo-full.jpeg`. The only brand mark supplied.
- **`https://codekerdos.in`** — read live for verbatim copy: hero, section headings, all eight course descriptions and instructors, nine "Why choose us" reasons, testimonials, the mentor roster with roles, the comparison table, FAQ answers, the seven journey steps and the referral terms. Every string in `ui_kits/website/data.js` comes from this page.

No codebase, Figma file or slide deck was provided. Nothing here was reconstructed from memory of the brand.

---

## Content fundamentals

**Voice: second person, plain, outcome-first.** The reader is "you"; the company is "we" or "CodeKerdos" — never "I". Copy leads with the result and only then explains the mechanism: *"Build AI Products. Crack top interviews. Get hired faster."* — three imperative fragments, no connective tissue. Section headings do the same: *"Where dreams meet results."*, *"Where learning meets opportunity."*, *"Why you should choose us?"*

**Casing.** Sentence case for headings, with a full stop when the heading is a statement and a question mark when it asks. The site itself mixes Title Case into headings inconsistently (*"Featured Courses"*, *"Guided by Experts"*); in this system, **sentence case wins** and the eyebrow above carries the section name in uppercase. Eyebrows are always ALL CAPS with +1.6px tracking: `INDIA'S MOST PRACTICAL AI ENGINEERING PLATFORM`.

**Register: reassuring, slightly conversational, never hyped.** The FAQ voice is the clearest specimen: *"Think of these as different starting lines - all heading toward the same finish."* / *"Don't stress about this."* / *"…without burning out."* Contractions are used freely. Hyphens (space-hyphen-space) appear where an em dash would; keep them if you are quoting site copy verbatim, use a proper em dash in new copy.

**Numbers are the argument.** Copy is dense with concrete figures — `5 Months`, `1,500+`, `4.9 (1,200)`, `15+ Real Deployable Projects`, `₹2999/- cashback`, `10% discount`, `+91 92664 04473`. Indian numbering conventions and the ₹ symbol always. Durations are written as *"5 Months"*, not *"5 mo"*.

**Honesty as positioning.** The comparison section is framed as fairness, not attack: *"When you're investing in your future, it's smart to compare. Here's how CodeKerdos stacks up against other popular platforms - clear, honest, and built for outcomes."* The differentiator against competitors is literally *"Real Career Support + Placement Assistance"* vs *"Unrealistic Placement Promises"*. Never write a guaranteed-placement claim.

**Testimonials follow a fixed two-part shape**: the learning experience, then a labelled `Outcome:` line naming the company. Keep quotes verbatim; the company name is the payload.

**Emoji.** The live site uses ✅ and ❌ in the comparison table and referral bullets. In this design system emoji are **not** used — the green `ComparisonRow` checkmark and the `StatusPill` dot carry that job. Unicode `→` is the one glyph used as UI furniture, on text links and CTAs.

---

## Visual foundations

**Structure.** The page is a rhythm, not a wall: a pure-black hero, then pale tinted proof sections in a fixed rotation — Cyan Tint (curriculum), Teal Tint (outcomes), Orange Tint (people/community), Neutral Tint (comparison, FAQ) — with dark bands returning between them for course and mentor grids. Never two tints of the same hue adjacent; never more than two dark bands in a row after the hero. Content sits in a 1200px container with 48px gutters and 96px vertical section padding.

**Colour.** One accent does all the work: Signal Cyan `#13B0E8`. Momentum Orange `#FF7A59` appears sparingly, green `#22C55E` only as proof (comparison checks, LIVE pill). Gradients are restricted to three uses — the hero orb (`135deg #13B0E8 → #0B6382`), the primary button fill (`90deg #00C6FF → #0072FF`), and gradient *text* on outcome figures. There is no purple, pink or violet anywhere in this system.

**Type.** Public Sans for display, Inter for body — the site's own faces, unchanged. Display type is heavy and tightly tracked (800 weight, −1.5px at 64px) and set in short lines; body copy is 15px/1.6 in Muted `#9AA5BD` on dark or Ink `#0B0F1A` on tint. `text-wrap: pretty` on paragraphs, `balance` on H1s.

**Backgrounds.** Flat colour, always. No photographic hero, no repeating pattern, no texture or grain, no noise overlay. The only non-flat backgrounds are the three named gradients and the 120px black-to-tint **bleed** that softens the hero-to-body handoff (`SectionBand bleed`). Imagery, where the real site uses it, is cool-toned product screenshots and warm candid alumni photography — none of it was supplied, so components fall back to the brand gradient (see Iconography).

**Cards.** 20px radius, 28px padding, Elevated `#111827` fill, 1px `#1F2937` hairline, `0 4px 8px rgba(0,0,0,0.35)` at rest. On tint sections cards flip to the tint colour itself (testimonials) or `rgba(255,255,255,0.7)` with a `rgba(11,15,26,0.08)` hairline. No coloured left-border accents.

**Shadows.** Two systems, never mixed. Cyan **glow** (`0 8px 24px rgba(19,176,232,0.35)`) belongs to gradient buttons and the active step badge only. Neutral **depth** (8px blur at rest → 24px on hover) belongs to cards.

**Hover.** Cards lift `translateY(-4px)` and deepen their shadow over 200ms. Primary buttons lift 2px and brighten their glow. Secondary buttons swap their `#3A4258` outline for cyan. Text links go 75% opacity and their `→` slides 3px right. Nav links go from Muted to Cyan. Nothing changes size or scale on hover, and nothing changes fill colour except the outline swap.

**Press.** Colour only — no shrink, no scale. Buttons drop the lift and return to their rest shadow. Disabled is 40% opacity with the shadow removed.

**Borders.** Everything is 1px except the secondary button outline at 1.5px. Three border values in ascending emphasis: `#1F2937` hairline (default), `#2A3348` (hover / active / tags), `#3A4258` (button outlines).

**Transparency & blur.** Sparingly and for two reasons. The sticky nav is `rgba(0,0,0,0.72)` with `saturate(180%) blur(16px)`, so content scrolls under it legibly. Tag pills use an 8% cyan veil. The partner marquee uses a horizontal mask gradient rather than a solid fade capsule — protection gradients over capsules, throughout.

**Motion.** Six moves, no more. One signature — the hero glow breathing 0.6 → 1 opacity over 4s, `ease-in-out`, infinite — used exactly once per page. Then: stat count-up on scroll (1.2s ease-out, once), the auto-cycling feature list (4s, pauses on hover), card hover-lift (200ms), section reveal (fade + 24px rise, children staggered 80ms, one pass), and the dark-to-tint bleed. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` for entrances and interactions, `cubic-bezier(0.4, 0, 0.2, 1)` for the loop. No bounces, no spring, no parallax, no scroll-jacking. `prefers-reduced-motion` zeroes the hover and reveal durations.

**Radii.** 10px chips, 14px step badges, 20px cards, 32px orb and hero frames, 999px buttons and tags. Nothing is square-cornered.

---

## Iconography

**No icon set was provided.** The live site serves its own flat SVG icons from `codekerdos.in/icons/` (`certificate.svg`, `networking.svg`, `curriculum.svg`, `guidance.svg`, `icon1.svg`–`icon6.svg`) plus composed illustration SVGs (`v2/features.svg`, `v2/trusted-by.svg`, `v2/company-cloud.svg`, `v2/career-outcome.svg`) and partner logo PNGs under `partners/`. None of these files were supplied and they were **not** redrawn, approximated, or replaced with a CDN icon set.

What this system does instead:

- **Numbers replace icons.** Every place the site uses a decorative icon above a feature title, `StepBadge` supplies a zero-padded numeral (`01`–`09`) in a 52×52 badge. This is deliberate — it matches the numbered-story-beat pattern and avoids inventing a mark the brand does not own.
- **Unicode glyphs carry the small jobs**: `→` on links and CTAs, `✓` inside the green comparison check and success states, `+` rotating to `×` on the FAQ accordion, `“` as the testimonial quote glyph. All set in the brand faces — no icon font, no emoji.
- **Avatars and partner logos degrade honestly.** `CourseCard`, `TestimonialCard` and `MentorCard` accept image URLs and fall back to the `--ck-grad-orb` gradient disc when none is passed. `LogoMarquee` renders partner names as Public Sans wordmarks.
- **Logo.** `assets/codekerdos-logo-full.jpeg` is the supplied lockup — a dark navy disc with a white `C` and a cyan `K` chevron, beside the `CodeKerdos` wordmark, on a light `#F5F5F5` field. It is a raster JPEG on a light background, so it cannot sit on the black hero without a light plate. **Ask the user for an SVG and a dark-background / reversed variant.** Never redraw the mark.

**If you need icons**: request the real SVGs from `codekerdos.in/icons/` first. Only if they cannot be obtained, substitute Lucide (1.5px stroke, rounded caps, closest match to the site's flat line style) from CDN and flag the substitution in the deliverable.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/fonts.css` | Public Sans + Inter via Google Fonts; `--font-display`, `--font-body` |
| `tokens/colors.css` | Surfaces, accent, section tints, text, semantic, gradients, aliases |
| `tokens/typography.css` | Display/body/eyebrow scales and `--type-*` shorthands |
| `tokens/spacing.css` | 4/8/16/24/48/96 scale, radius scale, container and section rhythm |
| `tokens/effects.css` | Glow and depth shadows, border values, veils, nav blur, radial glow |
| `tokens/motion.css` | Easings, durations, `ck-glow-pulse` / `ck-reveal-rise` / `ck-marquee` keyframes |
| `guidelines/*.card.html` | 17 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `assets/codekerdos-logo-full.jpeg` | The supplied logo lockup — the only brand asset provided |
| `ui_kits/website/` | Marketing-site recreation; see its own `README.md` |
| `ui_kits/ck-website/` | CK Website v4 recreation (real React, not the HTML prototype); see its own `README.md` |
| `SKILL.md` | Agent Skills front-matter for use outside this project |

### Components

Grouped by concern; each has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

**`components/core/`** — `Button`, `Tag`, `StatusPill`, `StepBadge`, `Eyebrow`, `SectionHeading`

**`components/cards/`** — `CourseCard`, `TestimonialCard`, `QuoteCard`, `StatTile`, `ComparisonRow`, `FeatureCard`, `MentorCard`, `ProcessStep`

**`components/motion/`** — `GlowOrb`, `Reveal`, `CountUp`, `FeatureCycler`, `LogoMarquee`

**`components/layout/`** — `SectionBand`, `NavBar`, `Footer`, `Accordion`, `CtaBand`

### Intentional additions

The brief specified buttons, badges/tags, cards and the comparison row. These were added because the recreated site cannot be assembled without them, and each maps to a section that exists on `codekerdos.in`:

- `NavBar`, `Footer` — the site's own chrome.
- `SectionBand` — enforces the dark/tint rhythm and 96px spacing that the brief describes as structure rather than a component.
- `Accordion` — the FAQ section.
- `SectionHeading`, `Eyebrow` — the eyebrow + H2 + subhead pattern repeated on every section.
- `MentorCard` — the "Guided by Experts" roster.
- `Reveal`, `CountUp`, `FeatureCycler`, `LogoMarquee`, `GlowOrb` — the brief's six motion moves, made reusable so they are applied consistently rather than re-implemented per page.

### Known gaps

1. **Fonts** are loaded from Google Fonts, not from supplied binaries. Public Sans and Inter are both genuine matches for the site's own faces — this is a delivery-method substitution, not a typeface substitution. Upload the licensed files if you want them self-hosted.
2. **No icon files.** See Iconography above.
3. **No photography or illustration.** Hero graphic, alumni and mentor portraits, partner logos, review screenshots and the Startup India certificate are all absent.
4. **Logo is a light-background JPEG.** A reversed SVG is needed for dark surfaces.
5. **Classroom app not covered** — no access was provided.
