import React from 'react';

export function GlowOrb({ size = 380, children, style, ...rest }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: '0 0 auto', ...style }} {...rest}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-30%', background: 'var(--ck-glow-radial)',
        animation: 'ck-glow-pulse var(--ck-dur-pulse) var(--ck-ease-in-out) infinite',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'var(--ck-radius-orb)',
        background: 'var(--ck-grad-orb)', border: '1px solid var(--ck-border-strong)',
        overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>{children}</div>
    </div>
  );
}
