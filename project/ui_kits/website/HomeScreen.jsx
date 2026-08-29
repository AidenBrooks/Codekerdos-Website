const { Button, Tag, StatusPill, StepBadge, Eyebrow, SectionHeading,
  CourseCard, TestimonialCard, StatTile, ComparisonRow, FeatureCard, MentorCard,
  GlowOrb, Reveal, CountUp, FeatureCycler, LogoMarquee,
  SectionBand, Accordion } = window.CodeKerdosDesignSystem_68bc71;

const D = window.CK_DATA;

function Hero({ onNavigate }) {
  return (
    <div style={{ background: 'var(--ck-void)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '80px var(--ck-space-5) 96px',
        display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--ck-space-5)', alignItems: 'center'
      }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
            <Eyebrow>India's most practical AI engineering platform</Eyebrow>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 64,
              lineHeight: 1.04, letterSpacing: '-1.5px', color: 'var(--ck-white)', textWrap: 'balance'
            }}>
              Build AI Products.<br />Crack top interviews.<br />
              <span style={{ background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get hired faster.</span>
            </h1>
            <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 560, textWrap: 'pretty' }}>
              Master DSA &amp; System Design, Gen-AI with RAG &amp; Agentic AI, DevOps/SRE, and AI FDE with Live Mentorship and Real-World Production-Grade Projects.
            </p>
            <div style={{ display: 'flex', gap: 'var(--ck-space-3)', flexWrap: 'wrap' }}>
              <Button size="lg" onClick={() => onNavigate('contact')}>Book A Free Webinar</Button>
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>Request a Callback</Button>
            </div>
            <div style={{ display: 'flex', gap: 'var(--ck-space-2)', flexWrap: 'wrap', marginTop: 'var(--ck-space-2)' }}>
              <Tag>Live Sessions</Tag><Tag>Expert Mentorship</Tag><Tag>Lifetime Access</Tag>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} style={{ display: 'flex', justifyContent: 'center' }}>
          <GlowOrb size={380}>
            <div style={{ textAlign: 'center', padding: 'var(--ck-space-4)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, letterSpacing: '-1.5px', color: 'var(--ck-white)' }}>15+</div>
              <div style={{ font: 'var(--type-body)', color: 'rgba(255,255,255,0.82)', marginTop: 6 }}>real deployable projects,<br />shipped with a mentor</div>
              <div style={{ marginTop: 'var(--ck-space-4)', display: 'flex', justifyContent: 'center' }}><StatusPill>Live cohort</StatusPill></div>
            </div>
          </GlowOrb>
        </Reveal>
      </div>
      <div style={{ borderTop: '1px solid var(--ck-border)', padding: '28px 0' }}>
        <div style={{ maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '0 var(--ck-space-5)' }}>
          <div style={{ marginBottom: 'var(--ck-space-3)' }}><Eyebrow tone="muted">Our learners work at</Eyebrow></div>
          <LogoMarquee names={D.partners} />
        </div>
      </div>
    </div>
  );
}

function Reasons() {
  return (
    <SectionBand tone="cyan" bleed>
      <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading onTint align="center" eyebrow="Why CodeKerdos" title="Why you should choose us?"
          sub="Here are just a few reasons why students choose our courses." style={{ margin: '0 auto' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 80}><FeatureCard {...r} style={{ height: '100%' }} /></Reveal>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}

function Included() {
  return (
    <SectionBand tone="surface">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading eyebrow="What's included" title="Everything comes with the seat."
          sub="Hover to hold a card; it advances on its own every four seconds." />
        <FeatureCycler items={[
          { label: 'Live Sessions', body: 'Learn in real time and revisit lessons anytime with recorded sessions.' },
          { label: 'Expert Mentorship', body: 'Weekly 1:1 plus on-demand access to mentors from FAANG and top tech firms.' },
          { label: 'Real-world Projects', body: '15+ real deployable projects, built with the tools you will use on the job.' },
          { label: 'Career Support', body: 'Resume building, mock interviews, referrals and placement assistance.' },
          { label: 'Lifetime Access', body: 'Learning material and placement assistance stay open after you finish.' }
        ]} />
      </div>
    </SectionBand>
  );
}

function Outcomes() {
  return (
    <SectionBand tone="teal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading onTint eyebrow="Outcomes" title="Where learning meets opportunity."
          sub="Helping you bridge the gap between learning and earning." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--ck-space-4)' }}>
          <StatTile onTint value={<CountUp to={92} suffix="%" />} label="Of graduates landed jobs within 6 months." />
          <StatTile onTint value={<CountUp to={120} suffix="%" />} label="Average hike in learners' CTC." />
          <StatTile onTint value={<CountUp to={50} suffix="+" />} label="Top tech companies hire from us." />
          <StatTile onTint value={<CountUp to={40} suffix="+" />} label="Mentors from FAANG & top tech firms." />
        </div>
        <div><Button variant="tertiary" style={{ background: 'var(--ck-ink)', color: 'var(--ck-white)' }} icon="→">Latest Placement Report</Button></div>
      </div>
    </SectionBand>
  );
}

function Courses({ onOpenCourse }) {
  return (
    <SectionBand tone="void">
      <div id="courses" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading eyebrow="Featured courses" title="Eight programs. One outcome."
          sub="Live cohorts across DSA, System Design, DevOps and AI — pick the track that matches where you are." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.courses.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 80}>
              <CourseCard {...c} href="#" onClick={() => onOpenCourse(c.slug)} style={{ height: '100%', cursor: 'pointer' }} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}

function Voices() {
  return (
    <SectionBand tone="orange">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading onTint eyebrow="Testimonials" title="Where dreams meet results."
          sub="Hear the voices of our alumni who've made their mark." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}><TestimonialCard {...t} style={{ height: '100%' }} /></Reveal>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}

function Mentors() {
  return (
    <SectionBand tone="surface">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading eyebrow="Guided by experts" title="Mentors who ship at scale."
          sub="Personalized mentorship to accelerate your learning and career growth." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.mentors.map((m, i) => <Reveal key={m.name} delay={(i % 5) * 80}><MentorCard {...m} linkedin="#" style={{ height: '100%' }} /></Reveal>)}
        </div>
      </div>
    </SectionBand>
  );
}

