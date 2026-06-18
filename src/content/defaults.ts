/**
 * Default site content (the "context").
 *
 * The frontend renders this copy when the CMS has no matching data yet
 * (e.g. before you connect a database or add records in /admin).
 * Once you fill the CMS, live data takes precedence over these defaults.
 */

export const site = {
  name: 'Greenland Infra',
  tagline: 'Architecture, interiors and urban design.',
  email: 'studio@greenlandinfra.com',
  phone: '+91 00000 00000',
  address: '123 Studio Lane, City, Country',
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/'

  },
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  headline: 'We design spaces that endure.',
  subheadline:
    'Welcome to Greenland Infra, where modern architecture meets environmental responsibility.We specialize in functional designs, 3D walkthroughs, and eco-friendly rainwater harvesting systems.',
  ctaLabel: 'View our work',
  ctaHref: '/projects',
}

export const whatWeDo = {
  title: 'What We Do',
  intro:
    'From the first sketch to the final detail, we lead each project with clarity, craft and care.',
  services: [
    {
      title: 'Architecture',
      description: 'We create functional, Vastu-compliant layouts for residential and commercial spaces, seamlessly blending modern aesthetics with structural integrity.',
    },
    {
      title: '3D Visualization',
      description: '3See your project before it’s built. We provide high-quality 3D elevations and virtual walkthroughs so you can clearly visualize the final outcome before construction begins.',
    },
    {
      title: 'Sustainable Water Management',
      description: 'We design and implement scalable rainwater harvesting systems for homes, schools, and industries to conserve water, reduce costs, and naturally recharge local groundwater.',
    },
    {
      title: 'End-to-End Project Execution',
      description: 'From the initial blueprint to the final handover, we manage the entire process. We ensure high-quality materials, transparent pricing, and timely delivery for a stress-free experience.',
    },
  ],
}

export const projectsSection = {
  title: 'Selected Work',
  intro: 'A glimpse of recent projects across scales and typologies.',
}

export const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '15', label: 'Years of practice' },
  { value: '08', label: 'Design awards' },
  { value: '40+', label: 'Cities worldwide' },
]

export const marqueeWords = [
  'Architecture',
  '3D Design',
  'Water Harvesting',
  'Master Planning',
  'Sustainability',
  'Walkthroughs',
]

export const statement = {
  small: 'Why we build',
  lines: ['We shape spaces', 'that give back —', 'to the people within,', 'and the land beneath.'],
}

export const companyStory = {
  title: 'Our Story',
  since: '2009',
  lead: 'What began as a two-person studio has grown into a practice shaping homes, workplaces and cities — without ever losing its love for the detail.',
  body: [
    'Greenland Infra began with a simple conviction: that good design improves everyday life. Our first commission was a single home, drawn by hand across countless evenings.',
    'Since then we have grown into a multidisciplinary studio working across architecture, interiors and urban design — but our approach has stayed the same. We listen closely, build responsibly, and sweat the details.',
    'Every project is an opportunity to make a place that is useful, beautiful and built to last — for the people who live and work within it.',
  ],
  milestones: [
    {
      year: '2009',
      title: 'The beginning',
      text: 'Founded as a small residential studio with a single commission and a big conviction.',
    },
    {
      year: '2014',
      title: 'Going further',
      text: 'Expanded into commercial and interior work as the team and our ambitions grew.',
    },
    {
      year: '2019',
      title: 'New horizons',
      text: 'Launched our urban design practice — master planning, landscape and public space.',
    },
    {
      year: 'Today',
      title: 'Building what lasts',
      text: 'A multidisciplinary studio working across scales, typologies and continents.',
    },
  ],
}

export const founderPhilosophy = {
  title: "Founder's Philosophy",
  name: 'Founder Name',
  role: 'Principal Architect',
  quote: 'Architecture is not about buildings. It is about the life that happens inside them.',
  body: [
    'I believe design should be quiet and generous — serving the people who use a space rather than the ego of the architect.',
    'My work is guided by context, climate and craft, with a deep respect for the materials and communities we build with.',
  ],
}

