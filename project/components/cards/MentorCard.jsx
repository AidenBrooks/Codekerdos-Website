import React from 'react';

export function MentorCard({ name, role, photo, linkedin, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
      padding: 'var(--ck-space-4)', borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)',
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'none',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)', textAlign: 'center',
      alignItems: 'center', ...style
    }} {...rest}>
      <div style={{
        width: 84, height: 84, borderRadius: 999,
        background: photo ? 'center/cover no-repeat url(' + photo + ')' : 'var(--ck-grad-orb)',
        border: '2px solid var(--ck-border-strong)'
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--ck-white)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ck-muted)', textWrap: 'pretty' }}>{role}</span>
      </div>
      {linkedin ? <a href={linkedin} style={{
        fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--ck-cyan)',
        textDecoration: 'none', letterSpacing: '0.4px'
      }}>LinkedIn</a> : null}
    </div>
  );
}
