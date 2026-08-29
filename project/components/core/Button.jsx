import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', gap: 'var(--ck-space-2)',
  fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.1px',
  borderRadius: 'var(--ck-radius-pill)', cursor: 'pointer', border: 'none',
  textDecoration: 'none', whiteSpace: 'nowrap',
  transition: 'transform var(--ck-dur-hover) var(--ck-ease-out), box-shadow var(--ck-dur-hover) var(--ck-ease-out), background var(--ck-dur-hover) var(--ck-ease-out)'
};

const sizes = {
  sm: { fontSize: 13, padding: '9px 18px' },
  md: { fontSize: 15, padding: '13px 26px' },
  lg: { fontSize: 16, padding: '16px 34px' }
};

const variants = {
  primary: { background: 'var(--ck-grad-button)', color: 'var(--ck-white)', boxShadow: 'var(--ck-shadow-glow)' },
  secondary: { background: 'transparent', color: 'var(--ck-white)', boxShadow: 'inset 0 0 0 var(--ck-border-width-strong) var(--ck-outline)' },
  tertiary: { background: 'var(--ck-white)', color: 'var(--ck-ink)' },
  link: { background: 'transparent', color: 'var(--ck-cyan)', padding: 0, boxShadow: 'none' }
};

export function Button({ variant = 'primary', size = 'md', href, icon, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...(variant === 'link' ? { fontSize: sizes[size].fontSize } : sizes[size]),
    ...v,
    ...(hover && !disabled && variant === 'primary' ? { boxShadow: 'var(--ck-shadow-glow-strong)', transform: 'translateY(-2px)' } : null),
    ...(hover && !disabled && variant === 'secondary' ? { boxShadow: 'inset 0 0 0 var(--ck-border-width-strong) var(--ck-cyan)' } : null),
    ...(hover && !disabled && variant === 'tertiary' ? { transform: 'translateY(-2px)' } : null),
    ...(hover && !disabled && variant === 'link' ? { opacity: 0.75 } : null),
    ...(disabled ? { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' } : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} disabled={!href && disabled ? true : undefined} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
      {icon ? <span aria-hidden="true" style={{ fontSize: '1.05em', lineHeight: 1 }}>{icon}</span> : null}
    </Tag>
  );
}
