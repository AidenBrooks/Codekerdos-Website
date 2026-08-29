import React from 'react';

export function Tag({ children, tone = 'cyan', style, ...rest }) {
  const tones = {
    cyan: { background: 'var(--ck-veil-cyan)', border: '1px solid var(--ck-border-strong)', color: 'var(--ck-cyan)' },
    neutral: { background: 'var(--ck-veil-white)', border: '1px solid var(--ck-border)', color: 'var(--ck-muted)' },
    ink: { background: 'var(--ck-veil-ink)', border: '1px solid rgba(11,15,26,0.10)', color: 'var(--ck-ink)' }
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--ck-space-1)',
      padding: '8px 16px', borderRadius: 'var(--ck-radius-pill)',
      font: 'var(--type-body)', fontSize: 13, fontWeight: 500,
      ...(tones[tone] || tones.cyan), ...style
    }} {...rest}>{children}</span>
  );
}
