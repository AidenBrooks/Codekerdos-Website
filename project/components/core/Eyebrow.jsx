import React from 'react';

export function Eyebrow({ children, tone = 'cyan', style, ...rest }) {
  const colors = { cyan: 'var(--ck-cyan)', muted: 'var(--ck-muted)', ink: 'var(--ck-ink-muted)' };
  return (
    <div style={{
      fontFamily: 'var(--font-body)', fontWeight: 'var(--ck-eyebrow-weight)',
      fontSize: 'var(--ck-eyebrow-size)', letterSpacing: 'var(--ck-eyebrow-track)',
      textTransform: 'uppercase', color: colors[tone] || colors.cyan, ...style
    }} {...rest}>{children}</div>
  );
}
