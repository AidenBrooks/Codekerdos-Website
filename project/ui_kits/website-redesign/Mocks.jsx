/* Stale-bundle fallback: ProcessStep / QuoteCard / CtaBand were added to the design system
   after the currently-served _ds_bundle.js was compiled. These minimal stand-ins only mount
   when the bundle does not yet export them; once it recompiles the real components win. */
(function () {
  const NS = window.CodeKerdosDesignSystem_68bc71 || (window.CodeKerdosDesignSystem_68bc71 = {});
  if (!NS.ProcessStep) NS.ProcessStep = function ProcessStep(p) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-6)', alignItems: 'center' }}>
        <div style={{ order: p.flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, letterSpacing: '1.6px', color: 'var(--ck-cyan)' }}>{String(p.n).padStart(2, '0')}</span>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--ck-h3-size)', lineHeight: 1.2, letterSpacing: '-0.3px', color: 'var(--ck-white)' }}>{p.title}</h3>
          <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 460, textWrap: 'pretty' }}>{p.body}</p>
        </div>
        <div style={{ order: p.flip ? 1 : 2, minHeight: 260, borderRadius: 'var(--ck-radius-orb)', background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)', padding: 'var(--ck-space-4)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: '-40% -20% auto auto', width: 320, height: 320, background: 'var(--ck-glow-radial)', opacity: 0.5, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', width: '100%' }}>{p.visual}</div>
        </div>
      </div>
    );
  };
  if (!NS.QuoteCard) NS.QuoteCard = function QuoteCard(p) {
    const big = p.size === 'lg';
    return (
      <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)', padding: big ? 'var(--ck-space-5)' : 'var(--ck-card-padding)', borderRadius: 'var(--ck-radius-card)', background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)', boxShadow: 'var(--ck-shadow-card)', height: '100%', ...p.style }}>
        <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: big ? 56 : 40, lineHeight: 0.6, color: 'var(--ck-cyan)', height: big ? 30 : 22 }}>&ldquo;</span>
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: big ? 24 : 18, lineHeight: 1.45, letterSpacing: big ? '-0.4px' : '-0.1px', color: 'var(--ck-white)', textWrap: 'pretty', flex: 1 }}>{p.quote}</blockquote>
        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)' }}>
          <div style={{ width: big ? 48 : 40, height: big ? 48 : 40, borderRadius: 999, flex: '0 0 auto', background: 'var(--ck-grad-orb)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--ck-white)' }}>{p.name}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ck-muted)' }}>{p.role}</span>
          </div>
          {p.company ? <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '-0.3px', color: 'var(--ck-muted)', opacity: 0.8, whiteSpace: 'nowrap' }}>{p.company}</span> : null}
        </figcaption>
      </figure>
    );
  };
  if (!NS.CtaBand) NS.CtaBand = function CtaBand(p) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--ck-radius-orb)', background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)', padding: 'var(--ck-space-6) var(--ck-space-5)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: '-45%', width: 720, height: 720, transform: 'translateX(-50%)', background: 'var(--ck-glow-radial)', animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)', alignItems: 'center' }}>
          {p.eyebrow ? <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--ck-eyebrow-size)', letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase', color: 'var(--ck-cyan)' }}>{p.eyebrow}</span> : null}
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, lineHeight: 1.06, letterSpacing: '-1.2px', color: 'var(--ck-white)', textWrap: 'balance' }}>
            {p.title}{p.emphasis ? <React.Fragment>{' '}<span style={{ background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.emphasis}</span></React.Fragment> : null}
          </h2>
          {p.action}
          {p.sub ? <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 560, textWrap: 'pretty' }}>{p.sub}</p> : null}
          {(p.benefits || []).length ? <div style={{ display: 'flex', gap: 'var(--ck-space-5)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--ck-space-2)' }}>
            {p.benefits.map(b => <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--ck-space-2)', font: 'var(--type-body)', color: 'var(--ck-white)' }}><span aria-hidden="true" style={{ color: 'var(--ck-success)', fontWeight: 700 }}>✓</span>{b}</span>)}
          </div> : null}
        </div>
      </div>
    );
  };
})();

const panel = {
  borderRadius: 'var(--ck-radius-card)', background: 'var(--ck-surface)',
  border: '1px solid var(--ck-border-strong)', padding: 'var(--ck-space-4)',
  display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
  boxShadow: 'var(--ck-shadow-card)'
};
const rowLabel = { font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-muted)' };

function MockIntake() {
  return (
    <div style={panel}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--ck-cyan)' }}>Skill check · 5 questions</span>
      {[['Where are you now?', 'Working professional, 3 yrs'], ['Target role', 'Backend / AI engineer'], ['Hours per week', '8-10'], ['Timeline', 'Next 6 months']].map(([q, a]) => (
        <div key={q} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={rowLabel}>{q}</span>
          <div style={{
            padding: '10px 14px', borderRadius: 'var(--ck-radius-chip)', background: 'var(--ck-elevated)',
            border: '1px solid var(--ck-border)', font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-white)'
          }}>{a}</div>
        </div>
      ))}
      <div style={{
        marginTop: 4, alignSelf: 'flex-start', padding: '9px 18px', borderRadius: 'var(--ck-radius-pill)',
        background: 'var(--ck-grad-button)', boxShadow: 'var(--ck-shadow-glow)',
        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#fff'
      }}>See my track</div>
    </div>
  );
}

