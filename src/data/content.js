// ============================================================
//  HARIPRASATH V — portfolio content.
//  Edit this file to update any text on the site.
// ============================================================

const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Hariprasath V',
  role: 'Backend Developer',
  // A short, punchy tagline shown in the hero.
  tagline:
    'Backend Developer with 1+ year of experience building scalable, secure server-side applications with Python, Django, and well-designed REST APIs.',
  location: 'Chennai, India',
  available: false, // set to true to show an "Available for work" badge in the hero
  email: 'hariprasath642@gmail.com',
  // GitHub Pages compatible paths
  resumeUrl: `${BASE}Hariprasath_Resume.pdf`,
  photo: `${BASE}profile.webp`,
}

// ── Contact form ────────────────────────────────────────────
// The form uses Formspree (free, no backend needed).
// 1. Create a free form at https://formspree.io
// 2. Paste your form's endpoint below (looks like https://formspree.io/f/abcdwxyz)
// Until you set this, the form falls back to opening the visitor's email app.
export const contact = {
  formEndpoint: '', // e.g. 'https://formspree.io/f/your-id'
}

// Social / professional links.
export const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/Hariprasath2707',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hariprasath27/',
  },
  {
    label: 'Email',
    url: 'mailto:hariprasath642@gmail.com',
  },
  {
    label: 'Phone',
    url: 'tel:+919585586843',
  },
]

export const about = {
  paragraphs: [
    "I'm a Backend Developer based in Chennai with 1+ year of experience building scalable, secure, and high-performance web applications using Python, Django, and Django REST Framework.",

    "At Emayam Technology, I work on Focult — an enterprise SaaS platform for employee monitoring, productivity analytics, and compliance reporting. Beyond the server side, I've built dual-component Windows Agent applications in Python (a Login Agent and a Background Service Agent) handling secure authentication, device registration, and silent real-time activity sync with backend APIs.",

    "I enjoy solving complex engineering challenges and designing reusable solutions. I've implemented JWT authentication and Role-Based Access Control across multi-tenant organizational hierarchies, optimized MySQL and PostgreSQL queries to cut average response times by ~35%, and built Celery-based asynchronous pipelines for scheduled jobs, reports, and notifications.",

    "Beyond coding, I lead a team of 4 developers and mentor 2 junior engineers — running sprint planning, code reviews, and technical discussions within an Agile workflow. My focus is always on building maintainable systems that improve performance, automate business processes, and create real value for users.",

    "I'm currently expanding my expertise in API architecture, AI integration, and scalable backend engineering while continuously exploring better ways to build efficient, future-ready applications.",
  ],

  skills: [
    {
      group: 'Languages & Frameworks',
      items: [
        'Python',
        'Django',
        'Django REST Framework (DRF)',
        'RESTful API Development',
        'Serializer-Based Development',
        'Object-Oriented Programming (OOP)',
        'Backend System Design',
      ],
    },
    {
      group: 'Databases',
      items: [
        'PostgreSQL',
        'MySQL',
        'Database Design',
        'Query Optimization',
        'Data Modeling',
        'Performance Tuning',
      ],
    },
    {
      group: 'Backend Expertise',
      items: [
        'JWT Authentication',
        'Role-Based Access Control (RBAC)',
        'Multi-Tenant Architecture',
        'Celery & Background Task Processing',
        'Redis',
        'API Integration',
        'Workflow Automation',
        'Performance Optimization',
        'Audit Logging & Activity Tracking',
        'File Upload & Cloud Storage Integration',
        'Email Notification Systems',
        'Scheduled Reporting & Data Export',
      ],
    },
    {
      group: 'Tools & Technologies',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Linux',
        'Google Drive API',
        'SMTP Services',
        'Agile Development',
        'Debugging & Troubleshooting',
      ],
    },
  ],
}