export const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'We work on residential, commercial, interior and urban projects of varying scales — from private homes to public spaces.',
  },
  {
    question: 'Where are you based and do you travel?',
    answer:
      'Our studio is based locally, and we take on projects nationally and internationally depending on scope.',
  },
  {
    question: 'How does the design process work?',
    answer:
      'We move through clear stages: brief and feasibility, concept design, design development, and construction support — keeping you involved at every step.',
  },
  {
    question: 'How do I start a project with you?',
    answer:
      'Reach out via the contact page with a few details about your project. We will set up an introductory conversation to understand your needs.',
  },
]

const u = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`

export const featuredProjectsFallback = [
  {
    slug: 'riverside-residence',
    title: 'Riverside Residence',
    location: 'Riverside',
    year: 2024,
    category: 'Residential',
    area: '420 m²',
    client: 'Private',
    services: ['Architecture', 'Interiors', '3D Visualization'],
    summary:
      'A light-filled family home that opens fully to the river, designed around water, daylight and a quiet sense of calm.',
    hero: u('photo-1580587771525-78b9dba3b914'),
    gallery: [
      { url: u('photo-1600566753086-00f18fb6b3ea'), caption: 'Open-plan living towards the deck' },
      { url: u('photo-1600607687939-ce8a6c25118c'), caption: 'Kitchen and dining' },
      { url: u('photo-1600585154340-be6161a56a0c'), caption: 'Evening elevation' },
    ],
    description: [
      'Set along a gentle bend in the river, the brief was simple: a home that feels open to the landscape yet calm and protected within.',
      'We organised the plan around a central courtyard, drawing daylight deep into every room and framing long views to the water. A rainwater harvesting system feeds the garden and recharges the local groundwater.',
      'Natural materials — timber, lime plaster and stone — were chosen to weather gracefully and keep the interiors quiet and warm.',
    ],
  },
  {
    slug: 'atrium-offices',
    title: 'Atrium Offices',
    location: 'Downtown',
    year: 2023,
    category: 'Commercial',
    area: '3,200 m²',
    client: 'Northwind Group',
    services: ['Architecture', 'Master Planning', 'Sustainability'],
    summary:
      'A workplace built around a daylit atrium, balancing focus and collaboration across five flexible floors.',
    hero: u('photo-1486304873000-235643847519'),
    gallery: [
      { url: u('photo-1497366216548-37526070297c'), caption: 'Central atrium' },
      { url: u('photo-1524758631624-e2822e304c36'), caption: 'Collaborative floor' },
      { url: u('photo-1531973576160-7125cd663d86'), caption: 'Meeting spaces' },
    ],
    description: [
      'The headquarters needed to bring five scattered teams under one roof without losing a human scale.',
      'A full-height atrium stitches the floors together, carrying daylight down to the ground and giving every desk a view. Operable façades and a high-efficiency envelope keep the building comfortable year-round.',
      'The result is a workplace that feels generous, legible and genuinely pleasant to spend the day in.',
    ],
  },
  {
    slug: 'courtyard-house',
    title: 'Courtyard House',
    location: 'Old Town',
    year: 2023,
    category: 'Residential',
    area: '310 m²',
    client: 'Private',
    services: ['Architecture', 'Interiors'],
    summary:
      'A serene urban home turned inward around a planted courtyard, trading the busy street for stillness.',
    hero: u('photo-1512917774080-9991f1c4c750'),
    gallery: [
      { url: u('photo-1600585154526-990dced4db0d'), caption: 'Courtyard at dusk' },
      { url: u('photo-1583608205776-bfd35f0d9f83'), caption: 'Living space' },
      { url: u('photo-1600210492493-0946911123ea'), caption: 'Stair and light well' },
    ],
    description: [
      'On a tight plot in the old town, privacy and light were the central challenge.',
      'The house turns its back to the street and wraps around a planted courtyard, which becomes the heart of the home — bringing greenery, daylight and ventilation into every room.',
      'Restrained materials and careful proportions let the changing light and planting take centre stage.',
    ],
  },
]
