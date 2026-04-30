import { stats } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function Why() {
  return (
    <section className="why section" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <Reveal>
          <span className="section-label">Why work with me</span>
          <h2 id="why-title" className="section-title">
            Reliable. Considered.
            <br />
            <em>And actually shipped.</em>
          </h2>
          <p className="why-copy">
            You don't need another generic agency template. You need someone
            who'll listen, sketch, build, and ship — without the back-and-forth.
            I work with one client at a time so your project gets full focus
            from start to launch.
          </p>
        </Reveal>

        <ul className="stats" aria-label="Track record">
          {stats.map((s) => (
            <Reveal as="li" key={s.label}>
              <span className="stat-num">
                {s.num}
                <span className="stat-sup">{s.sup}</span>
              </span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
