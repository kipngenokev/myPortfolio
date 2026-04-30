import { principles } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function Approach() {
  return (
    <section
      className="approach section"
      id="approach"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="section-label">Approach</span>
          <h2 id="approach-title" className="section-title">
            How I <em>build</em>
          </h2>
          <p className="section-intro">
            Every product I ship has to earn its keep — for users, for the
            business, and for the team that inherits it. Here's how I think
            about getting there.
          </p>
        </Reveal>

        <ol className="principles">
          {principles.map((p) => (
            <Reveal as="li" key={p.num} className="principle">
              <span className="principle-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
