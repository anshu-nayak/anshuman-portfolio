// All site content lives here. Edit this file to update the portfolio —
// no component changes needed for new jobs, projects or certifications.

export const profile = {
  name: 'Anshuman Nayak',
  initials: 'AN',
  role: 'Frontend Engineer',
  tagline: 'Angular · Enterprise Web Applications · Data Analytics & Consulting',
  availability: 'Open to frontend, analytics & consulting roles',
  photo: 'profile.jpg', // lives in /public
  location: 'Bengaluru, India',
  summary:
    'Frontend engineer with two years of experience building Angular applications for multinational clients in IT service management, asset management and procurement. I take features from first wireframe to production build, and I also contribute to the Spring Boot backend behind them. I moved into engineering from analytics, so I pay attention to what the data on a screen actually tells the person using it.',
  about: [
    'I build enterprise web apps that stay fast and secure at scale: ITSM suites covering incidents, problems and changes, IFRS 16 lease accounting with amortisation schedules, approval workflows gated by user role, and GenAI-powered contract and catalogue modules.',
    'I built several of these products from scratch on Angular standalone architecture. That work included designing the UI, running client demos, collecting feedback and shipping features tied to business goals.',
    'My background is in agricultural engineering, an MBA in agribusiness and a PG program in business analytics. That path pushes me to work out the business problem before I start writing code.',
  ],
  stats: [
    { value: '2+', label: 'Years in frontend' },
    { value: '6+', label: 'Enterprise products' },
    { value: '25+', label: 'Reporting screens' },
    { value: '5', label: 'Certifications' },
  ],
  contact: {
    email: 'anshumannayak98@gmail.com',
    phone: '+91 7377939100', // set to null to hide it on the public site
    linkedin: 'https://www.linkedin.com/in/anshuman-nayak-82705213a',
    github: 'https://github.com/anshu-nayak',
  },
  // Drop your CV in /public as resume.pdf and set this to 'resume.pdf'
  resumeUrl: null,
}

export const experience = [
  {
    role: 'Junior Software Engineer',
    company: 'ezAtlas Pvt Ltd',
    location: 'Bengaluru, India',
    period: 'Oct 2024 – Present',
    current: true,
    points: [
      'Built ezHelpDesk, an ITIL-aligned ITSM suite covering incidents, problems, change and service requests, a knowledge base, SLA/OLA breach tracking, and executive and NOC dashboards.',
      'Built the IFRS 16 lease accounting module for DAAS, including amortisation schedules, present-value calculators and multi-currency views.',
      'Implemented the PO → GRN → contract → maker-checker approval lifecycle with group-based access control.',
      'Moved heavy report exports to a queued server-side pipeline with job polling and signed download links, which ended the browser freezes users hit on large reports.',
      'Contributed Java 17 / Spring Boot 3 REST APIs for reporting, KPIs, bulk imports and master data.',
      'Built the Vendor and Network Management Systems from scratch, rolled out i18n across a global S2P platform, and added Keycloak auth with idle-timeout logout.',
    ],
    tags: ['Angular 18', 'TypeScript', 'RxJS', 'Spring Boot', 'Keycloak', 'ECharts'],
  },
  {
    role: 'Area Sales Manager',
    company: 'AMA Agricultural Trading Pvt. Ltd.',
    location: 'Baleshwar, India',
    period: 'May 2022 – Nov 2022',
    points: [
      'Managed an agricultural product portfolio and grew the client base beyond target.',
      'Coordinated supply chain, logistics and service teams to keep deliveries and after-sales support on time.',
    ],
    tags: ['Sales strategy', 'Client management'],
  },
  {
    role: 'Supervisor',
    company: 'Advanced Board of Community Development',
    location: 'Odisha, India',
    period: 'Aug 2020 – Sep 2021',
    points: ['Ran day-to-day department operations and kept work moving on schedule.'],
    tags: ['Operations'],
  },
  {
    role: 'Internship Trainee',
    company: 'Jain Irrigation Inc.',
    location: 'Chittoor, Andhra Pradesh',
    period: 'Jul 2018 – Oct 2018',
    points: ['Field training in micro-irrigation systems and agricultural engineering practice.'],
    tags: ['Irrigation', 'Field work'],
  },
  {
    role: 'Summer Intern',
    company: 'Jain Irrigation Inc.',
    location: 'Jalgaon, Maharashtra',
    period: 'Jun 2018',
    points: ['Summer internship at the Jain Irrigation headquarters.'],
    tags: ['Internship'],
  },
]

