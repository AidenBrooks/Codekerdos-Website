import React from 'react';
import { Button } from '../core/Button.jsx';

export function Footer({ logo, columns = [], style, ...rest }) {
  return (
    <footer style={{ background: 'var(--ck-void)', borderTop: '1px solid var(--ck-border)', ...style }} {...rest}>
      <div style={{
        maxWidth: 'var(--ck-container)', margin: '0 auto',
        padding: 'var(--ck-space-6) var(--ck-space-5) var(--ck-space-5)',
        display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 'var(--ck-space-5)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
          {logo ? <img src={logo} alt="CodeKerdos" style={{ height: 34, alignSelf: 'flex-start' }} /> :
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--ck-white)' }}>CodeKerdos</span>}
          <p style={{ margin: 0, font: 'var(--type-body)', color: 'var(--ck-muted)', maxWidth: 300 }}>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div style={{ display: 'flex', gap: 'var(--ck-space-2)' }}>
            <input placeholder="Enter your email" style={{
              flex: 1, minWidth: 0, padding: '12px 16px', borderRadius: 'var(--ck-radius-pill)',
              background: 'var(--ck-elevated)', border: '1px solid var(--ck-border)',
              color: 'var(--ck-white)', font: 'var(--type-body)', outline: 'none'
            }} />
            <Button size="sm">Submit</Button>
          </div>
        </div>
        {columns.map(col => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-3)' }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--ck-eyebrow-size)', fontWeight: 700,
              letterSpacing: 'var(--ck-eyebrow-track)', textTransform: 'uppercase', color: 'var(--ck-white)'
            }}>{col.title}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ck-space-2)' }}>
              {col.links.map(l => (
                <a key={l} href="#" style={{
                  font: 'var(--type-body)', color: 'var(--ck-muted)', textDecoration: 'none'
                }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 'var(--ck-container)', margin: '0 auto',
        padding: 'var(--ck-space-4) var(--ck-space-5)', borderTop: '1px solid var(--ck-border)',
        display: 'flex', justifyContent: 'space-between', gap: 'var(--ck-space-4)', flexWrap: 'wrap'
      }}>
        <span style={{ font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-muted)' }}>© 2025 Codekerdos. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 'var(--ck-space-4)' }}>
          <a href="#" style={{ font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-muted)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ font: 'var(--type-body)', fontSize: 13, color: 'var(--ck-muted)', textDecoration: 'none' }}>Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
