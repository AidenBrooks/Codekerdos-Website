import React from 'react';

export function FeatureCycler({ items = [], interval = 4000, style, ...rest }) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => setI(p => (p + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [paused, items.length, interval]);
  const active = items[i] || {};
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{
      display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'var(--ck-space-5)', alignItems: 'center', ...style
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)' }}>
        {items.map((it, idx) => (
          <button key={it.label} onClick={() => setI(idx)} style={{
            appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer',
            textAlign: 'left', padding: '10px 0', display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)',
            fontFamily: 'var(--font-display)', fontSize: 18,
            fontWeight: idx === i ? 700 : 500,
            color: idx === i ? 'var(--ck-white)' : 'var(--ck-muted)',
            transition: 'color var(--ck-dur-hover) var(--ck-ease-out)'
          }}>
            <span aria-hidden="true" style={{
              height: 2, width: idx === i ? 28 : 12,
              background: idx === i ? 'var(--ck-cyan)' : 'var(--ck-border-strong)',
              transition: 'width var(--ck-dur-hover) var(--ck-ease-out), background var(--ck-dur-hover) var(--ck-ease-out)'
            }} />
            {it.label}
          </button>
        ))}
      </div>
      <div style={{
        borderRadius: 'var(--ck-radius-card)', background: 'var(--ck-elevated)',
        border: '1px solid var(--ck-border-strong)', padding: 'var(--ck-card-padding)',
        minHeight: 180, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)',
        boxShadow: 'var(--ck-shadow-card)'
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--ck-eyebrow-size)', fontWeight: 700,
          letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase', color: 'var(--ck-cyan)'
        }}>{active.label}</span>
        <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', textWrap: 'pretty' }}>{active.body}</p>
      </div>
    </div>
  );
}
