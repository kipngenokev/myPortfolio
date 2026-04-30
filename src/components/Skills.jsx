import { skillCategories, skillGroups, skillsIntro } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section className="skills section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="section-label">Skills</span>
          <h2 id="skills-title" className="section-title">
            What I <em>bring</em>
          </h2>
          <p className="section-intro">{skillsIntro}</p>
        </Reveal>

        <ul className="skill-categories" aria-label="Skill categories">
          {skillCategories.map((c) => (
            <Reveal as="li" key={c.num} className="skill-category">
              <span className="skill-category-num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </ul>

        <div className="skill-stack" aria-label="Tools and technologies">
          {skillGroups.map((group) => (
            <Reveal as="div" key={group.title} className="skill-stack-group">
              <h3 className="skill-stack-title">{group.title}</h3>
              <ul className="skill-stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
