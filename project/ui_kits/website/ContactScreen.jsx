const { Button, Tag, Eyebrow, SectionHeading, MentorCard, StatTile,
  SectionBand, Reveal } = window.CodeKerdosDesignSystem_68bc71;

const CTD = window.CK_DATA;

function ContactScreen({ onNavigate }) {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', track: 'Advance DSA + System Design', level: 'Working professional' });
  const [sent, setSent] = React.useState(false);
  const field = {
    padding: '14px 18px', borderRadius: 'var(--ck-radius-chip)', background: 'var(--ck-elevated)',
    border: '1px solid var(--ck-border)', color: 'var(--ck-white)', font: 'var(--type-body)', outline: 'none', width: '100%'
  };
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <div style={{ background: 'var(--ck-void)' }}>
        <div style={{
          maxWidth: 'var(--ck-container)', margin: '0 auto', padding: '64px var(--ck-space-5) 96px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-5)', alignItems: 'start'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)' }}>
            <button onClick={() => onNavigate('home')} style={{
              appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
              font: 'var(--type-body)', color: 'var(--ck-cyan)', alignSelf: 'flex-start'
            }}>← Back to overview</button>
            <Eyebrow>Free 1:1 career counseling</Eyebrow>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56,
              lineHeight: 1.05, letterSpacing: '-1.5px', color: 'var(--ck-white)', textWrap: 'balance'
            }}>Book your free 1:1 career counseling today.</h1>
            <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 520, textWrap: 'pretty' }}>
              Get clarity, guidance, and support from industry professionals. Tell us where you are and we will point you at the right track.
            </p>
            <div style={{ display: 'flex', gap: 'var(--ck-space-2)', flexWrap: 'wrap' }}>
              {['Gurugram', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Mumbai', 'Kolkata'].map(c => <Tag key={c} tone="neutral">{c}</Tag>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-3)', marginTop: 'var(--ck-space-3)' }}>
              <StatTile value="40+" label="Mentors from FAANG & top tech firms." />
              <StatTile value="₹2,999" label="Cashback for every successful referral." />
            </div>
          </div>

          <div style={{
            padding: 'var(--ck-space-5)', borderRadius: 'var(--ck-radius-orb)',
            background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)',
            display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)', boxShadow: 'var(--ck-shadow-card)'
          }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)', padding: 'var(--ck-space-4) 0' }}>
                <span aria-hidden="true" style={{
                  width: 44, height: 44, borderRadius: 999, background: 'var(--ck-success)',
                  color: 'var(--ck-success-ink)', display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 20, fontWeight: 700
                }}>✓</span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--ck-h3-size)', letterSpacing: '-0.3px', color: 'var(--ck-white)' }}>
                  You're on the list, {form.name || 'friend'}.
                </h3>
                <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)' }}>
                  A counselor will call you on {form.phone || 'your number'} within one working day. You can also reach us at +91 92664 04473.
                </p>
                <Button variant="secondary" onClick={() => setSent(false)}>Submit another</Button>
              </div>
            ) : (
              <React.Fragment>
                <Eyebrow>Grab your spot</Eyebrow>
                <input style={field} placeholder="Full name" value={form.name} onChange={set('name')} />
                <input style={field} placeholder="Work email" value={form.email} onChange={set('email')} />
                <input style={field} placeholder="Phone (+91)" value={form.phone} onChange={set('phone')} />
                <select style={field} value={form.track} onChange={set('track')}>
                  {CTD.courses.map(c => <option key={c.slug}>{c.title}</option>)}
                </select>
                <div style={{ display: 'flex', gap: 'var(--ck-space-2)', flexWrap: 'wrap' }}>
                  {['Fresher', 'Working professional'].map(l => (
                    <button key={l} onClick={() => setForm(f => ({ ...f, level: l }))} style={{
                      appearance: 'none', cursor: 'pointer', padding: '8px 16px',
                      borderRadius: 'var(--ck-radius-pill)', font: 'var(--type-body)', fontSize: 13, fontWeight: 500,
                      background: form.level === l ? 'var(--ck-veil-cyan-hover)' : 'transparent',
                      border: '1px solid ' + (form.level === l ? 'var(--ck-cyan)' : 'var(--ck-border-strong)'),
                      color: form.level === l ? 'var(--ck-cyan)' : 'var(--ck-muted)'
                    }}>{l}</button>
                  ))}
                </div>
                <Button size="lg" style={{ justifyContent: 'center' }} onClick={() => setSent(true)}>Grab Your Spot</Button>
                <p style={{ margin: 0, font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-muted)' }}>
                  By submitting you agree to our Privacy Policy and consent to receive updates from CodeKerdos.
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>

      <SectionBand tone="teal" bleed>
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-5)' }}>
          <SectionHeading onTint eyebrow="Who you'll talk to" title="Guided by experts."
            sub="Personalized mentorship to accelerate your learning and career growth." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--ck-space-4)' }}>
            {CTD.mentors.slice(0, 5).map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <MentorCard {...m} linkedin="#" style={{ height: '100%' }} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionBand>
    </div>
  );
}

Object.assign(window, { ContactScreen });
