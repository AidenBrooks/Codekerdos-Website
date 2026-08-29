import React from 'react';

export function StepBadge({ n, active = false, style, ...rest }) {
  const label = String(n).padStart(2, '0');
  return (
    <div style={{
      width: 52, height: 52, borderRadius: 'var(--ck-radius-step)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px',
      background: active ? 'var(--ck-grad-orb)' : 'var(--ck-elevated)',
      border: active ? '1px solid transparent' : '1px solid var(--ck-border)',
      color: active ? 'var(--ck-white)' : 'var(--ck-muted)',
      boxShadow: active ? 'var(--ck-shadow-glow)' : 'none',
      transition: 'all var(--ck-dur-hover) var(--ck-ease-out)',
      flex: '0 0 auto', ...style
    }} {...rest}>{label}</div>
  );
}
