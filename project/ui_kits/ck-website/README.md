# UI kit — CK Website v4

Production-style React recreation of `CK Website v4.html`, the Claude Design prototype the
CodeKerdos team iterated on through 11 chat sessions (see `chats/` in the handoff bundle).
Pixel- and interaction-matched to that prototype rather than to the rest of this design
system's dark cyan-on-black skin — v4 landed on a light steel-tint hero with a character
cutout, which is intentional and was explicitly approved across many rounds of feedback.

## Files
| File | What it is |
|---|---|
| `index.html` | Bootstrap harness — mounts `CKWebsiteScreen` |
| `CKWebsiteScreen.jsx` | Every section as its own component (Nav, Hero, Partners, PlacementFilm, HallOfFame, Why, Courses, Projects, Testimonials, Journey, Mentors, Faqs, Cta, Footer) |
| `ck-website.css` | Page-scoped stylesheet ported from the prototype's `<style>` block (class names kept, values copied exactly — nothing snapped to a grid), scoped under `.ckw` |
| `data.js` | All real copy verbatim: 8 courses, 15 projects, 8 Hall-of-Fame alumni, 8 testimonials, 10 mentors, 7 journey steps, 9 "why" cards, 4 FAQs, partner names |

## Component reuse
Reused this design system's own primitives where the prototype's section actually maps to
one: `Reveal` (scroll-reveal on every section head and card grid — replaces the prototype's
global `IntersectionObserver` + `.reveal`/`.in` class toggling). The rest of the primitives
(`CourseCard`, `MentorCard`, `TestimonialCard`, `Accordion`, `NavBar`, `Footer`, `CtaBand`,
`LogoMarquee`, …) were built for the dark, generically-shaped homepage and don't fit v4's
specific bespoke treatments — its hero figure/disc/floating-card, the Hall of Fame
click-to-expand photo strips, the "Why CodeKerdos" bento mosaic with spotlight/conic-border
hover, the course-card tilt+glare, the testimonials flip-deck, the journey arc-dial, and the
mentors 3D coverflow all evolved through many rounds of pixel-specific art direction and are
purpose-built here to match, using the ported CSS classes instead.

## Interactions
- Nav is fixed/glassmorphic, brightens after 10px of scroll, and scroll-spies Overview /
  Courses / Testimonials / FAQs.
- Partners: two counter-scrolling marquee rows, paused on hover.
- Hall of Fame: click a photo strip (or its dot) to expand it into the quote card; the strip
  scrolls into view.
- Why CodeKerdos: cursor-tracking spotlight + conic border sweep on hover (bento placement is
  computed inline per card, not via CSS `:nth-child`, so it survives the `Reveal` wrapper).
- Courses: cursor-driven 3D tilt + glare on hover.
- Testimonials: click the deck or the arrows to cycle the active/next/far stack; dots jump
  directly.
- Journey: click a numbered dial item, a progress dot, or the arrows to animate the arc to
  that step (650ms eased rotation, crossfading title/description).
- Mentors: click a card, the arrows, or scroll/trackpad over the stage to advance the 3D
  coverflow.
- FAQs use native `<details>/<summary>` (single-open acts like the original).

## Known gaps
Same as the rest of this design system: fonts are Google Fonts (not self-hosted), and a
handful of avatars in the testimonials deck (Deepak, Kamaldeep, Avinash, Sanjana, Parth,
Vrutik) fall back to a blank circle since no photo was supplied for them — everything else
(hero character, alumni/mentor/course photography, project screenshots, logo) uses the real
assets that shipped with this bundle.
