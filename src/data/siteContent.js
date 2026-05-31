// ─────────────────────────────────────────────────
// Higgins Digital Labs — centralised site content
// ─────────────────────────────────────────────────

export const brand = {
  name: 'Higgins Digital Labs',
  parent: 'Higgins Digital',
  email: 'davishiggins@higginsd.com',
  location: 'Charlotte, NC',
  site: 'higginsd.com',
  tagline: 'High-performance websites for real businesses.',
  labsLine: 'Experimental interface systems by Higgins Digital.',
  mainSiteUrl: 'https://higginsd.com',
};

// The Transformation Engine — four cinematic stages, each with its own real
// stage image so the build visibly evolves (Audit → Structure → Interface → Launch).
export const transformationEngineStages = [
  {
    number: '01',
    title: 'Audit',
    micro: 'SYSTEM CHECK',
    copy: 'Weak first impressions, unclear structure, and outdated visuals are identified before design begins.',
    tags: ['First impression', 'Navigation', 'Visual trust', 'Mobile clarity'],
    image: '/transformation1.png',
  },
  {
    number: '02',
    title: 'Structure',
    micro: 'INTERFACE RECONSTRUCTION',
    copy: 'The page is rebuilt around hierarchy, clarity, conversion paths, and the way real visitors judge a business online.',
    tags: ['Hierarchy', 'CTA paths', 'Content flow', 'Clarity'],
    image: '/transformation2.png',
  },
  {
    number: '03',
    title: 'Interface',
    micro: 'DIGITAL PRESENCE UPGRADE',
    copy: 'The brand receives a sharper visual system with stronger spacing, modern UI, responsive layouts, and intentional motion.',
    tags: ['Spacing', 'Responsive UI', 'Motion', 'Brand system'],
    image: '/transformation3.png',
  },
  {
    number: '04',
    title: 'Launch',
    micro: 'CLIENT-READY STANDARD',
    copy: 'The site is optimized, domain-ready, mobile-responsive, and prepared to represent the business with confidence.',
    tags: ['Responsive', 'Domain-ready', 'Client-owned source', 'Performance-minded', 'Quote-ready'],
    image: '/transformation4.png',
  },
];

// HBG before/after comparison (real stage assets)
export const hbgCompare = {
  before: '/transformation1.png',
  after: '/transformation4.png',
  beforeLabel: 'Before',
  afterLabel: 'After',
};

// Rebuild Timeline — story-driven Work narrative
export const rebuildTimelineSteps = [
  { number: '01', title: 'Intake', copy: 'Goals, current site, brand assets, and the real business context are gathered.' },
  { number: '02', title: 'Audit', copy: 'First impression, structure, and trust signals are assessed against how visitors actually judge a business.' },
  { number: '03', title: 'Direction', copy: 'A clear visual + structural direction is set before a single section is designed.' },
  { number: '04', title: 'Interface', copy: 'A premium visual system is applied — spacing, type, motion, and responsive layout.' },
  { number: '05', title: 'Build', copy: 'Clean, component-driven frontend with performance and SEO baked in.' },
  { number: '06', title: 'Launch', copy: 'Domain-ready deployment, client-owned source, and a site ready to represent the business.' },
];

// Services Motion Map — connected system nodes
export const servicesMap = {
  nodes: [
    { id: 'web-dev', label: 'Website Development', x: 50, y: 12, desc: 'Custom multi-page sites with clean structure, polished visuals, and responsive layouts.' },
    { id: 'brand', label: 'Brand Systems', x: 20, y: 40, desc: 'Typography, color, and spacing built so the business looks consistent and credible.' },
    { id: 'ux', label: 'Modern UX', x: 50, y: 40, desc: 'Conversion paths and interaction design that guide visitors toward a decision.' },
    { id: 'conversion', label: 'Conversion Paths', x: 80, y: 40, desc: 'Strategic flows and friction-free contact experiences that turn attention into action.' },
    { id: 'performance', label: 'Performance Optimization', x: 22, y: 72, desc: 'Cleaner assets, mobile-first layouts, and decisions that keep visitors moving.' },
    { id: 'domain', label: 'Domain Transition', x: 50, y: 72, desc: 'New sites prepared to replace older ones on the same domain without losing identity.' },
    { id: 'ownership', label: 'Client-Owned Source', x: 78, y: 72, desc: 'Full source ownership at launch. No vendor lock-in, no recurring platform fees.' },
    { id: 'seo', label: 'SEO-Ready Structure', x: 50, y: 92, desc: 'Semantic HTML, fast load times, and architecture search engines can index immediately.' },
  ],
  edges: [
    ['web-dev', 'brand'], ['web-dev', 'ux'], ['web-dev', 'conversion'],
    ['brand', 'performance'], ['ux', 'domain'], ['conversion', 'ownership'],
    ['performance', 'seo'], ['domain', 'seo'], ['ownership', 'seo'],
    ['brand', 'ux'], ['ux', 'conversion'],
  ],
};

