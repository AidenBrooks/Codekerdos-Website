import React from 'react';

const tints = {
  cyan: 'var(--ck-tint-cyan)',
  teal: 'var(--ck-tint-teal)',
  orange: 'var(--ck-tint-orange)',
  neutral: 'var(--ck-tint-neutral)'
};

export function TestimonialCard({ quote, name, outcome, avatar, tint = 'cyan', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)', borderRadius: 'var(--ck-radius-card)',
      background: tints[tint] || tints.cyan, border: '1px solid rgba(11,15,26,0.06)',
      boxShadow: hover ? 'var(--ck-shadow-tint-card-hover)' : 'var(--ck-shadow-tint-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out)',
      ...style
    }} {...rest}>
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 0.6,
        color: 'var(--ck-teal-deep)', opacity: 0.35, height: 24
      }}>&ldquo;</span>
      <blockquote style={{ margin: 0, font: 'var(--type-body-lg)', color: 'var(--ck-ink)', textWrap: 'pretty' }}>{quote}</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)', marginTop: 'auto' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 999, flex: '0 0 auto',
          background: avatar ? 'center/cover no-repeat url(' + avatar + ')' : 'var(--ck-grad-orb)'
        }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--ck-ink)' }}>{name}</span>
          {outcome ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ck-ink-muted)' }}>{outcome}</span> : null}
        </div>
      </figcaption>
    </figure>
  );
}
