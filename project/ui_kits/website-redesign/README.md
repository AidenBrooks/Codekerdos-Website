# UI kit — CodeKerdos home, redesigned on the Pesto editorial pattern

Requested reference: `https://pesto.tech/`. What was borrowed is **structure and rhythm**, not Pesto's identity — none of their purple/pink/orange palette, wordmark, illustration or copy appears here. The skin stays CodeKerdos: cyan on black, Public Sans + Inter.

## Section-for-section mapping

| Pesto section | This page |
|---|---|
| Pill tagline → headline with an italic emphasis phrase → one-line subhead → three inline benefit chips → single CTA → floating developer-profile cards + video tile | Hero: "India's most practical AI engineering platform" pill → "Build AI products, crack top interviews and *get hired faster.*" → three chips (live mentorship / transparent pricing / curated tracks) → Book A Free Webinar → floating alumni cards + "Watch a live class" tile |
| "Top devs, trusted by the best in the business" + two logo marquee rows | "Our learners work at the best in the business" + two marquee rows (hiring partners, alumni employers) |
| "Find top development talent without the hassle" + 01–04 numbered steps, each with an alternating product visual | "Get job-ready without guessing what to learn next." + 01–05 `ProcessStep`s with mock product panels (skill check, track match, live class, project portfolio, placement track) |
| "A vetted global resume" — vertical label list (Profile / Repositories / Projects / Tech stack …) drawing into a live preview | "A curriculum that maps to the job, not the syllabus." — `FeatureCycler` over DSA / System Design / Gen AI / Agentic AI / DevOps & SRE / Interview Prep |
| "Vetting process that weeds out 99%" — two prose paragraphs + one CTA | "Five to six months of real work, so you skip the eight-month detour." — two paragraphs, CTA, two stat tiles |
| "Backed by the best in business" — endorsement quote cards with company logo | "Taught by engineers who ship at scale." — one featured `QuoteCard` + two supporting, then the mentor roster |
| — | Featured courses grid (CodeKerdos-specific; no Pesto equivalent) |
| "Helping tech leaders find the exact talent they need" — testimonial carousel with arrows | "Helping learners land the exact role they want." — paged `TestimonialCard` carousel + count-up stat row |
| — | Comparison table (CodeKerdos-specific) |
| "Frequently Asked Questions" + "Have more questions? Contact our support team" + plus-icon accordion | Same shape, phone number instead of a support email |
| "You're one click away from hiring your **next best employee.**" — centred headline with gradient emphasis, one CTA, two benefit lines | `CtaBand`: "You're one call away from *your next role.*" + three benefit lines |
| Footer: logo, tagline, socials, link columns | Existing `Footer` |

## What changed versus the current site

- **One CTA per section** instead of two or three competing buttons.
- **The nine-card "Why choose us?" grid became a five-beat numbered sequence** with a visual per beat — the site's biggest structural gain, and the core of Pesto's pattern.
- **Dark-dominant**, matching Pesto: only the courses (Cyan Tint), outcomes (Teal Tint) and FAQ (Neutral Tint) bands go pale.
- **Curriculum is now interactive** rather than a wall of feature cards.
- **Endorsements split in two**: display-weight `QuoteCard`s on dark for credibility, pale `TestimonialCard`s on tint for alumni outcomes.
- All copy is CodeKerdos', taken verbatim from `codekerdos.in` where it exists.

## Files
`index.html` (routing shell) · `RedesignHomeScreen.jsx` (all sections) · `Mocks.jsx` (the six mock product panels used as step visuals) · course detail and counseling screens are reused from `../website/`, and content from `../website/data.js`.

## Known gaps
Pesto leans heavily on real product screenshots and photography. None of CodeKerdos' imagery was supplied, so the step visuals are **mock UI panels composed from tokens** and every avatar falls back to the brand gradient. Swap in real screenshots and portraits and the pattern reads much closer to the reference.