// Labs Manifesto
export const labsManifesto = [
  'Clarity before decoration.',
  'Motion with purpose.',
  'Performance as a feature.',
  'Trust as the outcome.',
];

// Route module-switch labels
export const routeModuleLabels = {
  '/': 'HDL / HOME MODULE',
  '/work': 'HDL / WORK MODULE',
  '/services': 'HDL / SERVICES MODULE',
  '/about': 'HDL / ABOUT MODULE',
  '/pricing': 'HDL / PRICING MODULE',
  '/start': 'HDL / START MODULE',
};

// HD Labs OS status lines (used tastefully)
export const osStatus = [
  'HDL_OS v5.0',
  'MOTION ENGINE: ACTIVE',
  'TRANSFORMATION PIPELINE: READY',
  'INTERFACE SYSTEM: ONLINE',
];

// Command palette (⌘K / Ctrl+K)
export const commands = [
  { label: 'Go Home', type: 'navigate', path: '/', group: 'Navigate' },
  { label: 'Go to Work', type: 'navigate', path: '/work', group: 'Navigate' },
  { label: 'View Services', type: 'navigate', path: '/services', group: 'Navigate' },
  { label: 'View Pricing', type: 'navigate', path: '/pricing', group: 'Navigate' },
  { label: 'About Higgins Digital Labs', type: 'navigate', path: '/about', group: 'Navigate' },
  { label: 'Start a Project', type: 'navigate', path: '/start', group: 'Navigate' },
  { label: 'View Project: Higgins Building Group', type: 'project', target: 'higgins-building-group', group: 'Projects' },
  { label: 'View Project: Wyatt Bullock Photography', type: 'project', target: 'wyatt-bullock-photography', group: 'Projects' },
  { label: 'View Project: Davis Higgins Portfolio', type: 'project', target: 'davis-higgins-portfolio', group: 'Projects' },
  { label: 'View Project: AI Workflow System', type: 'project', target: 'ai-workflow-system', group: 'Projects' },
  { label: 'Open Labs Manifesto', type: 'action', action: 'openManifesto', group: 'Actions' },
  { label: 'Toggle Lab Mode', type: 'action', action: 'toggleLabMode', group: 'Actions' },
  { label: 'Toggle Sound', type: 'action', action: 'toggleSound', group: 'Actions' },
  { label: 'Email Davis', type: 'email', email: 'davishiggins@higginsd.com', group: 'Actions' },
  { label: 'Open Higgins Digital', type: 'external', url: 'https://higginsd.com', group: 'External' },
];

// Interactive design principles (About page grid)
export const designPrinciples = [
  {
    title: 'Clarity',
    meaning: 'Every section should make the business easier to understand.',
    application: 'We simplify page structure, sharpen hierarchy, and make the next action obvious.',
    visual: 'grid',
  },
  {
    title: 'Motion',
    meaning: 'Animation should guide attention, not distract from the message.',
    application: 'We use motion to create flow, reveal priority, and make interfaces feel alive without getting in the way.',
    visual: 'path',
  },
  {
    title: 'Performance',
    meaning: 'A premium site should feel fast before the user reads a word.',
    application: 'We build with responsive structure, clean assets, and deployment-ready frontend systems.',
    visual: 'bars',
  },
  {
    title: 'Trust',
    meaning: 'The site should make the business feel credible immediately.',
    application: 'We align visuals, spacing, copy, and calls-to-action so the brand feels established and real.',
    visual: 'shield',
  },
];

// Live metrics / system diagnostics
export const liveMetrics = [
  { label: 'LOAD TARGET', value: 'Sub-second load targets', detail: 'Performance-minded frontend systems.', status: 'optimized' },
  { label: 'MOBILE SYSTEM', value: 'Mobile-first layouts', detail: 'Responsive experiences built for every screen.', status: 'active' },
  { label: 'OWNERSHIP', value: 'Client-owned source code', detail: 'Full source ownership after launch.', status: 'ready' },
  { label: 'DEPLOYMENT', value: 'Domain-ready deployment', detail: 'Prepared for real business launch.', status: 'ready' },
  { label: 'QUOTE WINDOW', value: 'Quote response in 1–2 days', detail: 'Clear next steps after project review.', status: 'active' },
];

