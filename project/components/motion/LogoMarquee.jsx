import React from 'react';

export function LogoMarquee({ names = [], speed = 28, style, ...rest }) {
  const row = names.concat(names);
  return (
    <div style={{
      overflow: 'hidden', position: 'relative',
      maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      ...style
    }} {...rest}>
      <div style={{
        display: 'flex', gap: 'var(--ck-space-6)', width: 'max-content',
        animation: 'ck-marquee ' + speed + 's linear infinite'
      }}>
        {row.map((n, i) => (
          <span key={n + i} style={{
            fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700,
            letterSpacing: '-0.4px', color: 'var(--ck-muted)', opacity: 0.7, whiteSpace: 'nowrap'
          }}>{n}</span>
        ))}
      </div>
    </div>
  );
}
