import ServicesSection from '../components/ServicesSection.jsx';
import LiveMetricsPanel from '../components/LiveMetricsPanel.jsx';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="page-top services-page">
      <ServicesSection />
      <LiveMetricsPanel variant="services" />
    </div>
  );
}
