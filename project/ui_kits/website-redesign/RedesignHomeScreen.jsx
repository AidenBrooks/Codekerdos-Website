const { Button, Tag, StatusPill, Eyebrow, SectionHeading,
  CourseCard, TestimonialCard, StatTile, ComparisonRow, MentorCard,
  ProcessStep, QuoteCard, Reveal, CountUp, FeatureCycler, LogoMarquee,
  SectionBand, Accordion, CtaBand } = window.CodeKerdosDesignSystem_68bc71;

const D = window.CK_DATA;

/* 1 — Hero: badge, headline with gradient emphasis, three inline chips, one CTA, floating profile stack */
function Hero({ onNavigate }) {
  return (
    <div style={{ background: 'var(--ck-void)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '88px var(--ck-space-5) 72px',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--ck-space-6)', alignItems: 'center'
      }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
            <span style={{
              alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 'var(--ck-space-2)',
              padding: '8px 16px', borderRadius: 'var(--ck-radius-pill)',
              background: 'var(--ck-veil-cyan)', border: '1px solid var(--ck-border-strong)'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ck-cyan)' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--ck-eyebrow-size)',
                letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase', color: 'var(--ck-cyan)'
              }}>India's most practical AI engineering platform</span>
            </span>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 62,
              lineHeight: 1.04, letterSpacing: '-1.8px', color: 'var(--ck-white)', textWrap: 'balance'
            }}>
              Build AI products, crack top interviews and{' '}
              <span style={{
                fontStyle: 'italic', fontWeight: 700,
                background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text',
                backgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>get hired faster.</span>
            </h1>
            <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 540, textWrap: 'pretty' }}>
              No guesswork, no recorded-video graveyard, no unrealistic placement promises.
            </p>
            <div style={{ display: 'flex', gap: 'var(--ck-space-5)', flexWrap: 'wrap' }}>
              {[['Live mentorship', 'Weekly 1:1 + on-demand'], ['Transparent pricing', 'EMI, no hidden fees'], ['Curated tracks', 'Matched to your level']].map(([t, s]) => (
                <div key={t} style={{ display: 'flex', gap: 'var(--ck-space-2)', alignItems: 'flex-start' }}>
                  <span aria-hidden="true" style={{
                    width: 20, height: 20, borderRadius: 999, flex: '0 0 auto', marginTop: 2,
                    background: 'var(--ck-veil-cyan-hover)', border: '1px solid var(--ck-cyan)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ck-cyan)', fontSize: 11, fontWeight: 700
                  }}>✓</span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ck-white)' }}>{t}</span>
                    <span style={{ font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-muted)' }}>{s}</span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 'var(--ck-space-3)', flexWrap: 'wrap', marginTop: 'var(--ck-space-2)' }}>
              <Button size="lg" onClick={() => onNavigate('contact')}>Book A Free Webinar</Button>
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>Request a Callback</Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <MockHeroStack />
        </Reveal>
      </div>

      <div style={{ borderTop: '1px solid var(--ck-border)', padding: '32px 0 40px' }}>
        <div style={{ maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '0 var(--ck-space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)' }}>
            <span aria-hidden="true" style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--ck-veil-cyan)', border: '1px solid var(--ck-border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ck-cyan)', fontSize: 12 }}>★</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ck-white)' }}>Our learners work at the best in the business.</span>
          </div>
          <LogoMarquee names={D.partners} />
          <LogoMarquee names={['Paytm', 'IBM', 'TCS', 'KapturCx', 'LiveRamp', 'MakeMyTrip', 'Capgemini', 'OLA', 'Tata Cliq']} speed={36} />
        </div>
      </div>
    </div>
  );
}

/* 2 — Numbered process sequence with alternating visual panels */
function Process() {
  const steps = [
    { n: 1, title: 'Share where you are.', body: 'Answer a five-question skill check and a counselor maps you to the beginner, intermediate or advanced track — free, before you pay anything.', visual: <MockIntake /> },
    { n: 2, title: 'Get matched to one track.', body: 'We curate the programs that fit your level, target role and hours per week, so you commit to one thing instead of collecting eight courses.', visual: <MockMatch />, flip: true },
    { n: 3, title: 'Learn live, then rewatch.', body: 'Live cohorts run by working engineers, every session recorded, with doubt threads and 1:1 mentor time between classes.', visual: <MockLive /> },
    { n: 4, title: 'Ship 15+ real projects.', body: 'Deployable projects reviewed by a mentor, not toy exercises — the portfolio is the thing you take into the interview.', visual: <MockProjects />, flip: true },
    { n: 5, title: 'Walk into interviews ready.', body: 'Resume review, mock interviews with FAANG mentors, referrals and placement assistance that stays open for life.', visual: <MockOffer /> }
  ];
  return (
    <SectionBand tone="surface">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-6)' }}>
        <h2 style={{
          margin: 0, maxWidth: 860, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
          lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-white)', textWrap: 'balance'
        }}>Get job-ready without guessing what to learn next.</h2>
        {steps.map(s => <Reveal key={s.n}><ProcessStep {...s} /></Reveal>)}
      </div>
    </SectionBand>
  );
}

