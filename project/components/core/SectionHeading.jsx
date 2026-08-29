import React from 'react';

export function SectionHeading({ eyebrow, title, sub, align = 'left', onTint = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: align === 'center' ? 680 : 760, ...style
    }} {...rest}>
      {eyebrow ? <div style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--ck-eyebrow-size)',
        letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase',
        color: onTint ? 'var(--ck-teal-deep)' : 'var(--ck-cyan)'
      }}>{eyebrow}</div> : null}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--ck-h2-weight)',
        fontSize: 'var(--ck-h2-size)', lineHeight: 'var(--ck-h2-lh)', letterSpacing: 'var(--ck-h2-track)',
        color: onTint ? 'var(--ck-ink)' : 'var(--ck-white)', textWrap: 'pretty'
      }}>{title}</h2>
      {sub ? <p style={{
        margin: 0, font: 'var(--type-body-lg)',
        color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)', textWrap: 'pretty'
      }}>{sub}</p> : null}
    </div>
  );
}
