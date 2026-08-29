import React from 'react';

export function Accordion({ items = [], onTint = false, style, ...rest }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)', ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} style={{
            borderRadius: 'var(--ck-radius-card)',
            background: onTint ? 'rgba(255,255,255,0.7)' : 'var(--ck-elevated)',
            border: '1px solid ' + (onTint ? 'rgba(11,15,26,0.08)' : (isOpen ? 'var(--ck-border-strong)' : 'var(--ck-border)')),
            overflow: 'hidden', transition: 'border-color var(--ck-dur-hover) var(--ck-ease-out)'
          }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              appearance: 'none', width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '20px var(--ck-space-4)', display: 'flex', alignItems: 'center', gap: 'var(--ck-space-3)',
              textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
              color: onTint ? 'var(--ck-ink)' : 'var(--ck-white)'
            }}>
              <span style={{ flex: 1 }}>{it.q}</span>
              <span aria-hidden="true" style={{
                color: 'var(--ck-cyan)', fontSize: 20, lineHeight: 1,
                transform: isOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform var(--ck-dur-hover) var(--ck-ease-out)'
              }}>+</span>
            </button>
            {isOpen ? <div style={{
              padding: '0 var(--ck-space-4) 20px', font: 'var(--type-body)',
              color: onTint ? 'var(--ck-ink-muted)' : 'var(--ck-muted)', textWrap: 'pretty'
            }}>{it.a}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