/* 3 — Vertical label list drawing into a live preview */
function Curriculum() {
  return (
    <SectionBand tone="void">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <h2 style={{
          margin: 0, maxWidth: 820, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
          lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-white)', textWrap: 'balance'
        }}>A curriculum that maps to the job, not the syllabus.</h2>
        <FeatureCycler items={[
          { label: 'DSA', body: 'Complexity, patterns and the habit of moving from brute force to optimal under time pressure.' },
          { label: 'System Design', body: 'High-level architecture, scalability, caching, queues and fault tolerance — with written trade-offs.' },
          { label: 'Gen AI', body: 'LLMs, prompt engineering, RAG and fine-tuning, applied to products that serve real traffic.' },
          { label: 'Agentic AI', body: 'Agent orchestration and multi-agent systems, from tool use to evaluation harnesses.' },
          { label: 'DevOps & SRE', body: 'Linux, Git, CI/CD, Docker, Kubernetes, Terraform and observability you can operate on call.' },
          { label: 'Interview Prep', body: 'Weekly mocks with mentors from Amazon, Walmart and Microsoft, plus resume and referral support.' }
        ]} />
      </div>
    </SectionBand>
  );
}

/* 4 — Two-paragraph rigor statement with a single CTA */
function Rigor({ onNavigate }) {
  return (
    <SectionBand tone="surface">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-6)', alignItems: 'start' }}>
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44,
          lineHeight: 1.08, letterSpacing: '-1.3px', color: 'var(--ck-white)', textWrap: 'balance'
        }}>Five to six months of real work, so you skip the eight-month detour.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
          <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', textWrap: 'pretty' }}>
            Every module is built around tools you'll actually use on the job and ends in something deployed. Mentors are working engineers at Amazon, Walmart, Autodesk, Microsoft, Intuit, Oracle, Visa and Docusign — they review your code, not a rubric.
          </p>
          <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', textWrap: 'pretty' }}>
            The schedule is built for people with a full-time job, which is why most learners finish in six to nine months without burning out. Learning material and placement assistance stay open after you finish.
          </p>
          <div style={{ display: 'flex', gap: 'var(--ck-space-3)', flexWrap: 'wrap' }}>
            <Button onClick={() => onNavigate('contact')}>Book A Free Webinar</Button>
            <Button variant="link" icon="→">Latest placement report</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--ck-space-3)', marginTop: 'var(--ck-space-2)' }}>
            <StatTile value={<CountUp to={92} suffix="%" />} label="Landed jobs within 6 months." />
            <StatTile value={<CountUp to={40} suffix="+" />} label="Mentors from FAANG & top tech." />
          </div>
        </div>
      </div>
    </SectionBand>
  );
}

/* 5 — Endorsement grid, featured quote first */
function Backed() {
  return (
    <SectionBand tone="void">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <h2 style={{
          margin: 0, maxWidth: 720, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
          lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-white)', textWrap: 'balance'
        }}>Taught by engineers who ship at scale.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--ck-space-4)' }}>
          <QuoteCard size="lg"
            quote="CodeKerdos was the game-changer in my journey, transforming my approach to complex problems. The rigorous curriculum in advance DSA + System Design and the incredible mentorship gave me the confidence I needed to succeed in top-tier interviews."
            name="Harsh Vardhan" role="Alumnus · DSA + System Design" company="FAANG" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
            <QuoteCard quote="Today, I work on backend systems powering AI voice products that handle over 1M+ calls daily at scale."
              name="Saksham Srivastava" role="Software Engineer" company="KapturCx" />
            <QuoteCard quote="The hands-on projects and mentorship helped me gain confidence in CI/CD, Docker, Kubernetes, cloud platforms, and automation."
              name="Kuppuraj T" role="DevOps Engineer" company="TCS" />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--ck-space-4)' }}>
          {D.mentors.slice(0, 5).map((m, i) => <Reveal key={m.name} delay={i * 80}><MentorCard {...m} linkedin="#" style={{ height: '100%' }} /></Reveal>)}
        </div>
      </div>
    </SectionBand>
  );
}

/* 6 — Course catalogue */
function Courses({ onOpenCourse }) {
  return (
    <SectionBand tone="cyan" bleed>
      <div id="courses" style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--ck-space-5)', flexWrap: 'wrap' }}>
          <h2 style={{
            margin: 0, maxWidth: 620, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
            lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-ink)', textWrap: 'balance'
          }}>Eight live tracks. Pick the one that fits.</h2>
          <span style={{ font: 'var(--type-body-lg)', color: 'var(--ck-ink-muted)', maxWidth: 380, textWrap: 'pretty' }}>
            Freshers and working professionals, from three to nine months.
          </span>
        </div>
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

