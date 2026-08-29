import React from 'react';

export function Reveal({ children, delay = 0, style, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(24px)',
      transition: 'opacity var(--ck-dur-reveal) var(--ck-ease-out) ' + delay + 'ms, transform var(--ck-dur-reveal) var(--ck-ease-out) ' + delay + 'ms',
      ...style
    }} {...rest}>{children}</div>
  );
}
