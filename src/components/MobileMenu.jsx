import { nav, site } from '../data/site.js';

export default function MobileMenu({ open, onClose, activeId }) {
  return (
    <div
      id="mobile-menu"
      className={`mobile-menu${open ? ' is-open' : ''}`}
      aria-hidden={!open}
    >
      <div className="mobile-menu-head">
        <a href="#" className="brand" onClick={onClose} aria-label={`${site.name} — home`}>
          <span className="brand-mark">{site.initials}</span>
          <span className="brand-name">{site.name}</span>
        </a>
        <button
          type="button"
          className="menu-toggle is-open"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span />
          <span />
        </button>
      </div>

      <ul className="mobile-menu-list">
        {nav.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onClose}
              className={activeId === item.id ? 'is-active' : ''}
            >
              <span>{item.label}</span>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mobile-menu-foot">
        <span>Reach out directly</span>
        <a href={`mailto:${site.email}`} onClick={onClose}>
          {site.email}
        </a>
        <a href={`tel:${site.phone.replace(/\s+/g, '')}`} onClick={onClose}>
          {site.phone}
        </a>
      </div>
    </div>
  );
}