/* 7 — Alumni outcomes carousel */
function Outcomes() {
  const [page, setPage] = React.useState(0);
  const perPage = 3;
  const pages = Math.ceil(D.testimonials.length / perPage);
  const shown = D.testimonials.slice(page * perPage, page * perPage + perPage);
  const arrow = {
    width: 40, height: 40, borderRadius: 999, cursor: 'pointer',
    background: 'transparent', border: '1px solid rgba(11,15,26,0.16)',
    color: 'var(--ck-ink)', fontSize: 16, display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center'
  };
  return (
    <SectionBand tone="teal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--ck-space-5)', flexWrap: 'wrap' }}>
          <h2 style={{
            margin: 0, maxWidth: 660, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
            lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-ink)', textWrap: 'balance'
          }}>Helping learners land the exact role they want.</h2>
          <div style={{ display: 'flex', gap: 'var(--ck-space-2)' }}>
            <button style={arrow} onClick={() => setPage(p => (p - 1 + pages) % pages)} aria-label="Previous">←</button>
            <button style={arrow} onClick={() => setPage(p => (p + 1) % pages)} aria-label="Next">→</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--ck-space-4)' }}>
          {shown.map(t => <TestimonialCard key={t.name} {...t} style={{ height: '100%' }} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--ck-space-4)' }}>
          <StatTile onTint value={<CountUp to={92} suffix="%" />} label="Of graduates landed jobs within 6 months." />
          <StatTile onTint value={<CountUp to={120} suffix="%" />} label="Average hike in learners' CTC." />
          <StatTile onTint value={<CountUp to={50} suffix="+" />} label="Top tech companies hire from us." />
          <StatTile onTint value={<CountUp to={15} suffix="+" />} label="Deployable projects in your portfolio." />
        </div>
      </div>
    </SectionBand>
  );
}

/* 8 — Comparison */
function Compare() {
  return (
    <SectionBand tone="void">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--ck-space-5)', flexWrap: 'wrap' }}>
          <h2 style={{
            margin: 0, maxWidth: 560, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46,
            lineHeight: 1.08, letterSpacing: '-1.4px', color: 'var(--ck-white)', textWrap: 'balance'
          }}>Clear, honest, and built for outcomes.</h2>
          <span style={{ font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 400, textWrap: 'pretty' }}>
            When you're investing in your future, it's smart to compare.
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 'var(--ck-space-4)', padding: '0 var(--ck-space-4)' }}>
            <Eyebrow tone="muted">Product comparison</Eyebrow>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ck-cyan)' }}>CodeKerdos</span>
            <Eyebrow tone="muted">Others</Eyebrow>
          </div>
          {D.comparison.map((r, i) => <Reveal key={r.label} delay={i * 60}><ComparisonRow {...r} /></Reveal>)}
        </div>
      </div>
    </SectionBand>
  );
}

/* 9 — FAQ with support line */
function Faqs() {
  return (
    <SectionBand tone="neutral">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--ck-space-6)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42,
            lineHeight: 1.08, letterSpacing: '-1.2px', color: 'var(--ck-ink)', textWrap: 'balance'
          }}>Frequently asked questions</h2>
          <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-ink-muted)', textWrap: 'pretty' }}>
            Have more questions? Call us at <a href="tel:+919266404473" style={{ color: 'var(--ck-teal-deep)', fontWeight: 600 }}>+91 92664 04473</a> and a counselor will walk you through it.
          </p>
        </div>
        <Accordion onTint items={D.faqs} />
      </div>
    </SectionBand>
  );
}

/* 10 — Referral + closing CTA */
function Closing({ onNavigate }) {
  return (
    <SectionBand tone="void">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--ck-space-5)', alignItems: 'center',
          padding: 'var(--ck-space-5)', borderRadius: 'var(--ck-radius-orb)',
          background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
            <Eyebrow>Refer &amp; earn</Eyebrow>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.8px', color: 'var(--ck-white)' }}>
              They save 10%. You earn ₹2,999.
            </h3>
            <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)', maxWidth: 520, textWrap: 'pretty' }}>
              Unlimited referrals, credited once your friend completes enrollment. To refer someone, call us at +91 92664 04473.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)' }}>
            {['Unlimited referrals', 'Your friends save, you earn', 'Credited on enrollment'].map(t => (
              <div key={t} style={{ display: 'flex', gap: 'var(--ck-space-2)', alignItems: 'center', font: 'var(--type-body)', color: 'var(--ck-muted)' }}>
                <span aria-hidden="true" style={{ color: 'var(--ck-success)', fontWeight: 700 }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>

        <CtaBand eyebrow="Next cohort starts monthly"
          title="You're one call away from" emphasis="your next role."
          action={<Button size="lg" onClick={() => onNavigate('contact')}>Book A Free Webinar</Button>}
          sub="Get clarity, guidance, and support from industry professionals — the counseling call is free."
          benefits={['5-6 months, not 8-10', '15+ real deployable projects', 'Lifetime access and support']} />
      </div>
    </SectionBand>
  );
}

function RedesignHomeScreen({ onNavigate, onOpenCourse }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Process />
      <Curriculum />
      <Rigor onNavigate={onNavigate} />
      <Backed />
      <Courses onOpenCourse={onOpenCourse} />
      <Outcomes />
      <Compare />
      <Faqs />
      <Closing onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { RedesignHomeScreen });
