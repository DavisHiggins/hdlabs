import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection.jsx';
import ServicesMotionMap from '../components/ServicesMotionMap.jsx';
import LiveMetricsPanel from '../components/LiveMetricsPanel.jsx';
import './ServicesPage.css';

const EASE = [0.22, 1, 0.36, 1];

export default function ServicesPage() {
  return (
    <div className="page-top services-page">
      <ServicesSection />

      {/* Connected Services Motion Map */}
      <section className="services-map section">
        <div className="page-shell">
          <motion.div
            className="services-map__head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="section-label">System Map · INTERFACE SYSTEM: ONLINE</span>
            <h2 className="services-map__title">
              Every service connects into <span className="text-gold">one system.</span>
            </h2>
            <p className="services-map__sub">
              Hover a node to see how each capability links to the others — from first
              build to client-owned launch.
            </p>
          </motion.div>

          <ServicesMotionMap />
        </div>
      </section>

      <LiveMetricsPanel variant="services" />
    </div>
  );
}
