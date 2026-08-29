import React from 'react';

export function CtaBand({ eyebrow, title, emphasis, sub, action, benefits = [], style, ...rest }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: 'var(--ck-radius-orb)',
      background: 'var(--ck-elevated)', border: '1px solid var(--ck-border-strong)',
      padding: 'var(--ck-space-6) var(--ck-space-5)', ...style
    }} {...rest}>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', bottom: '-45%', width: 720, height: 720,
        transform: 'translateX(-50%)', background: 'var(--ck-glow-radial)',
        animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center',
        display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)', alignItems: 'center'
      }}>
        {eyebrow ? <span style={{
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--ck-eyebrow-size)',
          letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase', color: 'var(--ck-cyan)'
        }}>{eyebrow}</span> : null}
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48,
          lineHeight: 1.06, letterSpacing: '-1.2px', color: 'var(--ck-white)', textWrap: 'balance'
        }}>
          {title}{emphasis ? <React.Fragment>{' '}<span style={{
            background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text',
            backgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>{emphasis}</span></React.Fragment> : null}
        </h2>
        {action}
        {sub ? <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 560, textWrap: 'pretty' }}>{sub}</p> : null}
        {benefits.length ? <div style={{ display: 'flex', gap: 'var(--ck-space-5)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--ck-space-2)' }}>
          {benefits.map(b => (
            <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--ck-space-2)', font: 'var(--type-body)', color: 'var(--ck-white)' }}>
              <span aria-hidden="true" style={{ color: 'var(--ck-success)', fontWeight: 700 }}>✓</span>{b}
            </span>
          ))}
        </div> : null}
      </div>
    </div>
  );
}
