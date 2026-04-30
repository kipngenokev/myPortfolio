import { useState } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard.js';
import { site, socials } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const emailCopy = useCopyToClipboard();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const telHref = `tel:${site.phone.replace(/\s+/g, '')}`;

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Project enquiry from ${form.name || 'a visitor'}`;
    const body = `Hi Kipngeno,\n\n${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <span className="section-label">Contact</span>
        <Reveal as="h2" id="contact-title" className="contact-title">
          Let's talk
          <br />
          <em>business.</em>
        </Reveal>

        <Reveal as="p" className="contact-lede">
          Now that you know a little about how I work, tell me about your project — a brief, a
          rough idea, or just a friendly hello. I read every message.
        </Reveal>

        <div className="contact-grid">
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
              />
            </div>

            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@company.com"
              />
            </div>

            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                rows={5}
                required
                value={form.message}
                onChange={update('message')}
                placeholder="A few sentences about your project, timeline, and budget."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
              <span className="arrow" aria-hidden="true">→</span>
            </button>
          </Reveal>

          <Reveal as="aside" className="contact-aside">
            <p className="contact-aside-label">Or reach me directly</p>

            <div className="contact-method">
              <span className="contact-method-label">Email</span>
              <div className="email-row">
                <a href={`mailto:${site.email}`} className="email-cta">
                  {site.email}
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
                <button
                  type="button"
                  className={`copy-btn${emailCopy.copied ? ' is-copied' : ''}`}
                  onClick={() => emailCopy.copy(site.email)}
                  aria-live="polite"
                >
                  {emailCopy.copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-method-label">Phone</span>
              <div className="email-row">
                <a href={telHref} className="email-cta">
                  {site.phone}
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <p className="contact-note">{site.bookingNote}</p>

            <ul className="socials" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
