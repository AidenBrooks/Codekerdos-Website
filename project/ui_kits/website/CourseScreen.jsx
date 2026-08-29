const { Button, Tag, StatusPill, StepBadge, Eyebrow, SectionHeading,
  CourseCard, TestimonialCard, StatTile, MentorCard, Reveal, CountUp,
  SectionBand, Accordion } = window.CodeKerdosDesignSystem_68bc71;

const CD = window.CK_DATA;

const MODULES = [
  { title: 'Foundations', body: 'Language fundamentals, complexity analysis, and how to move from brute force to optimal.' },
  { title: 'Core Data Structures', body: 'Arrays, strings, hashing, stacks, queues, trees and graphs with interview-grade problem sets.' },
  { title: 'Algorithm Patterns', body: 'Two pointers, sliding window, recursion, dynamic programming and greedy strategies.' },
  { title: 'System Design Fundamentals', body: 'High-level architecture, scalability, caching, queues and fault tolerance.' },
  { title: 'Design Deep Dives', body: 'Design a feed, a rate limiter, a live-streaming pipeline — with trade-off write-ups.' },
  { title: 'Interview Simulation', body: 'Weekly mocks with mentors from Amazon, Walmart and Microsoft, plus resume review.' }
];

function CourseScreen({ slug, onNavigate, onOpenCourse }) {
  const course = CD.courses.find(c => c.slug === slug) || CD.courses[0];
  const others = CD.courses.filter(c => c.slug !== course.slug).slice(0, 4);
  return (
    <div>
      <div style={{ background: 'var(--ck-void)' }}>
        <div style={{
          maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '64px var(--ck-space-5) 80px',
          display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 'var(--ck-space-5)', alignItems: 'start'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
            <button onClick={() => onNavigate('home')} style={{
              appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
              font: 'var(--type-body)', color: 'var(--ck-cyan)', alignSelf: 'flex-start'
            }}>← All courses</button>
            <Eyebrow>Live cohort · Starts every month</Eyebrow>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52,
              lineHeight: 1.06, letterSpacing: '-1.4px', color: 'var(--ck-white)', textWrap: 'balance'
            }}>{course.title}</h1>
            <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 620, textWrap: 'pretty' }}>{course.description}</p>
            <div style={{ display: 'flex', gap: 'var(--ck-space-2)', flexWrap: 'wrap' }}>
              {course.tags.filter(t => t[0] !== '+').map(t => <Tag key={t}>{t}</Tag>)}
              <StatusPill>Live</StatusPill>
            </div>
            <div style={{ display: 'flex', gap: 'var(--ck-space-3)', flexWrap: 'wrap' }}>
              <Button size="lg" onClick={() => onNavigate('contact')}>Book A Free Webinar</Button>
              <Button size="lg" variant="secondary">Brochure</Button>
            </div>
          </div>
          <div style={{
            padding: 'var(--ck-space-4)', borderRadius: 'var(--ck-radius-card)',
            background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)',
            display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)', boxShadow: 'var(--ck-shadow-card)'
          }}>
            {[['Duration', course.duration], ['Learners', course.learners], ['Rating', course.rating + ' (' + course.ratingCount + ')'], ['Format', 'Live + Recordings'], ['Projects', '15+ deployable']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--ck-space-3)', font: 'var(--type-body)' }}>
                <span style={{ color: 'var(--ck-muted)' }}>{k}</span>
                <span style={{ color: 'var(--ck-white)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
            <div style={{ height: 1, background: 'var(--ck-border)' }} />
            <div style={{ display: 'flex', gap: 'var(--ck-space-3)', alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--ck-grad-orb)', flex: '0 0 auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ck-white)' }}>{course.instructor}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ck-muted)' }}>{course.instructorRole}</span>
              </div>
            </div>
            <Button variant="tertiary" style={{ justifyContent: 'center' }}>Request a Callback</Button>
          </div>
        </div>
      </div>

      <SectionBand tone="cyan" bleed>
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
          <SectionHeading onTint eyebrow="Curriculum" title="Six modules, built for interviews and the job."
            sub="Every module ships an assignment, a code review, and a mock." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--ck-space-4)' }}>
            {MODULES.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div style={{
                  padding: 'var(--ck-space-4)', borderRadius: 'var(--ck-radius-card)',
                  background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(11,15,26,0.08)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)', height: '100%'
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '1.2px', color: 'var(--ck-teal-deep)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--ck-h4-size)', color: 'var(--ck-ink)' }}>{m.title}</span>
                  <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-ink-muted)', textWrap: 'pretty' }}>{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionBand>

      <SectionBand tone="surface">
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--ck-space-5)', alignItems: 'start' }}>
          <SectionHeading eyebrow="Proof" title="Alumni from this track."
            sub="Outcomes reported by learners after finishing the cohort." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-4)' }}>
            {CD.testimonials.slice(0, 2).map(t => <TestimonialCard key={t.name} {...t} />)}
            <StatTile value={<CountUp to={92} suffix="%" />} label="Landed jobs within 6 months of finishing." />
            <StatTile value={<CountUp to={15} suffix="+" />} label="Deployable projects in your portfolio." />
          </div>
        </div>
      </SectionBand>

      <SectionBand tone="neutral">
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--ck-space-5)', alignItems: 'start' }}>
          <SectionHeading onTint eyebrow="FAQs" title="Before you enroll." />
          <Accordion onTint items={CD.faqs.slice(0, 3)} />
        </div>
      </SectionBand>

      <SectionBand tone="void">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
          <SectionHeading eyebrow="Other tracks" title="Not quite the fit?" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--ck-space-4)' }}>
            {others.map(c => <CourseCard key={c.slug} {...c} href="#" onClick={() => onOpenCourse(c.slug)} style={{ height: '100%', cursor: 'pointer' }} />)}
          </div>
        </div>
      </SectionBand>
    </div>
  );
}

Object.assign(window, { CourseScreen });
