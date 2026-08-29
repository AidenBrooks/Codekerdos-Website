const DD = window.CK_DATA;

function SectionHead({ eyebrow, title, sub, dark }) {
  return (
    <div className={'sec-head' + (dark ? ' on-tint' : '')}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="sec-title">{title}</h2>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </div>
  );
}

const SPANS = ['b-wide', 'b-tall', '', '', 'b-wide', '', '', '', 'b-wide'];

function Why() {
  return (
    <section className="sec sec-dark" id="why">
      <div className="wrap">
        <SectionHead eyebrow="Why CodeKerdos" title="Nine reasons people stay until they get the offer" sub="Every program runs on the same spine: live teaching, AI-era tooling, and support that does not stop at the last class." />
        <div className="bento">
          {DD.reasons.map((r, i) => (
            <article key={r.n} className={'bento-card ' + SPANS[i]}>
              <div className="bento-top"><span className="num">{String(r.n).padStart(2, '0')}</span>{r.live ? <span className="live"><i></i>Live</span> : null}</div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const rail = React.useRef(null);
  const nudge = d => rail.current && rail.current.scrollBy({ left: d * 400, behavior: 'smooth' });
  return (
    <section className="sec sec-dark" id="programs">
      <div className="wrap">
        <div className="rail-head">
          <SectionHead eyebrow="Programs" title="Pick the track that matches where you are" />
          <div className="rail-nav"><button onClick={() => nudge(-1)} aria-label="Previous">←</button><button onClick={() => nudge(1)} aria-label="Next">→</button></div>
        </div>
      </div>
      <div className="rail" ref={rail}>
        <div className="rail-pad"></div>
        {DD.courses.map(c => (
          <article key={c.slug} className="course">
            <div className="course-meta"><span className="rating">★ {c.rating}</span><span className="sep">·</span><span>{c.ratingCount} ratings</span><span className="sep">·</span><span>{c.duration}</span></div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className="tags">{c.tags.map(t => <span key={t}>{t}</span>)}</div>
            <div className="course-foot">
              <div className="mentor"><span className="avatar">{c.instructor.split(' ').map(w => w[0]).slice(0, 2).join('')}</span><span><b>{c.instructor}</b><em>{c.instructorRole}</em></span></div>
              <span className="learners">{c.learners} enrolled</span>
            </div>
            <a href="#cta" className="course-link">View curriculum →</a>
          </article>
        ))}
        <div className="rail-pad"></div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="sec sec-dark">
      <div className="wrap narrow">
        <SectionHead eyebrow="The difference" title="CodeKerdos vs. the usual upskilling course" />
        <div className="cmp">
          <div className="cmp-head"><span></span><b className="ours">CodeKerdos</b><b className="theirs">Typical platform</b></div>
          {DD.comparison.map(r => (
            <div className="cmp-row" key={r.label}>
              <span className="cmp-label">{r.label}</span>
              <span className="cmp-ours"><i className="tick">✓</i>{r.ours}</span>
              <span className="cmp-theirs">{r.theirs}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionHead, Why, Programs, Compare });
