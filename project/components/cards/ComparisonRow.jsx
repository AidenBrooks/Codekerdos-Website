import React from 'react';

export function ComparisonRow({ label, ours, theirs, style, ...rest }) {
  const cell = { font: 'var(--type-body)', display: 'flex', alignItems: 'center', gap: 'var(--ck-space-2)' };
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 'var(--ck-space-4)',
      alignItems: 'center', padding: '20px var(--ck-space-4)',
      borderRadius: 'var(--ck-radius-card)', background: 'var(--ck-elevated)',
      border: '1px solid var(--ck-border)', ...style
    }} {...rest}>
      <div style={{ ...cell, fontWeight: 600, color: 'var(--ck-white)', fontSize: 15 }}>{label}</div>
      <div style={{ ...cell, color: 'var(--ck-white)', fontWeight: 500 }}>
        <span aria-hidden="true" style={{
          width: 20, height: 20, borderRadius: 999, flex: '0 0 auto',
          background: 'var(--ck-success)', color: 'var(--ck-success-ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700
        }}>✓</span>
        {ours}
      </div>
      <div style={{ ...cell, color: 'var(--ck-muted)' }}>{theirs}</div>
    </div>
  );
}
