import { site } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

const socialLinks = [
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kipngeno-kevin/' },
  { name: 'github', label: 'GitHub', href: 'https://github.com/kipngenokev' },
  {
    name: 'email',
    label: 'Email',
    href: `mailto:${site.email}`,
  },
  {
    name: 'phone',
    label: 'Phone',
    href: `tel:${site.phone.replace(/\s+/g, '')}`,
  },
];

export default function Hero() {
  return (
    <section className="hero hero--centered" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-stack">
        <Reveal className="hero-avatar" aria-hidden="true">
          <span className="hero-avatar-mark">{site.initials}</span>
        </Reveal>

        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {site.status}
        </p>

        <h1 id="hero-title" className="hero-name">
          I'm <em>{site.firstName}.</em>
        </h1>
        <p className="hero-location">Based in {site.location}.</p>

        <p className="hero-intro">{site.heroIntro}</p>

        <ul className="hero-socials" aria-label="Get in touch">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                className="social-btn"
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon name={s.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="cta-row hero-cta">
          <a href="#work" className="btn btn-primary">
            View my work
            <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
}