// Per-route page identity + section list
export const pageIdentity = {
  '/': { label: 'HDL / HOME', sections: ['Intro', 'Mockups', 'Metrics', 'Bridge'] },
  '/work': { label: 'HDL / WORK', sections: ['Transformation', 'Projects', 'Results'] },
  '/services': { label: 'HDL / SERVICES', sections: ['Web Systems', 'Performance', 'Ownership'] },
  '/about': { label: 'HDL / ABOUT', sections: ['Labs', 'Principles', 'Bridge'] },
  '/pricing': { label: 'HDL / PRICING', sections: ['Packages', 'Comparison', 'Start'] },
  '/start': { label: 'HDL / START', sections: ['Project', 'Contact', 'Launch'] },
};

export const navItems = [
  { label: 'Home',            path: '/'         },
  { label: 'Work',            path: '/work'     },
  { label: 'Services',        path: '/services' },
  { label: 'About',           path: '/about'    },
  { label: 'Pricing',         path: '/pricing'  },
  { label: 'Start a Project', path: '/start',   isCta: true },
];

export const philosophy = [
  {
    number: '01',
    title: 'Clarity before decoration',
    copy: 'Structure and hierarchy come first. Visual polish amplifies a clear message — it never replaces one.',
  },
  {
    number: '02',
    title: 'Motion with purpose',
    copy: 'Animation guides attention and creates rhythm. Every transition earns its place or it gets cut.',
  },
  {
    number: '03',
    title: 'Performance as a feature',
    copy: 'Fast load times and smooth interaction are part of the design, not an afterthought bolted on at the end.',
  },
  {
    number: '04',
    title: 'Design that earns trust',
    copy: 'A premium interface signals a serious business. The site should look as strong as the company behind it.',
  },
];

export const services = [
  {
    id: 'web-dev',
    title: 'Website Development',
    desc: 'Custom landing pages and multi-page websites with clean structure, polished visuals, and responsive layouts.',
    featured: true,
  },
  {
    id: 'domain',
    title: 'Domain Transition Support',
    desc: 'New websites prepared to replace older company sites on the same domain while preserving identity and continuity.',
    featured: false,
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    desc: 'Cleaner assets, simpler architecture, mobile-first layouts, and UX decisions that keep visitors moving.',
    featured: false,
  },
  {
    id: 'brand',
    title: 'Brand Systems',
    desc: 'Typography, color, spacing, and page structure built to make the business look consistent and credible.',
    featured: false,
  },
  {
    id: 'ux',
    title: 'Modern UX',
    desc: 'Conversion paths, clear hierarchy, and interaction design that guides visitors toward a decision.',
    featured: false,
  },
  {
    id: 'seo',
    title: 'SEO-Ready Structure',
    desc: 'Semantic HTML, fast load times, and clear page architecture that search engines can index immediately.',
    featured: false,
  },
  {
    id: 'conversion',
    title: 'Conversion Paths',
    desc: 'Strategic page flows, clear calls-to-action, and friction-free contact experiences.',
    featured: false,
  },
  {
    id: 'ownership',
    title: 'Client-Owned Source Code',
    desc: 'Full source code ownership upon launch. No vendor lock-in, no recurring platform fees.',
    featured: false,
  },
];

