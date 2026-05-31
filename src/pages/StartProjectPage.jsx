import { useState } from 'react';
import { motion } from 'framer-motion';
import StartProject from '../components/StartProject.jsx';
import { brand } from '../data/siteContent.js';
import './StartProjectPage.css';

const EASE = [0.22, 1, 0.36, 1];

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
  { name: 'business', label: 'Business', type: 'text', placeholder: 'Business name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'website', label: 'Current Website', type: 'url', placeholder: 'https://…' },
  { name: 'budget', label: 'Budget Range', type: 'text', placeholder: 'e.g. $2k – $5k' },
  { name: 'timeline', label: 'Timeline', type: 'text', placeholder: 'e.g. 3 – 4 weeks' },
];

export default function StartProjectPage() {
  const [values, setValues] = useState({});

  const update = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  // No backend yet — compose a prefilled email so the form actually does
  // something real instead of silently failing.
  // TODO: wire to a form backend (Formspree / API route) for inbox capture.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Name: ${values.name || ''}`,
      `Business: ${values.business || ''}`,
      `Email: ${values.email || ''}`,
      `Current Website: ${values.website || ''}`,
      `Budget Range: ${values.budget || ''}`,
      `Timeline: ${values.timeline || ''}`,
      '',
      'Project Goals:',
      values.goals || '',
    ].join('\n');

    const subject = encodeURIComponent(
      `New Project Inquiry${values.business ? ` — ${values.business}` : ''}`
    );
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-top start-page">
      <StartProject />

      <section className="console section">
        <div className="page-shell console__inner">
          <motion.div
            className="console__intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="section-label">Project Brief</span>
            <h2 className="console__title">Send the details. Get a quote in 1 – 2 days.</h2>
            <p className="console__copy">
              Share the current website, goals, and brand assets. Higgins Digital reviews
              the details and responds with a clear, scoped quote — no obligation.
            </p>
            <div className="console__contacts">
              <a href={`mailto:${brand.email}`} className="console__contact" data-cursor="gold">
                {brand.email}
              </a>
              <span className="console__loc">{brand.location}</span>
            </div>
          </motion.div>

          <motion.form
            className="console__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <div className="console__grid">
              {FIELDS.map((f) => (
                <label key={f.name} className="console__field">
                  <span className="console__label">
                    {f.label}
                    {f.required && <span className="console__req">*</span>}
                  </span>
                  <input
                    className="console__input"
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required={f.required}
                    value={values[f.name] || ''}
                    onChange={update}
                  />
                </label>
              ))}
            </div>

            <label className="console__field console__field--full">
              <span className="console__label">Project Goals</span>
              <textarea
                className="console__input console__textarea"
                name="goals"
                rows={4}
                placeholder="What does the business need this website to do?"
                value={values.goals || ''}
                onChange={update}
              />
            </label>

            <button
              type="submit"
              className="console__submit no-motion-cta"
              data-cursor="button"
              data-no-magnetic="true"
            >
              Send Project Brief
              <span>→</span>
            </button>
            <p className="console__note">
              Opens your email client with the details prefilled. Prefer email? Write to{' '}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
