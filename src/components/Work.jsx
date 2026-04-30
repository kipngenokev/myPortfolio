import { projects, site } from '../data/site.js';
import Reveal from './Reveal.jsx';

function Project({ project, eager }) {
  const isExternal = /^https?:\/\//.test(project.href);
  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Reveal as="article" className={`project${project.feature ? ' project--feature' : ''}`}>
      <a
        href={project.href}
        className="project-link"
        aria-label={`${isExternal ? 'Visit' : 'View'} ${project.name}${
          isExternal ? ' (opens in a new tab)' : ' case study'
        }`}
        {...linkProps}
      >
        <div
          className={`project-thumb ${project.thumb}${project.image ? ' has-image' : ''}`}
          aria-hidden={project.image ? undefined : 'true'}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt || ''}
              className="thumb-image"
              width="1600"
              height="1000"
              loading={eager ? 'eager' : 'lazy'}
              fetchpriority={eager ? 'high' : 'auto'}
              decoding="async"
            />
          ) : (
            <span className="thumb-label">{project.label}</span>
          )}
          <span className="thumb-index">{project.index}</span>
        </div>
        <div className="project-body">
          <div className="project-meta">
            <span className="chip">{project.category}</span>
            {isExternal && <span className="chip chip-live">Live ↗</span>}
          </div>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
          <ul className="tag-list">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="link-cta">
            {isExternal ? 'Visit live site' : 'View case study'}{' '}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="section-label">Selected work</span>
          <h2 id="work-title" className="section-title">
            Recent <em>projects</em>
          </h2>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Project key={p.id} project={p} eager={i < 2} />
          ))}
        </div>

        <Reveal as="div" className="work-cta">
          <a
            href={site.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects on GitHub
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
