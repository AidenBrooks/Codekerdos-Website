import React from 'react';

export function StatusPill({ children = 'LIVE', style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 'var(--ck-radius-pill)',
      background: 'var(--ck-success)', color: 'var(--ck-success-ink)',
      fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
      letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase',
      ...style
    }} {...rest}>
      <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--ck-success-ink)' }} />
      {children}
    </span>
  );
}
