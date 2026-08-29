# UI kit — CodeKerdos marketing website

Clickable recreation of `codekerdos.in`, composed entirely from this design system's components.

## Screens
| File | Screen | What it shows |
|---|---|---|
| `HomeScreen.jsx` | Home | Dark hero + glow orb, partner marquee, numbered "Why choose us" on Cyan Tint, auto-cycling inclusions band, outcomes count-up on Teal Tint, 8 featured courses, testimonials on Orange Tint, mentor grid, 7-step journey, comparison + FAQ on Neutral Tint, referral CTA |
| `CourseScreen.jsx` | Course detail | Course hero with fact panel and instructor, 6-module curriculum on Cyan Tint, proof band, short FAQ, other tracks |
| `ContactScreen.jsx` | Free 1:1 counseling | Lead form with track select, fresher/professional toggle, submitted state, mentor roster |
| `data.js` | — | All real site copy: 8 courses, 9 reasons, testimonials, mentor roster, comparison table, FAQs, journey steps, partner names |

## Interactions
- Nav links and the logo route between screens; Login is decorative.
- Any course card opens the course detail screen; "All courses" returns home.
- The counseling form validates nothing but does transition to a submitted state.
- Feature list auto-advances every 4s and pauses on hover; stats count up on scroll.

## Known gaps
The site's own imagery is not included — hero illustration, alumni and mentor photographs, partner logo PNGs, review screenshots and the Startup India certificate all live on `codekerdos.in` / the project's S3 bucket and were not supplied. Avatars fall back to the brand gradient; partner logos render as Public Sans wordmarks in `LogoMarquee`. Drop the real files into `assets/` and pass them as `photo` / `avatar` / `logo` props.
