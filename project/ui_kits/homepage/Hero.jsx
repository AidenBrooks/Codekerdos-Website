const D = window.CK_DATA;

function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className="nav" data-solid={solid ? '1' : '0'}>
      <div className="nav-in">
        <a href="#top" className="brand"><span className="brand-mark">CK</span><span className="brand-word">CodeKerdos</span></a>
        <nav className="nav-links">
          <a href="#programs">Programs</a><a href="#why">Why us</a><a href="#outcomes">Outcomes</a><a href="#mentors">Mentors</a><a href="#faq">FAQs</a>
        </nav>
        <div className="nav-cta">
          <a href="#programs" className="ghost-btn">Browse courses</a>
          <a href="#cta" className="pill-btn">Book a free call</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="mesh" aria-hidden="true"><i className="orb o1"></i><i className="orb o2"></i><i className="orb o3"></i></div>
      <div className="grid-lines" aria-hidden="true"></div>
      <div className="hero-in">
        <div className="hero-badge"><span className="dot"></span>Live cohorts · Gen AI infused curriculum</div>
        <h1 className="hero-h1">Learn the way<br /><em>engineers</em> actually work.</h1>
        <p className="hero-sub">Live classes with senior engineers from Amazon, Oracle, Walmart and Visa. Real projects, 1:1 mentorship, mock interviews, and placement assistance — for freshers and working professionals alike.</p>
        <div className="hero-actions">
          <a href="#programs" className="cta-primary">Explore programs<span className="arrow">→</span></a>
          <a href="#cta" className="cta-secondary">Talk to a counselor</a>
        </div>
        <div className="hero-stats">
          <Stat n="10K+" l="Learners mentored" /><Stat n="9" l="Career-track programs" /><Stat n="4.9" l="Average course rating" /><Stat n="15+" l="Deployable projects" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return <div className="hstat"><b>{n}</b><span>{l}</span></div>;
}

function Marquee() {
  const row = [...D.partners, ...D.partners];
  return (
    <section className="marquee-wrap" aria-label="Where our learners work">
      <p className="marquee-label">Our learners now build at</p>
      <div className="marquee"><div className="marquee-track">{row.map((p, i) => <span key={i} className="logo-chip">{p}</span>)}</div></div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee });
