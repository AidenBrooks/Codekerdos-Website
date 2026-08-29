import React from 'react';

export function StatTile({ value, label, onTint = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)',
      padding: 'var(--ck-space-4)', borderRadius: 'var(--ck-radius-card)',
      background: onTint ? 'rgba(255,255,255,0.6)' : 'var(--ck-elevated)',
      border: onTint ? '1px solid rgba(11,15,26,0.08)' : '1px solid var(--ck-border)',
      ...style
    }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 1,
        letterSpacing: '-1.2px',
        background: 'var(--ck-grad-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'var(--ck-cyan)'
      }}>{value}</span>
      <span style={{ font: 'var(--type-body)', color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)' }}>{label}</span>
    </div>
  );
}
