export const site = {
  name: 'Kipngeno Kevin',
  firstName: 'Kipngeno Kevin',
  initials: 'KK',
  role: 'Web Designer & Developer',
  email: 'kipngeno.dev@gmail.com',
  phone: '+254702922235',
  location: 'Kenya',
  status: 'Available for new projects · Q3 2026',
  github: 'https://github.com/kipngenokev',
  heroIntro:
    "Software engineer with a designer's eye — I build full-stack web products and the AI features that live inside them. From SaaS platforms and e-commerce to AI copilots, always sharpening the craft across the stack.",
  bookingNote:
    'Currently booking projects for July 2026 onwards. Reach out early.',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'approach', label: 'Approach' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const heroMeta = [
  { label: 'Based in', value: 'Kenya' },
  { label: 'Working with', value: 'Clients worldwide' },
  { label: 'Focus', value: 'Brand & marketing sites' },
];

export const projects = [
  {
    id: 'smartseason',
    index: '01',
    name: 'SmartSeason — Field Monitoring',
    label: 'SmartSeason',
    category: 'AgriTech SaaS',
    thumb: 'thumb-6',
    image: '/projects/smartseason.jpg',
    imageAlt:
      'SmartSeason agricultural platform — split-screen landing with "Smarter Fields, Better Seasons." narrative on the left and sign-in form on the right.',
    description:
      "A SaaS platform for agricultural field operations — real-time field health monitoring, agent assignment and tracking, and secure role-based access, all unified in one dashboard. A split-screen landing pairs a confident product narrative with a calm, low-friction sign-in flow.",
    tags: ['SaaS Platform', 'Dashboard', 'Auth & Roles'],
    href: 'https://smartseason-field-monitoring-system-production-43ec.up.railway.app/',
    feature: true,
  },
  {
    id: 'mwamba',
    index: '02',
    name: 'Mwamba Rugby — Kenya Cup Women Final',
    label: 'Mwamba RFC',
    category: 'Sports & Events',
    thumb: 'thumb-8',
    image: '/projects/mwambarugby.jpg',
    imageAlt:
      'Mwamba Rugby homepage — "Kenya Cup Women Final" hero featuring Mwamba RFC vs Quins Queens, match details, ticket CTA, and venue/schedule/countdown cards.',
    description:
      "A matchday hub for Mwamba RFC built around the Kenya Cup Women Final — Mwamba RFC vs Quins Queens at the Goan Institute. Bold sport-poster typography, an event countdown, ticket CTA, and venue/schedule cards combine fan energy with information density. Designed to convert casual visitors into ticket buyers without losing the club's voice.",
    tags: ['Sports & Events', 'Tickets', 'Responsive'],
    href: 'https://mwambarugby.com',
    feature: true,
  },
  {
    id: 'kipyegon-malel',
    index: '03',
    name: 'Kipyegon Malel & Co. Advocates',
    label: 'KM & Co.',
    category: 'Law Firm',
    thumb: 'thumb-5',
    image: '/projects/kipyegon-malel.jpg',
    imageAlt:
      'Kipyegon Malel & Co. Advocates homepage — "Justice. Integrity. Excellence." hero with practice-area CTAs.',
    description:
      "A trust-first website for a Rift Valley law firm — clear practice-area entry points, social proof up front, and a frictionless consultation flow. Quiet typography and considered hierarchy carry the firm's locally-grounded, professional voice.",
    tags: ['Brand Site', 'Responsive', 'Conversion-led'],
    href: 'https://kipyegon-malel-co-advocates.vercel.app/',
    feature: true,
  },
  {
    id: 'vitapharm',
    index: '04',
    name: 'Vitapharm Beauty & Health',
    label: 'Vitapharm',
    category: 'E-commerce',
    thumb: 'thumb-7',
    image: '/projects/vitapharm.jpg',
    imageAlt:
      'Vitapharm Beauty & Health shop page — header with search and category nav, faceted price/brand filters, and a "New" badged product grid featuring Maybelline and LA Colors items.',
    description:
      "An e-commerce experience for a Kenyan beauty & health retailer stocking international brands like Maybelline, LA Colors, and Beauty of Joseon. Category-led navigation, faceted price and brand filters, a fast product grid, and direct-to-WhatsApp support — built around a calm catalogue browse and frictionless checkout.",
    tags: ['E-commerce', 'WooCommerce', 'Catalogue & Filters'],
    href: 'https://vitapharmbeauty.com/vitapharm-shop/',
    feature: true,
  },
  {
    id: 'lexa',
    index: '05',
    name: 'Lexa — AI Paralegal Copilot',
    label: 'LEXA',
    category: 'AI / LegalTech',
    thumb: 'thumb-6',
    image: '/projects/lexaai.jpg',
    imageAlt:
      'Lexa AI homepage — "Your AI Paralegal and Legal Operations Copilot" headline with Research, Draft, and Manage feature cards.',
    description:
      "An AI paralegal copilot for Kenyan legal practice — razor-sharp research grounded in current law and gazette updates, drafting that mirrors a lawyer's tone, and a manager for tasks, deadlines, finances, and wellbeing. Built for lawyers, law students, interns, and firm partners who want their time and health back.",
    tags: ['AI Product', 'SaaS Platform', 'LegalTech'],
    href: 'https://lexaai.legal/',
    feature: true,
  },
];

export const principles = [
  {
    num: '01',
    title: 'Outcomes over features',
    body:
      'I start with the metric that matters — sign-ups, conversions, time saved — and shape every decision against it. No code earns its place without a clear job to do.',
  },
  {
    num: '02',
    title: 'Fast, reliable, secure',
    body:
      'Snappy interfaces, code that fails safe, data handled with care. The basics that turn a working product into one people trust — done by default, not bolted on after launch.',
  },
  {
    num: '03',
    title: 'Built to evolve',
    body:
      'Clean architecture, real tests, observable runtime. The system you ship today should keep growing — new features, more users, an AI layer on top, a fresh engineer picking it up — without a rewrite.',
  },
];

export const skillsIntro =
  "From polished web products to AI features that actually ship, I work across the full stack — front-end craft, sturdy back-ends, intelligent layers on top, and the delivery practices that keep them all steady in production.";

export const skillCategories = [
  {
    num: '01',
    title: 'Frontend Engineering',
    body:
      "Polished, accessible interfaces with React, Next.js, and Tailwind — clean component architecture, smooth interactions, and a sharp eye for type, layout, and motion. The kind of front-end users notice without realising why.",
  },
  {
    num: '02',
    title: 'Backend Engineering',
    body:
      'REST APIs, auth flows, database modelling, and third-party integrations — built in Node.js or Java/Spring Boot. I keep server logic boring and predictable so the product can be ambitious.',
  },
  {
    num: '03',
    title: 'AI Engineering',
    body:
      "LLM features that actually ship. Retrieval-augmented generation, prompt engineering, and tool-calling agents — wired up so they stay reliable, observable, and grounded in the user's data.",
  },
  {
    num: '04',
    title: 'Quality & Delivery',
    body:
      "Performance budgets, real tests, sensible CI/CD, and observability from day one. Software that's fast for users, steady in production, and safe to change.",
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'AI',
    items: ['LLM Integration', 'Prompt Engineering', 'RAG / Embeddings'],
  },
  {
    title: 'Design & Platform',
    items: ['Figma', 'Webflow', 'Git', 'Vercel'],
  },
];

export const stats = [
  { num: '20', sup: '+', label: 'Projects shipped' },
  { num: '100', sup: '%', label: 'On-time delivery' },
  { num: '95', sup: '+', label: 'Avg. Lighthouse score' },
  { num: '5', sup: '★', label: 'Client feedback' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kipngeno-kevin/' },
  { label: 'GitHub', href: 'https://github.com/kipngenokev' },
];