function MockMatch() {
  const rows = [
    { t: 'Advance DSA + System Design', m: '96% match', on: true },
    { t: 'Generative AI', m: '88% match' },
    { t: 'Cloud & DevOps Engineering', m: '71% match' }
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)' }}>
      {rows.map(r => (
        <div key={r.t} style={{
          display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)',
          padding: '14px 16px', borderRadius: 'var(--ck-radius-card)',
          background: r.on ? 'var(--ck-surface)' : 'rgba(11,15,26,0.6)',
          border: '1px solid ' + (r.on ? 'var(--ck-cyan)' : 'var(--ck-border)'),
          boxShadow: r.on ? 'var(--ck-shadow-glow)' : 'none'
        }}>
          <div style={{ width: 30, height: 30, borderRadius: 999, background: 'var(--ck-grad-orb)', flex: '0 0 auto' }} />
          <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: r.on ? 'var(--ck-white)' : 'var(--ck-muted)' }}>{r.t}</span>
          <span style={{ font: 'var(--type-body)', fontSize: 12, fontWeight: 600, color: r.on ? 'var(--ck-cyan)' : 'var(--ck-muted)' }}>{r.m}</span>
        </div>
      ))}
    </div>
  );
}

function MockLive() {
  return (
    <div style={panel}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-2)' }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--ck-success)' }} />
        <span style={{ font: 'var(--type-body)', fontSize: 12, fontWeight: 600, color: 'var(--ck-white)' }}>Live now · Sharding &amp; replication</span>
        <span style={{ marginLeft: 'auto', font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-muted)' }}>48 in class</span>
      </div>
      <div style={{
        height: 96, borderRadius: 'var(--ck-radius-chip)', background: 'var(--ck-grad-orb)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <span style={{ width: 42, height: 42, borderRadius: 999, background: 'rgba(0,0,0,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 15 }}>▶</span>
      </div>
      <div style={{ display: 'flex', gap: 'var(--ck-space-2)', flexWrap: 'wrap' }}>
        {['Recording ready', 'Notes', 'Doubt thread'].map(t => (
          <span key={t} style={{
            padding: '7px 13px', borderRadius: 'var(--ck-radius-pill)', background: 'var(--ck-veil-cyan)',
            border: '1px solid var(--ck-border-strong)', font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-cyan)'
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function MockProjects() {
  const rows = [['url-shortener', 'deployed', 'var(--ck-success)'], ['rag-search-api', 'deployed', 'var(--ck-success)'], ['k8s-autoscaler', 'in review', 'var(--ck-orange)'], ['agentic-support-bot', 'building', 'var(--ck-muted)']];
  return (
    <div style={panel}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--ck-cyan)' }}>Portfolio · 15+ projects</span>
      {rows.map(([n, s, c]) => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)', paddingBottom: 10, borderBottom: '1px solid var(--ck-border)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ck-white)', flex: 1 }}>{n}</span>
          <span style={{ font: 'var(--type-body)', fontSize: 12, color: c }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function MockOffer() {
  return (
    <div style={panel}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--ck-cyan)' }}>Placement track</span>
      {[['Resume reviewed', '✓'], ['4 mock interviews cleared', '✓'], ['Referrals sent', '3'], ['Offers in hand', '2']].map(([k, v]) => (
        <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)' }}>
          <span style={{ flex: 1, font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-white)' }}>{k}</span>
          <span style={{ font: 'var(--type-body)', fontSize: 13, fontWeight: 700, color: 'var(--ck-success)' }}>{v}</span>
        </div>
      ))}
      <div style={{ height: 1, background: 'var(--ck-border)' }} />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--ck-space-2)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-1px', background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>120%</span>
        <span style={{ font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-muted)' }}>average CTC hike</span>
      </div>
    </div>
  );
}

function MockHeroStack() {
  const people = [
    { n: 'Vrutik Patel', r: 'SDE · Microsoft', t: 'DSA + System Design' },
    { n: 'Tushar Yadav', r: 'Software Engineer · Paytm', t: 'Generative AI' },
    { n: 'Kuppuraj T', r: 'DevOps Engineer · TCS', t: 'Cloud & DevOps' }
  ];
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 440 }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-22%', background: 'var(--ck-glow-radial)',
        animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite', pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
        {people.map((p, i) => (
          <div key={p.n} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)',
            padding: '16px 18px', borderRadius: 'var(--ck-radius-card)',
            background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)',
            boxShadow: 'var(--ck-shadow-card)',
            marginLeft: i === 1 ? 32 : 0, marginRight: i === 1 ? 0 : 24
          }}>
            <div style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--ck-grad-orb)', flex: '0 0 auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ck-white)' }}>{p.n}</span>
              <span style={{ font: 'var(--type-body)', fontSize: 12, color: 'var(--ck-muted)' }}>{p.r}</span>
            </div>
            <span style={{
              padding: '6px 12px', borderRadius: 'var(--ck-radius-pill)', background: 'var(--ck-veil-cyan)',
              border: '1px solid var(--ck-border-strong)', font: 'var(--type-body)', fontSize: 11, color: 'var(--ck-cyan)', whiteSpace: 'nowrap'
            }}>{p.t}</span>
          </div>
        ))}
        <div style={{
          position: 'relative', height: 132, borderRadius: 'var(--ck-radius-orb)',
          background: 'var(--ck-grad-orb)', border: '1px solid var(--ck-border-strong)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'var(--ck-space-2)'
        }}>
          <span style={{
            width: 52, height: 52, borderRadius: 999, background: 'rgba(0,0,0,0.35)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18
          }}>▶</span>
          <span style={{
            position: 'absolute', left: 18, bottom: 14, font: 'var(--type-body)', fontSize: 12,
            fontWeight: 600, color: 'rgba(255,255,255,0.9)'
          }}>Watch a live class</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MockIntake, MockMatch, MockLive, MockProjects, MockOffer, MockHeroStack });
