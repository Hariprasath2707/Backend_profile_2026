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
    'I build scalable, secure, and maintainable backend systems with Python, Django, and well-designed APIs.',
  location: 'Chennai, India',
  available: false, // set to true to show an "Available for work" badge in the hero
  email: 'hariprasath642@gmail.com',
  // GitHub Pages compatible paths
  resumeUrl: `${BASE}resume.pdf`,
  photo: `${BASE}profile.jpg`,
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
    "I'm a Backend Developer based in Chennai, specializing in building scalable, secure, and high-performance web applications using Python, Django, and Django REST Framework.",

    "My journey at Emayam Technology began as a Backend Developer Intern in March 2025, and through consistent contributions and ownership of critical projects, I transitioned into a full-time Backend Developer role. Since then, I have worked across ERP, HRMS, SaaS, Project Management, and License Management platforms, developing backend systems that power real-world business operations.",

    "I enjoy solving complex engineering challenges and designing reusable solutions. One of my most impactful projects was building a dynamic Auto Export and Reporting System that supports automated report generation, workflow automation, scheduled exports, file management, and email delivery across multiple modules. This experience strengthened my expertise in backend architecture, API design, background task processing, and scalable system development.",

    "Beyond coding, I enjoy mentoring developers, leading technical discussions, and collaborating with teams to deliver reliable software solutions. My focus is always on building maintainable systems that improve performance, automate business processes, and create meaningful value for users.",

    "I'm currently expanding my expertise in API Architecture, AI Integration, and scalable backend engineering while continuously exploring better ways to build efficient and future-ready applications.",
  ],

  skills: [
      {
      group: 'Languages & Frameworks',
      items: [
      'Python',
      'Django',
      'Django REST Framework (DRF)',
      'RESTful API Development',
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
      'Celery & Background Task Processing',
      'Redis',
      'API Integration',
      'Workflow Automation',
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
      ]

}

export const projects = [
  {
    slug: 'focult',
    title: 'Focult',
    year: '2025',
    blurb:
      'Real-time employee monitoring platform serving 500+ endpoints — tracking web history, app usage, keystrokes, screenshots, screen recording, and file transfers. Celery-driven automated exports and scheduled reports cut manual effort by ~60%.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'JWT'],
    link: '',
    repo: '',
    featured: true,

    // --- Detail page content (shown at /projects/focult) ---
    tagline: 'Real-time employee monitoring at scale.',
    role: 'Backend Developer',
    timeline: '2025',
    overview:
      'Focult is an enterprise employee-monitoring platform built to give organizations real-time visibility into workforce activity across hundreds of endpoints, while keeping data secure and the system responsive under heavy ingestion load.',
    challenge:
      'The platform needed to continuously ingest high-frequency activity data — web history, app usage, keystrokes, screenshots, screen recordings, and file transfers — from 500+ endpoints without degrading performance, and turn that raw stream into reports teams could actually use.',
    approach: [
      'Designed normalized, index-optimized PostgreSQL schemas tuned for large-scale, write-heavy data ingestion.',
      'Built RESTful APIs with Django REST Framework to receive and serve activity data with low latency.',
      'Implemented Celery background workers for automated exports and scheduled reports, removing slow synchronous work from the request path.',
      'Secured the system with JWT authentication and Role-Based Access Control separating admin and employee permissions.',
    ],
    features: [
      'Real-time activity capture across 6+ data types (web, apps, keystrokes, screenshots, recordings, file transfers).',
      'Automated, scheduled report generation and data exports.',
      'Role-based dashboards for administrators and employees.',
      'Privacy-aware, low-latency data processing pipeline.',
    ],
    outcomes: [
      { metric: '500+', label: 'endpoints monitored' },
      { metric: '~60%', label: 'less manual reporting effort' },
      { metric: '6+', label: 'activity data types' },
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'JWT'],
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
      'Building and maintaining scalable backend systems and RESTful APIs for enterprise applications using Python, Django, and Django REST Framework.',
      points: [ 'Started as a Backend Developer Intern in March 2025 and transitioned to a full-time Backend Developer role in July 2025 based on performance and contributions.', 'Developed and maintained RESTful APIs using Python, Django, and Django REST Framework (DRF), enabling secure and efficient communication between frontend and backend systems.', 'Designed and optimized MySQL and PostgreSQL databases, improving query performance and reducing average response times by approximately 35%.', 'Implemented JWT-based authentication, Role-Based Access Control (RBAC), and Celery-powered background task processing for enterprise applications.', 'Built scalable backend features, automated workflows, and data processing solutions to improve system reliability and operational efficiency.', 'Led a team of developers, managing sprint planning, task allocation, project execution, and timely feature delivery.', 'Collaborated with stakeholders, business teams, and developers to gather requirements and deliver high-quality software solutions.', 'Conducted code reviews and mentored junior developers on Python, Django, API development, debugging, and backend best practices.', ],
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

export const marquee = [
  'Backend Developer',
  'Python · Django',
  'REST APIs',
  'PostgreSQL',
  'Scalable Systems',
]
