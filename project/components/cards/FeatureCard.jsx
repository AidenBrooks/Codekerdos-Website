import React from 'react';
import { StepBadge } from '../core/StepBadge.jsx';
import { StatusPill } from '../core/StatusPill.jsx';

export function FeatureCard({ n, title, body, live = false, active = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)',
      padding: 'var(--ck-card-padding)', borderRadius: 'var(--ck-radius-card)',
      background: 'var(--ck-elevated)',
      border: '1px solid ' + (active || hover ? 'var(--ck-border-strong)' : 'var(--ck-border)'),
      transform: hover ? 'translateY(var(--ck-lift))' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)', ...style
    }} {...rest}>
      <StepBadge n={n} active={active || hover} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ck-space-2)', flexWrap: 'wrap' }}>
        <h4 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 'var(--ck-h4-size)', color: 'var(--ck-white)'
        }}>{title}</h4>
        {live ? <StatusPill>Live</StatusPill> : null}
      </div>
      <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)', textWrap: 'pretty' }}>{body}</p>
    </div>
  );
}