// category: 'Professional' | 'Personal' | 'Analytics' | 'Academic'
// status (optional): 'Completed' | 'In progress'
// `details` is optional long-form content shown in the project dialog —
// each entry is { heading, body } where body is a string or array of bullets.
export const projects = [
  {
    id: 'ezhelpdesk',
    title: 'ezHelpDesk — ITSM Platform',
    category: 'Professional',
    client: 'MNC clients · ezAtlas',
    summary:
      'An ITIL-aligned service management suite covering incidents, problems, change and service requests, a knowledge base, and SLA/OLA tracking.',
    stack: ['Angular', 'TypeScript', 'ECharts', 'ApexCharts', 'ngx-translate'],
    highlights: [
      'Full ticket lifecycle (raise, categorise, assign, escalate, close) with workflow rules teams configure themselves',
      'SLA and OLA configuration with breach tracking and compliance dashboards',
      'Executive and NOC dashboards showing volume, ageing, breaches and resolution trends',
      'Knowledge base with authoring, a publication workflow and search',
      'Multilingual admin screens for departments, entities, user groups and email templates',
      'Lighter standalone Ticketing Portal (TICKET-TOOL) for smaller deployments',
    ],
  },
  {
    id: 'daas',
    title: 'DAAS — Digital Asset & Lease Management',
    category: 'Professional',
    client: 'MNC clients · ezAtlas',
    summary:
      'Asset and lease platform with IFRS 16 accounting, a contract lifecycle with maker-checker approvals, and 25+ AP/AR reporting screens.',
    stack: ['Angular', 'Java 17', 'Spring Boot 3', 'PostgreSQL', 'Apache POI'],
    highlights: [
      'IFRS 16 amortisation schedules covering lease liability, ROU asset, interest and depreciation',
      'PO → GRN → contract → verification → maker-checker approval, including novation',
      'Group-based access control enforced in both the UI and the action handlers',
      'Queued server-side Excel export pipeline with job polling and signed links',
      '25+ reporting screens with server-side pagination and Excel/PDF/CSV export',
      'Backend REST APIs for reports, KPIs, bulk imports and master data',
    ],
  },
  {
    id: 'vms-nms',
    title: 'Vendor & Network Management Systems',
    category: 'Professional',
    client: 'MNC clients · In-house',
    summary:
      'Two products built from scratch on Angular standalone architecture, sharing a library of reusable components, services and guards.',
    stack: ['Angular Standalone', 'Dashonic', 'Chart.js', 'RxJS'],
    highlights: [
      'End-to-end ownership, from UI/UX design through client demos to delivery',
      'Forecasting and trend dashboards built on clients’ historical data',
      'Modular, scalable architecture for managing network assets and configurations',
    ],
  },
  {
    id: 's2p-genai',
    title: 'Global Source-to-Pay & GenAI Contracts',
    category: 'Professional',
    client: 'MNC client · ezAtlas',
    summary:
      'Enterprise procurement platform with full-app internationalisation and generative-AI modules for contract creation and catalogue management.',
    stack: ['Angular', 'i18n', 'Keycloak', 'ng-idle', 'REST APIs'],
    highlights: [
      'Rolled out i18n across the whole application for non-English regions',
      'Optimised GenAI-driven contract creation and intelligent catalogue management',
      'Idle-timeout auto-logout with HostListener and ng-idle for session compliance',
      'Performance gains through refactoring and API tuning',
    ],
  },
  {
    id: 'price-calculator-otel',
    title: 'Price Calculator API with OpenTelemetry',
    category: 'Personal',
    status: 'Completed',
    client: 'Personal project · Go',
    summary:
      'A Go REST API that calculates prices including tax, instrumented end to end with OpenTelemetry distributed tracing.',
    stack: ['Go', 'Gorilla Mux', 'OpenTelemetry', 'OTLP', 'OTel Collector'],
    highlights: [
      'REST endpoints to set the base price and tax rate and to calculate the total',
      'Every handler wrapped with otelhttp for automatic request tracing',
      'Traces exported over OTLP/HTTP to an OpenTelemetry Collector with a custom config',
      'Service resource attributes set with OTel semantic conventions',
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/anshu-nayak/price-calculator-opentelementry' }],
  },
  // Hidden for now — uncomment to show the AWS / Terraform / Jenkins project again.
  //   {
  //     id: 'aws-s3-cicd',
  //     title: 'AWS S3 Static Website with Terraform & Jenkins',
  //     category: 'Personal',
  //     status: 'In progress',
  //     client: 'Personal project · Cloud & DevOps',
  //     summary:
  //       'A static website hosted on Amazon S3, with the infrastructure provisioned by Terraform and deployments automated by a Jenkins CI/CD pipeline.',
  //     stack: ['AWS S3', 'Terraform', 'Jenkins', 'AWS CLI', 'HTML/CSS/JS'],
  //     highlights: [
  //       'Infrastructure as Code: S3 website hosting defined in Terraform',
  //       'Jenkinsfile pipeline that deploys website changes automatically',
  //       'Build environment set up on Amazon Linux 2023 with Java 17 and Jenkins',
  //     ],
  //     links: [
  //       { label: 'Terraform repo', url: 'https://github.com/anshu-nayak/AWS-Terraform' },
  //       { label: 'Website repo', url: 'https://github.com/anshu-nayak/AWS-S3-Web_app' },
  //     ],
  //   },
  {
    id: 'churn',
    title: 'Banking Customer Churn Analysis',
    category: 'Analytics',
    client: 'PGP Business Analytics · MIT-WPU',
    summary:
      'Power BI analysis of banking customer churn trends, identifying the segments and drivers behind attrition.',
    stack: ['Power BI', 'DAX', 'Excel'],
    highlights: ['Interactive churn dashboards by segment, tenure and product', 'Driver analysis to support retention decisions'],
  },
  {
    id: 'millets',
    title: 'Consumer Demand Mapping — PRADAN',
    category: 'Analytics',
    client: 'MBA project · Utkal University · 2020',
    summary:
      'Consumer awareness and demand mapping for small millets, aromatic rice, groundnut and dal in urban markets.',
    stack: ['Market research', 'Survey design', 'Excel'],
    highlights: ['Urban consumer survey and demand mapping', 'Recommendations for market linkage'],
  },
  {
    id: 'irrigation',
    title: 'Smart Irrigation System',
    category: 'Academic',
    client: 'B.Tech capstone · Team leader',
    summary:
      'Designed a smart irrigation system for watershed-scale water management. The accompanying thesis was published.',
    stack: ['Agricultural Engineering', 'Sensors', 'Watershed analysis'],
    highlights: ['Led the capstone team', 'Published: “A Study on Smart Irrigation System on a Watershed”'],
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['Angular 18', 'TypeScript', 'RxJS', 'Standalone Components', 'Reactive Forms', 'JavaScript (ES6+)', 'HTML5', 'SCSS', 'Bootstrap 5'],
  },
  {
    group: 'Architecture',
    items: ['Reusable component libraries', 'Lazy-loaded routing', 'Route guards', 'HTTP interceptors', 'Server-side pagination', 'Async job queues'],
  },
  {
    group: 'Security & Access',
    items: [
      'Keycloak',
      'OAuth2 / OIDC',
      'JWT',
      // 'RBAC',
      'Session idle timeout',
      'Permission-gated UI',
    ],
  },
  {
    group: 'Backend',
    items: ['Python', 'Java 17', 'Spring Boot 3', 'Go', 'Spring Data JPA', 'REST APIs', 'PostgreSQL', 'Apache POI', 'OpenAPI / Swagger', 'Maven', 'OpenTelemetry'],
  },
  // Hidden for now — Go and OpenTelemetry moved to Backend above.
  // {
  //   group: 'Cloud & DevOps',
  //   items: ['AWS S3', 'Terraform', 'Jenkins', 'Linux'],
  // },
  {
    group: 'Dashboards & Reporting',
    items: ['ECharts', 'ApexCharts', 'Chart.js', 'SheetJS', 'jsPDF', 'Excel / CSV / PDF export'],
  },
  {
    group: 'Analytics',
    items: ['Power BI', 'Tableau', 'SAS', 'Orange', 'SQL', 'MS Excel', 'Forecasting'],
  },
  {
    group: 'AI Tooling',
    items: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'GenAI integration'],
  },
  {
    group: 'Tools & Process',
    items: [
      'Git',
      'Azure DevOps',
      'CI/CD',
      'Angular CLI',
      'npm',
      // 'Jasmine',
      // 'Karma',
      'Agile / Scrum',
      'i18n',
    ],
  },
  {
    group: 'Domain',
    items: ['ITSM / ITIL', 'IFRS 16', 'Source-to-Pay', 'Maker-checker approvals'],
  },
]

