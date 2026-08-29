import React from 'react';

export function ProcessStep({ n, title, body, flip = false, visual, style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ck-space-6)',
      alignItems: 'center', ...style
    }} {...rest}>
      <div style={{
        order: flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)'
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
          letterSpacing: '1.6px', color: 'var(--ck-cyan)'
        }}>{String(n).padStart(2, '0')}</span>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'var(--ck-h3-size)', lineHeight: 'var(--ck-h3-lh)',
          letterSpacing: 'var(--ck-h3-track)', color: 'var(--ck-white)'
        }}>{title}</h3>
        <p style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-muted)', maxWidth: 460, textWrap: 'pretty' }}>{body}</p>
      </div>
      <div style={{
        order: flip ? 1 : 2, minHeight: 260, borderRadius: 'var(--ck-radius-orb)',
        background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)',
        padding: 'var(--ck-space-4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: '-40% -20% auto auto', width: 320, height: 320,
          background: 'var(--ck-glow-radial)', opacity: 0.5, pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', width: '100%' }}>{visual}</div>
      </div>
    </div>
  );
}
