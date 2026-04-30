import { useEffect, useState } from 'react';
import useScrolled from '../hooks/useScrolled.js';
import useActiveSection from '../hooks/useActiveSection.js';
import useBodyLock from '../hooks/useBodyLock.js';
import { nav, site } from '../data/site.js';
import Icon from './Icon.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
  const scrolled = useScrolled(24);
  const activeId = useActiveSection(nav.map((n) => n.id));
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyLock(menuOpen);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}`}
        id="siteHeader"
      >
        <div className="container nav">
          <a href="#home" className="brand" aria-label={`${site.name} — home`}>
            <span className="brand-mark">{site.initials}</span>
            <span className="brand-name">{site.name}</span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeId === item.id ? 'is-active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`tel:${site.phone.replace(/\s+/g, '')}`}
            className="nav-phone"
            aria-label={`Call ${site.phone}`}
          >
            <Icon name="phone" size={14} />
            <span>{site.phone}</span>
          </a>

          <a href="#contact" className="btn btn-pill desktop-only">
            Let's talk
          </a>

          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