export const education = [
  {
    degree: 'Post Graduate Program in Business Analytics',
    school: 'MIT World Peace University',
    location: 'Pune, India',
    period: '2023 – 2024',
    note: 'Analysed banking customer churn in Power BI; completed the PwC and Accenture job simulations.',
  },
  {
    degree: 'MBA, Agricultural Business & Management',
    school: 'Utkal University',
    location: 'Bhubaneswar, India',
    period: '2019 – 2021',
    note: 'Consumer awareness and demand mapping project with PRADAN.',
  },
  {
    degree: 'B.Tech, Agricultural Engineering',
    school: 'Centurion University of Technology & Management',
    location: 'Paralakhemundi, India',
    period: '2015 – 2019',
    note: 'Capstone: Smart Irrigation System (team leader). Published thesis.',
  },
]

// Add `url` to any entry to link to the credential
export const certifications = [
  { title: 'Angular — The Complete Guide (2025 Edition)', issuer: 'Udemy', url: null },
  { title: 'Go — The Complete Guide', issuer: 'Udemy', url: null },
  { title: 'Power BI Job Simulation', issuer: 'PwC Switzerland · Forage', url: null },
  { title: 'Data Analytics & Visualization Job Simulation', issuer: 'Accenture North America · Forage', url: null },
  { title: 'Microsoft Excel — Beginner to Advanced', issuer: 'Udemy', url: null },
]

export const publications = [
  { title: 'A Study on Smart Irrigation System on a Watershed', venue: 'B.Tech thesis · Centurion University', url: null },
]

export const languages = [
  { name: 'Odia', level: 'Native' },
  { name: 'Hindi', level: 'Proficient (C2)' },
  { name: 'English', level: 'Advanced (C1)' },
]
