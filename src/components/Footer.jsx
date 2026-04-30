import { site } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span>© {year} {site.name}</span>
        <span className="muted">
          Designed &amp; built with care · Kenya → Worldwide
        </span>
      </div>
    </footer>
  );
}
