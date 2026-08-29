import React from 'react';
import { Tag } from '../core/Tag.jsx';

export function CourseCard({ title, description, duration, learners, rating, ratingCount, tags = [], instructor, instructorRole, instructorAvatar, href = '#', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const meta = {
    display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px',
    borderRadius: 'var(--ck-radius-chip)', background: 'var(--ck-veil-white)',
    border: '1px solid var(--ck-border)', color: 'var(--ck-muted)',
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500
  };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)', borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)',
      boxShadow: hover ? 'var(--ck-shadow-card-hover)' : 'var(--ck-shadow-card)',
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out)',
      ...style
    }} {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ck-space-2)', alignItems: 'center' }}>
        {duration ? <span style={meta}>{duration}</span> : null}
        {learners ? <span style={meta}>{learners} learners</span> : null}
        {rating ? <span style={{ ...meta, color: 'var(--ck-cyan)', background: 'var(--ck-veil-cyan)', borderColor: 'var(--ck-border-strong)' }}>
          {rating}{ratingCount ? ' (' + ratingCount + ')' : ''}
        </span> : null}
      </div>
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--ck-h4-weight)',
        fontSize: 'var(--ck-h4-size)', lineHeight: 1.3, letterSpacing: '-0.1px', color: 'var(--ck-white)'
      }}>{title}</h3>
      <p style={{
        margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
      }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ck-space-2)' }}>
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
      <div style={{ height: 1, background: 'var(--ck-border)', margin: '4px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 999, flex: '0 0 auto',
          background: instructorAvatar ? 'center/cover no-repeat url(' + instructorAvatar + ')' : 'var(--ck-grad-orb)',
          border: '1px solid var(--ck-border-strong)'
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ck-white)' }}>{instructor}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ck-muted)' }}>{instructorRole || 'Instructor'}</span>
        </div>
        <a href={href} style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--ck-cyan)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'
        }}>Explore <span aria-hidden="true" style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--ck-dur-hover) var(--ck-ease-out)' }}>→</span></a>
      </div>
    </div>
  );
}