export const projects = [
  {
    id: 'higgins-building-group',
    number: '01',
    name: 'Higgins Building Group',
    category: 'Luxury Custom Home Builder',
    problem: 'The existing site did not reflect the quality of the homes or the credibility of the business.',
    built: 'A premium redesign with stronger hierarchy, modern visuals, responsive UX, and clearer contact paths.',
    outcome: 'A more trustworthy digital presence built to match the business in person.',
    tags: ['Redesign', 'Brand Identity', 'Responsive'],
    tint: 'gold',
    status: 'Live',
    image: '/hbgpicture.png',
    href: 'https://higginsbg.com',
    mood: { accent: '#d6ad5b', glow: 'rgba(214, 173, 91, 0.18)', label: 'Navy / gold luxury' },
  },
  {
    id: 'wyatt-bullock-photography',
    number: '02',
    name: 'Wyatt Bullock Photography',
    category: 'Creative Portfolio',
    problem: 'A portfolio that competed with the photography instead of showcasing it.',
    built: 'A minimal, cinematic gallery experience where layout disappears and imagery leads.',
    outcome: 'Clean, fast, and visually compelling — built to impress editorial and commercial clients.',
    tags: ['Portfolio', 'Gallery', 'Performance'],
    tint: 'blue',
    status: 'Live',
    image: '/wyattpicture.png',
    href: '#',
    mood: { accent: '#e8e8ea', glow: 'rgba(232, 232, 234, 0.16)', label: 'Editorial black & white' },
  },
  {
    id: 'davis-higgins-portfolio',
    number: '03',
    name: 'Davis Higgins Portfolio',
    category: 'Personal Brand / Hub',
    problem: 'Disparate online presence across platforms with no premium anchor point.',
    built: 'A premium personal operating system tying analytics, building, and founder identity together.',
    outcome: 'A single high-performance hub that communicates credibility across every vertical.',
    tags: ['Personal Brand', 'Hub', 'Modern UX'],
    tint: 'gold',
    status: 'Live',
    image: '/portfoliopicture.png',
    href: 'https://davishiggins.com',
    mood: { accent: '#6ea8ff', glow: 'rgba(110, 168, 255, 0.18)', label: 'Blue / gold clean tech' },
  },
  {
    id: 'ai-workflow-system',
    number: '04',
    name: 'AI Workflow System',
    category: 'Product Interface',
    problem: 'Complex AI workflows with no usable, clear interface for non-technical users.',
    built: 'An interface concept that packages advanced AI operations into something readable and actionable.',
    outcome: 'A product-quality interface that makes sophisticated tooling feel approachable.',
    tags: ['Product Design', 'Interface', 'AI'],
    tint: 'blue',
    status: 'Concept',
    image: '/aiworkflowpicture.png',
    href: '#',
    mood: { accent: '#4f8cff', glow: 'rgba(79, 140, 255, 0.22)', label: 'Electric technical systems' },
  },
];

export const transformationStages = [
  {
    number: '01',
    title: 'First Impression',
    copy: 'Outdated websites weaken trust before a conversation ever starts. Visitors judge credibility in under three seconds — and a poor first impression is nearly impossible to recover from.',
    accent: 'The perception problem.',
  },
  {
    number: '02',
    title: 'Structure',
    copy: 'Clear hierarchy, stronger messaging, and cleaner navigation make the business easier to understand. Visitors should never have to think about where to go or what to do next.',
    accent: 'The architecture upgrade.',
  },
  {
    number: '03',
    title: 'Interface',
    copy: 'Premium visuals, responsive layouts, and subtle motion create a stronger brand presence. The design should reflect the actual quality of the business — not drag it down.',
    accent: 'The visual transformation.',
  },
  {
    number: '04',
    title: 'Launch',
    copy: 'Domain-ready deployment, performance optimization, and full source-code ownership complete the transition. Fast, clean, and ready to grow without platform dependency.',
    accent: 'The handoff.',
  },
];

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter Presence',
    tagline: 'Best for: New businesses or simple updates',
    includes: [
      'Single landing page or small site',
      'Mobile-responsive design',
      'Contact form integration',
      'Basic SEO structure',
      'Domain + deployment guidance',
    ],
    timeline: '1 – 2 weeks',
    cta: 'Request a Quote',
    notes: 'Pricing scoped per project. Request a quote for an exact figure.',
    featured: false,
  },
  {
    id: 'growth',
    name: 'Growth Standard',
    tagline: 'Best for: Established businesses investing in presence',
    includes: [
      'Multi-page website (4 – 8 pages)',
      'Custom visual design system',
      'Brand-aligned typography + color',
      'Performance-optimized build',
      'Domain transition support',
      'Full source code ownership',
    ],
    timeline: '2 – 4 weeks',
    cta: 'Request a Quote',
    notes: 'The most common engagement. Scoped to the business and current site.',
    featured: true,
  },
  {
    id: 'custom',
    name: 'Custom Platform',
    tagline: 'Best for: Complex builds, product-style interfaces',
    includes: [
      'Everything in Growth Standard',
      'Advanced interactions + animations',
      'Custom feature development',
      'Ongoing support available',
      'Priority response',
    ],
    timeline: 'Custom timeline',
    cta: 'Start a Conversation',
    notes: 'For product-style interfaces and advanced interaction work.',
    featured: false,
  },
];
