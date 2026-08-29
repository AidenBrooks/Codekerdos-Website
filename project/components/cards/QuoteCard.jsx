import React from 'react';

export function QuoteCard({ quote, name, role, company, avatar, size = 'md', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const big = size === 'lg';
  return (
    <figure onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-4)',
      padding: big ? 'var(--ck-space-5)' : 'var(--ck-card-padding)',
      borderRadius: 'var(--ck-radius-card)', background: 'var(--ck-elevated)',
      border: '1px solid ' + (hover ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'var(--ck-shadow-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)', height: '100%', ...style
    }} {...rest}>
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: big ? 56 : 40,
        lineHeight: 0.6, color: 'var(--ck-cyan)', height: big ? 30 : 22
      }}>&ldquo;</span>
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: big ? 24 : 18, lineHeight: 1.45, letterSpacing: big ? '-0.4px' : '-0.1px',
        color: 'var(--ck-white)', textWrap: 'pretty', flex: 1
      }}>{quote}</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)' }}>
        <div style={{
          width: big ? 48 : 40, height: big ? 48 : 40, borderRadius: 999, flex: '0 0 auto',
          background: avatar ? 'center/cover no-repeat url(' + avatar + ')' : 'var(--ck-grad-orb)'
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--ck-white)' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ck-muted)' }}>{role}</span>
        </div>
        {company ? <span style={{
          marginLeft: 'auto', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
          letterSpacing: '-0.3px', color: 'var(--ck-muted)', opacity: 0.8, whiteSpace: 'nowrap'
        }}>{company}</span> : null}
      </figcaption>
    </figure>
  );
}
