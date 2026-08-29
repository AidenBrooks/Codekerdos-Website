const P = window.CK_DATA;

function Outcomes() {
  return (
    <section className="sec sec-tint" id="outcomes">
      <div className="wrap">
        <SectionHead dark eyebrow="Outcomes" title="They started where you are now" sub="Offers from Microsoft, OLA, Capgemini, MakeMyTrip and Tata Cliq — written up by the people who got them." />
        <div className="quotes">
          {P.testimonials.map((t, i) => (
            <figure key={i} className={'quote t-' + t.tint}>
              <blockquote>{t.quote}</blockquote>
              <figcaption><span className="avatar dark">{t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span><span><b>{t.name}</b><em>{t.outcome}</em></span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  return (
    <section className="sec sec-dark" id="mentors">
      <div className="wrap">
        <SectionHead eyebrow="Mentors" title="Taught by people still shipping in production" />
        <div className="mentors">
          {P.mentors.map(m => (
            <div className="mcard" key={m.name}>
              <span className="avatar lg">{m.name.replace('-', ' ').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}</span>
              <b>{m.name.replace('-', ' ')}</b><em>{m.role}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="sec sec-dark">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title="Seven steps from first call to first offer" />
        <ol className="steps">
          {P.journey.map((s, i) => (
            <li key={s.title}><span className="step-n">{String(i + 1).padStart(2, '0')}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="sec sec-dark" id="faq">
      <div className="wrap narrow">
        <SectionHead eyebrow="FAQs" title="Questions we get before every cohort" />
        <div className="faq">
          {P.faqs.map((f, i) => (
            <div className={'faq-item' + (open === i ? ' is-open' : '')} key={i}>
              <button onClick={() => setOpen(open === i ? -1 : i)}><span>{f.q.replace(/^\d+\.\s*/, '')}</span><i>{open === i ? '−' : '+'}</i></button>
              {open === i ? <p>{f.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta-band" id="cta">
      <div className="mesh sm" aria-hidden="true"><i className="orb o1"></i><i className="orb o2"></i></div>
      <div className="wrap narrow cta-in">
        <h2>Next cohort starts soon.<br />Find out if it fits you.</h2>
        <p>A 20-minute call: your background, a quick skill check, and an honest answer on which track to take — or whether to wait.</p>
        <div className="hero-actions center"><a href="#top" className="cta-primary">Book a free counseling call<span className="arrow">→</span></a><a href="#programs" className="cta-secondary">See all programs</a></div>
      </div>
    </section>
  );
}

function Foot() {
  const cols = [
    { t: 'Programs', l: ['DSA + System Design', 'DevOps & SRE', 'Generative AI', 'AI FDE Program', 'Cloud & DevOps'] },
    { t: 'Company', l: ['Overview', 'Masterclass', 'Testimonials', 'FAQs', 'Contact us'] },
    { t: 'Follow', l: ['LinkedIn', 'Instagram', 'YouTube', 'Facebook'] }
  ];
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div className="foot-brand"><span className="brand-mark">CK</span><p>Career-track engineering programs, taught live by working engineers.</p></div>
        {cols.map(c => <div className="foot-col" key={c.t}><h4>{c.t}</h4>{c.l.map(x => <a href="#top" key={x}>{x}</a>)}</div>)}
      </div>
      <div className="wrap foot-base"><span>© 2026 CodeKerdos</span><span>Privacy · Terms</span></div>
    </footer>
  );
}

Object.assign(window, { Outcomes, Mentors, Journey, Faq, Cta, Foot });
