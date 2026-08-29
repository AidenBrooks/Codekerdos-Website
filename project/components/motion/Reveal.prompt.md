One-line: the section-reveal wrapper — every section and card grid gets one.

\`\`\`jsx
{courses.map((c, i) => <Reveal key={c.title} delay={i * 80}><CourseCard {...c} /></Reveal>)}
\`\`\`

80ms stagger, one pass. Do not re-trigger on scroll out and back.
