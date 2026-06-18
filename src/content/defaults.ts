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
    linkedin: 'https://linkedin.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    pinterest: 'https://pinterest.com/',
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
    'A studio shaping homes, workplaces and cities through thoughtful, sustainable architecture.',
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
      description: 'Residential and commercial buildings designed around light, context and use.',
    },
    {
      title: 'Interior Design',
      description: 'Interiors that feel considered — materials, proportion and atmosphere in balance.',
    },
    {
      title: 'Urban Design',
      description: 'Master planning and public spaces that connect people to place.',
    },
    {
      title: 'Consultation',
      description: 'Feasibility, concept development and design advisory from concept to completion.',
    },
  ],
}

export const projectsSection = {
  title: 'Selected Work',
  intro: 'A glimpse of recent projects across scales and typologies.',
}

export const companyStory = {
  title: 'Our Story',
  body: [
    'Greenland Infra began with a simple conviction: that good design improves everyday life.',
    'Since our founding, we have grown into a multidisciplinary studio working across architecture, interiors and urban design — but our approach has stayed the same. We listen closely, build responsibly, and sweat the details.',
    'Every project is an opportunity to make a place that is useful, beautiful and built to last.',
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

export const featuredProjectsFallback = [
  { title: 'Riverside Residence', location: 'Riverside', year: 2024, category: 'Residential', slug: '#' },
  { title: 'Atrium Offices', location: 'Downtown', year: 2023, category: 'Commercial', slug: '#' },
  { title: 'Courtyard House', location: 'Old Town', year: 2023, category: 'Residential', slug: '#' },
]