export const projects = [
  {
    slug: 'focult',
    title: 'Focult',
    year: '2025',
    blurb:
      'Enterprise SaaS platform for employee monitoring, productivity analytics, and compliance reporting across 500+ endpoints — including dual Python Windows Agents for secure auth and silent real-time activity sync. Celery-driven exports cut manual effort by ~60%.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'JWT'],
    link: '',
    repo: '',
    featured: true,

    // --- Detail page content (shown at /projects/focult) ---
    tagline: 'Real-time employee monitoring at enterprise scale.',
    role: 'Backend Developer',
    timeline: '2025',
    overview:
      'Focult is an enterprise SaaS employee-monitoring platform giving organizations real-time visibility into workforce activity, productivity analytics, and compliance reporting across hundreds of endpoints — while keeping data secure and the system responsive under heavy ingestion load.',
    challenge:
      'The platform needed to continuously ingest high-frequency activity data — web history, app usage, keystrokes, screenshots, screen recordings, and file transfers — from 500+ endpoints without degrading performance, work cleanly across multi-tenant organizational hierarchies, and turn that raw stream into reports teams could actually use.',
    approach: [
      'Designed normalized, index-optimized PostgreSQL schemas tuned for large-scale, write-heavy data ingestion.',
      'Built RESTful APIs with Django REST Framework to receive and serve activity data with low latency.',
      'Developed dual-component Windows Agent applications in Python — a Login Agent and a Background Service Agent — for secure authentication, device registration, and silent real-time activity monitoring and data sync.',
      'Implemented Celery background workers for automated exports, scheduled reports, and notifications, removing slow synchronous work from the request path.',
      'Secured the system with JWT authentication and Role-Based Access Control across multi-tenant organizational hierarchies.',
    ],
    features: [
      'Real-time activity capture across 6+ data types (web, apps, keystrokes, screenshots, recordings, file transfers).',
      'Dual Python Windows Agents handling authentication, device registration, and background sync.',
      'Automated, scheduled report generation and data exports.',
      'Multi-tenant role-based dashboards for administrators and employees.',
      'Privacy-aware, low-latency data processing pipeline.',
    ],
    outcomes: [
      { metric: '500+', label: 'endpoints monitored' },
      { metric: '~60%', label: 'less manual reporting effort' },
      { metric: '~35%', label: 'faster query response times' },
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL', 'Celery', 'Redis', 'JWT'],
  },
  {
    slug: 'neem',
    title: 'Neem',
    year: '2025',
    blurb:
      'Backend for an e-commerce platform covering product catalog, real-time inventory tracking, order processing, customer management, and payment workflows — with JWT auth, RBAC, and schema optimizations that cut response times by ~35%.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Python'],
    link: '',
    repo: '',
    featured: true,

    // --- Detail page content (shown at /projects/neem) ---
    tagline: 'A complete commerce backend, from catalog to checkout.',
    role: 'Backend Developer',
    timeline: '2025',
    overview:
      'Neem is an e-commerce platform whose backend handles the full commerce lifecycle — product catalog management, inventory tracking, order processing, customer management, and payment workflows — built to stay fast and consistent as catalog size and order volume grow.',
    challenge:
      'Commerce backends fail in predictable ways: stock counts drift out of sync, order states get inconsistent under concurrent updates, and response times degrade as the catalog grows. The system needed accurate real-time inventory, secure role-separated access, and performant APIs across every workflow.',
    approach: [
      'Developed RESTful APIs for product catalog management, inventory tracking, order processing, customer management, and payment workflows.',
      'Built real-time inventory management modules to track stock availability and product updates accurately.',
      'Implemented JWT-based authentication and role-based authorization (RBAC) for secure access management across user roles.',
      'Optimized database schemas and API performance, reducing average response times by approximately 35%.',
    ],
    features: [
      'Full product catalog and inventory management with real-time stock tracking.',
      'Order processing and payment workflow APIs.',
      'Customer management with role-separated access.',
      'Optimized schemas and queries for fast responses at scale.',
    ],
    outcomes: [
      { metric: '~35%', label: 'faster average response times' },
      { metric: '5', label: 'core commerce modules' },
      { metric: 'Real-time', label: 'inventory accuracy' },
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT'],
  },
  {
    slug: 'nex-liv',
    title: 'Nex Liv',
    year: '2025',
    blurb:
      'Backend for an online real estate platform supporting property buying and selling across 10+ categories. Built a fully dynamic forms-and-fields system that lets new property types ship without schema changes.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Python'],
    link: '',
    repo: '',
    featured: true,

    // --- Detail page content (shown at /projects/nex-liv) ---
    tagline: 'A real estate platform that adapts without redeploys.',
    role: 'Backend Developer',
    timeline: '2025',
    overview:
      'Nex Liv is an online real estate marketplace where users list, browse, and transact properties across many categories. The backend was designed so the business could introduce entirely new property types and attributes without engineering changes each time.',
    challenge:
      'Every property category — apartments, land, commercial, rentals and more — has different attributes. Hard-coding fields per type would mean a schema migration and release for every new category, slowing the business down.',
    approach: [
      'Built a fully dynamic forms-and-fields system where property attributes are configured as data rather than fixed columns.',
      'Modeled flexible schemas in PostgreSQL that support new property types without migrations.',
      'Developed REST APIs for property search, filtering, and listing management with a clean, maintainable architecture.',
      'Designed the listing and user-management flows to scale across 10+ property categories.',
    ],
    features: [
      'Configurable property attributes with no schema changes required.',
      'Dynamic property search and multi-criteria filtering.',
      'Listing management for buyers and sellers.',
      'Support for 10+ property categories out of the box.',
    ],
    outcomes: [
      { metric: '10+', label: 'property categories' },
      { metric: '0', label: 'migrations to add a type' },
      { metric: 'Faster', label: 'release cycle for new types' },
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
  },
]

export const experience = [
  {
    company: 'Emayam Technology',
    role: 'Backend Developer',
    period: 'Mar 2025 — Present',
    location: 'Chennai, India',
    summary:
      'Building scalable RESTful APIs and backend systems for Focult, an enterprise SaaS platform, using Python, Django, and Django REST Framework — and leading a team of 4 developers.',
    points: [
      'Designed and developed scalable RESTful APIs and backend systems for Focult, an enterprise SaaS platform, supporting employee monitoring, productivity analytics, and compliance reporting modules.',
      'Built dual-component Windows Agent applications (Login Agent and Background Service Agent) in Python for secure authentication, device registration, and silent real-time activity monitoring and data sync with backend APIs.',
      'Implemented JWT-based authentication and Role-Based Access Control (RBAC) across multi-tenant organizational hierarchies.',
      'Optimized MySQL and PostgreSQL queries, reducing average response times by approximately 35%.',
      'Implemented Celery-based asynchronous task processing for scheduled jobs, reports, and notifications within an Agile development workflow.',
      'Led a team of 4 developers — managing sprint planning, task allocation, and timely feature delivery — and mentored 2 junior engineers on Python, Django, API development, and backend best practices.',
    ],
  },
]

export const education = [
  {
    title: 'Master of Computer Applications (MCA)',
    org: 'Srinivasan College of Arts and Science, Perambalur',
    period: '2022 — 2024',
    detail: 'CGPA: 7.2',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Srinivasan College of Arts and Science, Perambalur',
    period: '2019 — 2022',
    detail: 'CGPA: 7.2',
  },
  {
    title: 'Python Full Stack Development',
    org: 'Besant Technologies (Course + Internship)',
    period: 'Jul 2024 — Dec 2024',
    detail: 'Certification',
  },
]

// Headline numbers shown in the stats bar under the hero.
export const stats = [
  { metric: '1+', label: 'Years experience' },
  { metric: '500+', label: 'Endpoints monitored' },
  { metric: '~35%', label: 'Faster queries' },
  { metric: '4', label: 'Developers led' },
]

// Core stack shown as a static strip under the hero.
export const techStack = [
  'Python',
  'Django',
  'DRF',
  'PostgreSQL',
  'MySQL',
  'Celery',
  'Redis',
  'JWT',
]

export const marquee = [
  'Backend Developer',
  'Python · Django',
  'REST APIs',
  'PostgreSQL',
  'Celery · Redis',
  'Scalable Systems',
]
