# CK Website v4

Real React recreation of the "CK Website v4" landing page prototype (CodeKerdos — an Indian
online AI/engineering-education platform), pixel- and interaction-matched to the original
Claude Design prototype. Self-contained: no build step, loads React/Babel from CDN and runs
directly as static files.

## Files
| File | What it is |
|---|---|
| `index.html` | Entry point — loads React, the design tokens, the component bundle, and mounts the page |
| `CKWebsiteScreen.jsx` | Every section: nav, hero, partner marquee, placement film, Hall of Fame, "Why CodeKerdos" bento grid, courses, projects, testimonials, journey dial, mentors coverflow, FAQs, CTA band, footer |
| `ck-website.css` | Page styles (ported from the original prototype, exact values kept) |
| `data.js` | All real copy: 8 courses, 15 projects, 8 Hall-of-Fame alumni, 8 testimonials, 10 mentors, 7 journey steps, 9 "why" cards, 4 FAQs |
| `styles.css` + `tokens/` | Design tokens (colors, type, spacing, effects, motion) this page's CSS is built on |
| `_ds_bundle.js` | Compiled component bundle — only `Reveal` (scroll-reveal) is used here |
| `character-cutout.png`, `codekerdos-logo.png`, `assets/`, `uploads/` | Photography used by the page (mentors, course instructors, project screenshots, Hall of Fame / testimonial photos) |

## Run locally
Any static file server works, e.g. `npx serve .` — this is plain HTML/CSS/JS with in-browser
JSX transpilation (Babel standalone), no build step required.

## Known gaps
6 testimonial avatars (Deepak, Kamaldeep, Avinash, Sanjana, Parth, Vrutik) have no supplied
photo and render as blank gradient circles. Fonts are Google Fonts (not self-hosted).
