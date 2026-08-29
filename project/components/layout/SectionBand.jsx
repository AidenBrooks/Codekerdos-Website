import React from 'react';

const tints = {
  void: 'var(--ck-void)',
  surface: 'var(--ck-surface)',
  cyan: 'var(--ck-tint-cyan)',
  teal: 'var(--ck-tint-teal)',
  orange: 'var(--ck-tint-orange)',
  neutral: 'var(--ck-tint-neutral)'
};

export function SectionBand({ tone = 'surface', bleed = false, children, style, ...rest }) {
  return (
    <section style={{ background: tints[tone] || tints.surface, position: 'relative', ...style }} {...rest}>
      {bleed ? <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(180deg, var(--ck-void) 0%, ' + (tints[tone] || tints.surface) + ' 100%)',
        pointerEvents: 'none'
      }} /> : null}
      <div style={{
        position: 'relative', maxWidth: 'var(--ck-container)', margin: '0 auto',
        padding: 'var(--ck-section-y) var(--ck-space-5)'
      }}>{children}</div>
    </section>
  );
}
