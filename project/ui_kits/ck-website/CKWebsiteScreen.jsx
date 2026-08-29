const { Reveal } = window.CodeKerdosDesignSystem_68bc71;
const D = window.CKW_DATA;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
  }, []);
  return reduced;
}

/* ---------------------------------------------------------------- icons */
const Ico = {
  arrow: (p) => <svg width={p?.w || 16} height={p?.w || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>,
  online: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="14" height="12" rx="2.5" /><path d="M16 11l6-3v8l-6-3z" /></svg>,
  handson: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 12l3 3 5-6" /></svg>,
  certificate: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="9" r="6" /><path d="M9 15l-1 7 4-2 4 2-1-7" /></svg>,
  list: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h10M4 18h7" /></svg>,
  check: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>,
  chevPrev: (p) => <svg width={p?.w || 18} height={p?.w || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p?.sw || 2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  chevNext: (p) => <svg width={p?.w || 18} height={p?.w || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p?.sw || 2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>,
  play: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  people: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="3" /><path d="M2 20c0-3.3 2.9-5.8 6.5-5.8s6.5 2.5 6.5 5.8" /><circle cx="17" cy="8.5" r="2.3" /><path d="M15.5 14.3c2.6.4 4.5 2.4 4.5 5.7" /></svg>,
  star: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.4L12 16.8 6 20l1.5-6.4-5-4.5 6.6-.6z" /></svg>,
  cap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4L3 8.5 12 13l9-4.5L12 4z" /><path d="M6 10.5V15c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></svg>,
  download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" /></svg>,
  smallArrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>,
  quoteMark: <svg className="t2-cmark" viewBox="0 0 32 24" fill="currentColor"><path d="M4 24c-1.6 0-2.9-.6-4-1.7C.3 21.1 0 19.6 0 17.8c0-2.6.8-5.2 2.4-7.8C4 7.4 6.1 5.2 8.7 3.5l2.4 3.6C9 8.2 7.5 9.6 6.4 11c-1.1 1.4-1.7 2.6-1.9 3.6.5-.2 1-.3 1.6-.3 1.6 0 2.9.5 3.9 1.6 1 1 1.5 2.3 1.5 3.9 0 1.6-.5 2.9-1.6 4-1 1.1-2.3 1.6-3.9 1.6zm18 0c-1.6 0-2.9-.6-4-1.7-1-1.2-1.6-2.6-1.6-4.5 0-2.6.8-5.2 2.4-7.8 1.6-2.6 3.7-4.8 6.3-6.5l2.4 3.6c-2.1 1.1-3.6 2.5-4.7 3.9-1.1 1.4-1.7 2.6-1.9 3.6.5-.2 1-.3 1.6-.3 1.6 0 2.9.5 3.9 1.6 1 1 1.5 2.3 1.5 3.9 0 1.6-.5 2.9-1.6 4-1 1.1-2.3 1.6-3.9 1.6z" /></svg>
};

const whyIcons = {
  live: <path d="M12 3a4 4 0 014 4v1a4 4 0 010 8v1a4 4 0 01-8 0v-1a4 4 0 010-8V7a4 4 0 014-4z" />,
  genai: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />,
  handson: <path d="M4 7h6v6H4zM14 11h6v6h-6zM10 10h4" />,
  cert: <path d="M12 3l8 4v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V7z" />,
  support: <path d="M12 4a8 8 0 108 8M12 12l5-4" />,
  mock: <path d="M4 6h16M4 12h10M4 18h7" />,
  afford: <path d="M12 2v20M6 8h9a3 3 0 010 6H7" />,
  doubt: <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM12 8v5l3 2" />,
  placement: <path d="M5 5h9l5 5v9H5zM14 5v5h5" />
};
function WhyIcon({ k }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{whyIcons[k]}</svg>;
}

const hofIcons = {
  cert: <path d="M12 3l8 4v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V7z" />,
  net: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18" />,
  curriculum: <path d="M4 5h7v14H4zM13 5h7v14h-7z" />,
  guidance: <path d="M4 5h16v11H9l-5 4z" />
};
const hofIconOrder = ['cert', 'net', 'curriculum', 'guidance'];
function HofIcon({ k }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{hofIcons[k]}</svg>;
}

/* ---------------------------------------------------------------- nav */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('overview');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    addEventListener('scroll', onScroll, { passive: true });
    const ids = ['overview', 'courses', 'testimonials', 'faqs'];
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    }), { rootMargin: '-42% 0px -52% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
    return () => { removeEventListener('scroll', onScroll); spy.disconnect(); };
  }, []);
  const go = (e, l) => {
    if (l.id) {
      e.preventDefault();
      const el = document.getElementById(l.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a className="brand" href="#overview" onClick={e => go(e, { id: 'overview' })}><img src="./codekerdos-logo.png" alt="CodeKerdos" /></a>
      <div className="nav-links">
        {D.nav.map(l => (
          <a key={l.label} className={active === l.id ? 'on' : ''} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined} onClick={e => go(e, l)}>{l.label}</a>
        ))}
      </div>
      <div className="nav-act"><a className="btn-solid" href="https://codekerdos.in/login" target="_blank" rel="noreferrer">Login{Ico.arrow({ w: 15 })}</a></div>
    </nav>
  );
}

