import React from 'react';
import { Button } from '../core/Button.jsx';

export function NavBar({ logo, links = [], onNavigate, active, style, ...rest }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(0,0,0,0.72)', backdropFilter: 'var(--ck-blur-nav)',
      WebkitBackdropFilter: 'var(--ck-blur-nav)',
      borderBottom: '1px solid var(--ck-border)', ...style
    }} {...rest}>
      <nav style={{
        maxWidth: 'var(--ck-container)', margin: '0 auto',
        padding: '14px var(--ck-space-5)', display: 'flex', alignItems: 'center', gap: 'var(--ck-space-5)'
      }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate('home'); }} style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
          {logo ? <img src={logo} alt="CodeKerdos" style={{ height: 30, display: 'block' }} /> :
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.6px', color: 'var(--ck-white)' }}>CodeKerdos</span>}
        </a>
        <div style={{ display: 'flex', gap: 'var(--ck-space-4)', flex: 1, justifyContent: 'center' }}>
          {links.map(l => (
            <a key={l.label} href={l.href || '#'} onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(l.id || l.label); } }} style={{
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
              color: active === (l.id || l.label) ? 'var(--ck-cyan)' : 'var(--ck-muted)',
              transition: 'color var(--ck-dur-hover) var(--ck-ease-out)', whiteSpace: 'nowrap'
            }}>{l.label}</a>
          ))}
        </div>
        <Button size="sm" variant="secondary">Login</Button>
      </nav>
    </header>
  );
}