function Journey() {
  const [active, setActive] = React.useState(0);
  return (
    <SectionBand tone="void">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading eyebrow="The path" title="Your learning journey with CodeKerdos."
          sub="From your first counselling session to landing your dream job, CodeKerdos supports you at every turn." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.journey.map((s, i) => (
            <div key={s.title} onMouseEnter={() => setActive(i)} style={{
              display: 'flex', gap: 'var(--ck-space-4)', padding: 'var(--ck-space-4)',
              borderRadius: 'var(--ck-radius-card)',
              background: active === i ? 'var(--ck-elevated)' : 'transparent',
              border: '1px solid ' + (active === i ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
              transition: 'all var(--ck-dur-hover) var(--ck-ease-out)'
            }}>
              <StepBadge n={i + 1} active={active === i} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--ck-h4-size)', color: 'var(--ck-white)' }}>{s.title}</div>
                <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)', textWrap: 'pretty' }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}

function Compare() {
  return (
    <SectionBand tone="neutral">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <SectionHeading onTint eyebrow="Comparison" title="How CodeKerdos compares."
          sub="When you're investing in your future, it's smart to compare. Clear, honest, and built for outcomes." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 'var(--ck-space-4)', padding: '0 var(--ck-space-4)' }}>
            <span style={{ font: 'var(--type-body)', fontSize: 12, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--ck-ink-muted)' }}>Product comparison</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ck-ink)' }}>CodeKerdos</span>
            <span style={{ font: 'var(--type-body)', fontSize: 12, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--ck-ink-muted)' }}>Others</span>
          </div>
          {D.comparison.map((r, i) => <Reveal key={r.label} delay={i * 60}><ComparisonRow {...r} /></Reveal>)}
        </div>
      </div>
    </SectionBand>
  );
}

function Faqs() {
  return (
    <SectionBand tone="neutral" style={{ paddingBottom: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--ck-space-5)', alignItems: 'start' }}>
        <SectionHeading onTint eyebrow="FAQs" title="Questions, answered."
          sub="Whether you're curious about how to get started or need assistance with troubleshooting, we've got you covered." />
        <Accordion onTint items={D.faqs} />
      </div>
    </SectionBand>
  );
}

function Referral({ onNavigate }) {
  return (
    <SectionBand tone="void">
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--ck-space-5)', alignItems: 'center',
        padding: 'var(--ck-space-5)', borderRadius: 'var(--ck-radius-orb)',
        background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
          <Eyebrow>Refer &amp; earn</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--ck-h2-size)', lineHeight: 1.1, letterSpacing: '-0.8px', color: 'var(--ck-white)' }}>
            They save 10%. You earn ₹2,999.
          </h2>
          <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 520, textWrap: 'pretty' }}>
            Share your unique referral link with friends, classmates, or colleagues. When someone signs up through your link, they receive a 10% discount on their first course. For each successful referral, you earn ₹2999/- cashback towards your next course purchase.
          </p>
          <div style={{ display: 'flex', gap: 'var(--ck-space-3)', flexWrap: 'wrap', marginTop: 'var(--ck-space-2)' }}>
            <Button onClick={() => onNavigate('contact')}>Start Sharing</Button>
            <Button variant="link" icon="→">+91 92664 04473</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)' }}>
          {['Unlimited referrals — invite as many friends as you want', 'Mutual benefit — your friends save, and you earn rewards', 'Transparency — rewards credited once your friend enrolls'].map(t => (
            <div key={t} style={{ display: 'flex', gap: 'var(--ck-space-2)', alignItems: 'flex-start', font: 'var(--type-body)', color: 'var(--ck-muted)' }}>
              <span aria-hidden="true" style={{ color: 'var(--ck-success)', fontWeight: 700 }}>✓</span>{t}
            </div>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}

function HomeScreen({ onNavigate, onOpenCourse }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Reasons />
      <Included />
      <Outcomes />
      <Courses onOpenCourse={onOpenCourse} />
      <Voices />
      <Mentors />
      <Journey />
      <Compare />
      <Faqs />
      <Referral onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { HomeScreen });