/* ---------------------------------------------------------------- hero */
function Hero() {
  const h = D.hero;
  return (
    <section className="hero" id="overview" data-screen-label="Hero">
      <div className="figure"><img src="./character-cutout.png" alt="CodeKerdos learner with a laptop" /></div>
      <div className="panel">
        <span className="eyebrow">{h.eyebrowPre}<b>{h.eyebrowStrong}</b>{h.eyebrowPost}</span>
        <h1>
          {h.headline.map((line, i) => (
            <span key={line}><i className={i === h.headlineGradIndex ? 'grad' : ''}>{line}</i></span>
          ))}
        </h1>
        <p className="lede">{h.lede}</p>
        <div className="actions">
          <a className="btn primary" href="#">{h.primaryCta}{Ico.arrow({ w: 16 })}</a>
          <a className="btn plain" href="#">{h.secondaryCta}</a>
        </div>
        <div className="meta">
          <span>{Ico.online}{h.meta[0]}</span>
          <span>{Ico.handson}{h.meta[1]}</span>
          <span>{Ico.certificate}{h.meta[2]}</span>
        </div>
        <div className="trust">
          <em>Trusted by</em>
          <div className="avs">
            {h.avatars.map(a => <span key={a.label} style={{ background: a.bg }}>{a.label}</span>)}
            <span>{h.trustCount}</span>
          </div>
        </div>
      </div>
      <div className="disc">
        <svg className="ring" viewBox="0 0 104 104">
          <defs><path id="ckw-disc-path" d="M52 52 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" /></defs>
          <text><textPath href="#ckw-disc-path" startOffset="0%">{h.disc}</textPath></text>
        </svg>
        <span className="dots">{Array.from({ length: 9 }).map((_, i) => <i key={i} />)}</span>
      </div>
      <div className="card">
        <div className="card-who"><span className="av">{h.card.avatar}</span><span><em>{h.card.handle}</em><b>{h.card.role}</b></span></div>
        {h.card.rows.map((r, i) => (
          <div className="row" key={i}>
            <span className="ico">{i === 0 ? Ico.list : Ico.check}</span>
            <span>{typeof r === 'string' ? r : <React.Fragment><b>{r.bold}</b>{r.rest}</React.Fragment>}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- partners */
function Partners() {
  const row = D.partners.concat(D.partners);
  return (
    <section className="partners" data-screen-label="Hiring partners">
      <div className="p-head"><h2>Where CodeKerdos learners land</h2><p>Hover a row to hold it.</p></div>
      <div className="rows">
        <div className="marq"><div className="track">
          {row.map((p, i) => <span className="lg" key={i} style={{ '--c': p.color }}><b style={p.tracked ? { letterSpacing: '2.5px' } : undefined}>{p.name}</b></span>)}
        </div></div>
        <div className="marq"><div className="track rev">
          {row.slice().reverse().map((p, i) => <span className="lg" key={i} style={{ '--c': p.color }}><b style={p.tracked ? { letterSpacing: '2.5px' } : undefined}>{p.name}</b></span>)}
        </div></div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- placement film */
function PlacementFilm() {
  const f = D.placementFilm;
  return (
    <section className="sec film" data-screen-label="Placement film">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Placement story</span><h2>Real learners, <span className="grad">real offers</span></h2></div></Reveal>
        <div className="reel"><div className="reel-in">
          <span className="reel-cy" /><span className="reel-dots" /><span className="reel-logo">C<b>K</b></span>
          <div className="reel-face"><em>learner photo</em></div>
          <div className="reel-copy">
            <div className="placed">PLACED</div>
            <div className="reel-at"><span className="at">AT</span>
              <span className="reel-sq"><b style={{ background: '#F25022' }} /><b style={{ background: '#7FBA00' }} /><b style={{ background: '#00A4EF' }} /><b style={{ background: '#FFB900' }} /></span>
              <span className="co">{f.company}</span>
            </div>
            <div className="reel-name">{f.name}</div>
            <div className="reel-thanks">Thanks to <b>{f.thanksTo}</b></div>
          </div>
          <button className="play" aria-label="Play placement story"><i /></button>
        </div></div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- hall of fame */
function HallOfFame() {
  const [active, setActive] = React.useState(0);
  const stageRef = React.useRef(null);
  const frameRefs = React.useRef([]);
  React.useEffect(() => {
    const stage = stageRef.current, el = frameRefs.current[active];
    if (stage && el) stage.scrollTo({ left: Math.max(0, el.offsetLeft - 40), behavior: 'smooth' });
  }, [active]);
  return (
    <section className="sec hof" data-screen-label="Hall of Fame">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Hall of Fame</span><h2>Meet the <span className="grad">achievers</span></h2><p>Meet the achievers who have excelled in their learning journey with CodeKerdos. Their success inspires thousands of learners every day.</p></div></Reveal>
        <div className="hof-perks">
          {D.hofPerks.map((p, i) => (
            <div className="hof-perk" key={p.title}><span className="hof-i"><HofIcon k={hofIconOrder[i]} /></span><b>{p.title}</b><em>{p.body}</em></div>
          ))}
        </div>
        <div className="hof-stage" ref={stageRef}>
          {D.hallOfFame.map((a, i) => {
            const on = i === active;
            return (
              <article key={a.name} ref={el => frameRefs.current[i] = el} className={'hof-frame' + (on ? ' on' : '')}
                tabIndex={0} role="button" aria-label={a.name} onClick={() => setActive(i)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}>
                <div className="hof-photo">
                  <div className="hof-ph"><img src={a.photo} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
                  <div className="hof-shade" />
                  <div className="hof-tag"><span>{a.name}</span></div>
                </div>
                <div className="hof-quote"><i>&ldquo;</i><h3>{a.quote}</h3><h4>Outcome:</h4><p>{a.outcome}</p>
                  <footer><b>{a.name}</b><em>{a.role}</em></footer>
                </div>
              </article>
            );
          })}
        </div>
        <div className="hof-nav"><div className="hof-dots">
          {D.hallOfFame.map((a, i) => <i key={a.name} className={i === active ? 'on' : ''} onClick={() => setActive(i)} />)}
        </div></div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- why choose us */
const whyGridPositions = [
  { gridColumn: '1/3', gridRow: '1/3' },
  { gridColumn: '3/5', gridRow: '1/2' },
  { gridColumn: '3/4', gridRow: '2/3' },
  { gridColumn: '4/5', gridRow: '2/3' },
  { gridColumn: '1/2', gridRow: '3/5' },
  { gridColumn: '2/3', gridRow: '3/4' },
  { gridColumn: '3/5', gridRow: '3/4' },
  { gridColumn: '2/3', gridRow: '4/5' },
  { gridColumn: '3/5', gridRow: '4/5' }
];

function WhyCard({ c, i }) {
  const ref = React.useRef(null);
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    ref.current.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };
  const cls = 'wc' + (c.size === 'featured' ? ' wc-featured' : c.size === 'wide' ? ' wc-wide' : c.size === 'tall' ? ' wc-tall' : '');
  const inner = (
    <React.Fragment>
      <span className="wc-n">{c.n}</span>
      <span className="wc-i"><WhyIcon k={c.icon} /></span>
      {c.size === 'featured' || c.size === 'wide' ? (
        <div className="wc-body">
          <h3>{c.title}{c.live ? <em className="live"><i />LIVE</em> : null}</h3>
          <p>{c.body}</p>
          {c.stat ? <span className="wc-stat"><b>{c.stat.b}</b>{c.stat.rest}</span> : null}
        </div>
      ) : (
        <React.Fragment>
          <h3>{c.title}{c.live ? <em className="live"><i />LIVE</em> : null}</h3>
          <p>{c.body}</p>
          {c.stat ? <span className="wc-stat"><b>{c.stat.b}</b>{c.stat.rest}</span> : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
  return <article ref={ref} className={cls} style={whyGridPositions[i]} onMouseMove={onMove}>{inner}</article>;
}

function WhySection() {
  const perkRow = D.perksStrip.concat(D.perksStrip);
  return (
    <section className="sec why" data-screen-label="Why choose us">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Why CodeKerdos</span><h2>Why you <span className="grad">should choose us?</span></h2><p>Here are just a few reasons why students choose our courses.</p></div></Reveal>
        <div className="why-grid">
          {D.whyCards.map((c, i) => <Reveal key={c.n} delay={i * 60}><WhyCard c={c} i={i} /></Reveal>)}
        </div>
        <div className="perks"><div className="track">
          {perkRow.map((p, i) => <span className="perk" key={i}>{p}</span>)}
        </div></div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- courses */
function CourseCardCk({ c, reduced }) {
  const ref = React.useRef(null);
  const onMove = e => {
    if (reduced) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    ref.current.style.setProperty('--mx', px * 100 + '%');
    ref.current.style.setProperty('--my', py * 100 + '%');
    ref.current.style.setProperty('--rx', ((0.5 - py) * 8) + 'deg');
    ref.current.style.setProperty('--ry', ((px - 0.5) * 8) + 'deg');
  };
  const onEnter = () => { if (!reduced) ref.current.style.setProperty('--ty', '-7px'); };
  const onLeave = () => { if (!reduced) { ref.current.style.setProperty('--ty', '0px'); ref.current.style.setProperty('--rx', '0deg'); ref.current.style.setProperty('--ry', '0deg'); } };
  return (
    <article className="cc" ref={ref} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="cc-photo"><img src={c.photo} alt={c.instructor} />
        <span className="cc-dur">{Ico.clock}{c.duration}</span>
      </div>
      <div className="cc-body">
        <div className="cc-row1">
          <span className="cc-learn">{Ico.people}{c.learners}</span>
          <span className="cc-rate">{Ico.star}{c.rating} <em>({c.ratingCount})</em></span>
        </div>
        <h3>{c.title}</h3>
        <p>{c.description}</p>
        <div className="cc-tags">{c.tags.map(t => <span key={t}>{t}</span>)}</div>
        <div className="cc-inst">
          <span className="cc-cap">{Ico.cap}</span>
          <div><b>{c.instructor}<i className="cc-li">in</i></b><span>Instructor</span></div>
        </div>
        <div className="cc-btns">
          <a className="cc-brochure" href="#">{Ico.download}Brochure</a>
          <a className="cc-explore" href={c.href} target="_blank" rel="noreferrer">Explore{Ico.smallArrow}</a>
        </div>
      </div>
    </article>
  );
}

function CoursesSection() {
  const reduced = usePrefersReducedMotion();
  return (
    <section className="sec courses" id="courses" data-screen-label="Featured courses">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Featured courses</span><h2>Programs built for <span className="grad">real outcomes</span></h2><p>Live cohorts, production-grade projects and mentors working at top tech firms.</p></div></Reveal>
        <div className="cgrid">
          {D.courses.map((c, i) => <Reveal key={c.title} delay={(i % 4) * 70}><CourseCardCk c={c} reduced={reduced} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- projects */
function ProjectsSection() {
  return (
    <section className="sec projects" data-screen-label="Projects">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Build &amp; ship</span><h2>15 real-world <span className="grad">DevOps projects</span></h2><p>From a hand-wired Linux stack to a full SRE observability platform - projects you build, break and fix like production.</p></div></Reveal>
        <div className="pgrid">
          {D.projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 60}>
              <article className="pj">
                <div className="pj-stack">
                  <div className="pj-back pj-back2" /><div className="pj-back pj-back1" />
                  <div className="pj-shot"><img src={p.img} alt={p.title + ' screenshot'} /></div>
                  <span className="pj-tag">{p.tag}</span>
                </div>
                <div className="pj-body">
                  <span className="pj-n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="pj-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="pj-foot"><a className="pj-explore" href="#">Explore{Ico.smallArrow}</a></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- testimonials */
function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const n = D.testimonials.length;
  const posFor = i => { const off = (i - active + n) % n; return off === 0 ? 'active' : off === 1 ? 'next' : 'far'; };
  const next = () => setActive(a => (a + 1) % n);
  const prev = () => setActive(a => (a - 1 + n) % n);
  return (
    <section className="sec testimonials" id="testimonials" data-screen-label="Testimonials">
      <div className="wrap">
        <Reveal><div className="test-head"><span className="test-pill"><i />Testimonials</span><h2>Where dreams <span className="grad">meet results</span></h2><p>Hear the voices of our alumni who&rsquo;ve made their mark.</p></div></Reveal>
        <div className="t2-panel">
          <div className="t2-stage">
            <button className="t2-arrow t2-prev" aria-label="Previous testimonial" onClick={prev}>{Ico.chevPrev({ w: 16, sw: 2.4 })}</button>
            <div className="t2-stack"><div className="t2-deck" onClick={next}>
              {D.testimonials.map((t, i) => (
                t.video ? (
                  <article key={t.id} className="t2-card t2-video" data-pos={posFor(i)}>
                    <img src={t.photo} alt={t.title} /><span className="t2-play">{Ico.play}</span>
                    <span className="t2-logo"><img src="./codekerdos-logo.png" alt="CodeKerdos" /></span>
                    <h3>{t.title}</h3>
                  </article>
                ) : (
                  <article key={t.id} className="t2-card" data-pos={posFor(i)}>
                    {Ico.quoteMark}
                    <p className="t2-quote">{t.quote}</p>
                    <div className="t2-who"><span className="t2-av" /><div><b>{t.name}</b><span>{t.role}</span></div></div>
                  </article>
                )
              ))}
            </div></div>
            <button className="t2-arrow t2-next" aria-label="Next testimonial" onClick={next}>{Ico.chevNext({ w: 16, sw: 2.4 })}</button>
          </div>
          <div className="t2-dots">
            {D.testimonials.map((t, i) => <i key={t.id} className={i === active ? 'on' : ''} onClick={() => setActive(i)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- journey */
function JourneySection() {
  const n = D.journey.length;
  const [index, setIndex] = React.useState(0);
  const [pos, setPos] = React.useState(0);
  const animRef = React.useRef(null);
  const isMobile = typeof matchMedia !== 'undefined' && matchMedia('(max-width:760px)').matches;
  const R = isMobile ? 110 : 300, ANGLE = 19;

  const goTo = target => {
    if (target < 0 || target > n - 1 || target === index) return;
    if (animRef.current) cancelAnimationFrame(animRef.current.raf);
    const start = pos, t0 = performance.now(), dur = 650;
    const frame = now => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setPos(start + (target - start) * eased);
      if (t < 1) { animRef.current = { raf: requestAnimationFrame(frame) }; }
      else { setIndex(target); }
    };
    animRef.current = { raf: requestAnimationFrame(frame) };
  };

  const active = D.journey[index];
  return (
    <section className="sec journey" data-screen-label="Learning journey">
      <div className="wrap"><Reveal><div className="sec-head" style={{ marginBottom: 0 }}><span className="kick">The journey</span><h2>Your learning journey <span className="grad">with CodeKerdos</span></h2></div></Reveal></div>
      <div className="j2-sticky">
        <div className="j2-dial-wrap">
          <div className="j2-circle" />
          {D.journey.map((s, i) => {
            const off = i - pos, ang = off * ANGLE, rad = ang * Math.PI / 180;
            const x = R * Math.cos(rad), y = R * Math.sin(rad);
            const abs = Math.abs(off);
            const sc = Math.max(0.55, 1 - abs * 0.16);
            const op = Math.max(0, 1 - abs / 3.4);
            const t = Math.min(1, abs / 2.2);
            const ch = (a, b) => Math.round(a + (b - a) * t);
            const isActive = abs < 0.5;
            return (
              <button key={s.title} type="button" className="j2-item" onClick={() => goTo(i)}
                style={{ transform: 'translate(' + x + 'px,' + y + 'px) rotate(' + ang + 'deg) scale(' + sc + ')', opacity: op }}>
                <i className="j2-dot" style={{ background: isActive ? 'rgb(11,15,26)' : 'rgba(11,15,26,.22)', width: isActive ? 10 : 7, height: isActive ? 10 : 7 }} />
                <b className="j2-num" style={{ color: 'rgb(' + ch(11, 205) + ',' + ch(15, 208) + ',' + ch(26, 214) + ')', fontSize: (isMobile ? 40 : 64) - (isMobile ? 18 : 30) * Math.min(1, abs / 2) }}>{String(i + 1).padStart(2, '0')}</b>
              </button>
            );
          })}
        </div>
        <div className="j2-panel"><h3>{active.title}</h3><p>{active.body}</p></div>
      </div>
      <div className="j2-progress-row">
        <button className="mcf-arrow j2-prev" aria-label="Previous step" onClick={() => goTo(index - 1)}>{Ico.chevPrev({ w: 18 })}</button>
        <div className="j2-progress">{D.journey.map((s, i) => <i key={s.title} className={i === index ? 'on' : ''} onClick={() => goTo(i)} />)}</div>
        <button className="mcf-arrow j2-next" aria-label="Next step" onClick={() => goTo(index + 1)}>{Ico.chevNext({ w: 18 })}</button>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- mentors */
function MentorsSection() {
  const cards = D.mentors;
  const n = cards.length;
  const [active, setActive] = React.useState(Math.floor(n / 2));
  const stageRef = React.useRef(null);
  const wheelLock = React.useRef(false);
  const onWheel = e => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 4) return;
    e.preventDefault();
    if (wheelLock.current) return;
    wheelLock.current = true;
    setActive(a => delta > 0 ? Math.min(n - 1, a + 1) : Math.max(0, a - 1));
    setTimeout(() => { wheelLock.current = false; }, 420);
  };
  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <section className="sec mentors" data-screen-label="Mentors">
      <div className="wrap">
        <Reveal><div className="sec-head"><span className="kick">Guided by experts</span><h2>Mentors from <span className="grad">FAANG &amp; top tech</span></h2><p>Personalized mentorship to accelerate your learning and career growth.</p></div></Reveal>
        <div className="mcf">
          <button className="mcf-arrow mcf-prev" aria-label="Previous mentor" disabled={active === 0} onClick={() => setActive(a => Math.max(0, a - 1))}>{Ico.chevPrev({ w: 18 })}</button>
          <div className="mcf-stage" ref={stageRef}>
            {cards.map((m, i) => {
              const off = i - active, abs = Math.abs(off);
              const style = {
                '--tx': (off * 208) + 'px',
                '--rot': Math.max(-26, Math.min(26, off * -11)) + 'deg',
                '--sc': Math.max(0.64, 1 - abs * 0.15),
                '--op': abs > 3 ? 0 : Math.max(0, 1 - abs * 0.32),
                '--bl': Math.min(3, abs * 1.2) + 'px',
                zIndex: 100 - abs
              };
              return (
                <article key={m.name} className="mcard" style={style} onClick={() => setActive(i)}>
                  <div className="mcard-bg"><img src={m.photo} alt={m.name} /></div>
                  <span className="mcard-li">in</span>
                  <div className="mcard-shade" />
                  <div className="mcard-tag"><b>{m.name}</b><em>{m.role}</em></div>
                </article>
              );
            })}
          </div>
          <button className="mcf-arrow mcf-next" aria-label="Next mentor" disabled={active === n - 1} onClick={() => setActive(a => Math.min(n - 1, a + 1))}>{Ico.chevNext({ w: 18 })}</button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- faqs + cta */
function FaqsSection() {
  return (
    <section className="sec faqs" id="faqs" data-screen-label="FAQs">
      <div className="wrap">
        <div className="faq-grid">
          <Reveal><div className="sec-head"><span className="kick">FAQs</span><h2>Questions, <span className="grad">answered</span></h2><p>Whether you&rsquo;re curious about how to get started or need assistance, we&rsquo;ve got you covered.</p></div></Reveal>
          <div className="fqs">
            {D.faqs.map(f => (
              <details className="fq" key={f.q} open={f.open || undefined}>
                <summary>{f.q}<i /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const c = D.cta;
  return (
    <section className="band" data-screen-label="Counselling CTA">
      <h2>{c.title}</h2>
      <p>{c.sub}</p>
      <div className="actions">
        <a className="btn primary" href={c.href} target="_blank" rel="noreferrer">{c.action}{Ico.arrow({ w: 16 })}</a>
        <a className="btn plain" href={'tel:' + c.phone.replace(/\s/g, '')}>{c.phone}</a>
      </div>
    </section>
  );
}

function FooterCk() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <img src="./codekerdos-logo.png" alt="CodeKerdos" />
        <nav className="foot-links">{D.footerLinks.map(l => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</nav>
        <small>&copy; 2025 CodeKerdos</small>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- screen */
function CKWebsiteScreen() {
  return (
    <div className="ckw">
      <Nav />
      <Hero />
      <Partners />
      <PlacementFilm />
      <HallOfFame />
      <WhySection />
      <CoursesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <JourneySection />
      <MentorsSection />
      <FaqsSection />
      <CtaSection />
      <FooterCk />
    </div>
  );
}

Object.assign(window, { CKWebsiteScreen });
