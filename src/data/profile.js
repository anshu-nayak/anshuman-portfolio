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
    'I build enterprise web apps that stay fast and secure at scale: IT-asset leasing with IFRS lease accounting, vendor portals with RFx and reverse auctions, ITSM suites with SLA tracking and knowledge bases, and network-monitoring dashboards.',
    'I built two products from the first commit (ezNMS and ezNexus) on Angular standalone architecture, and I was the lead frontend contributor on two more (DAAS and ezVMS), which run across several enterprise client deployments.',
    'My background is in agricultural engineering, an MBA in agribusiness and a PG program in business analytics. That path pushes me to work out the business problem before I start writing code.',
  ],
  stats: [
    { value: '2+', label: 'Years in frontend' },
    { value: '8', label: 'Enterprise products' },
    { value: '8+', label: 'Client deployments' },
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
      'Largest frontend contributor to DAAS, an IT-asset leasing platform: built the lease contract lifecycle (novation, extension, buyout, settlement), IFRS postings to SAP, and the PO → GRN flow.',
      'Built DAAS’s “Download Box” async export pipeline (queued jobs, status polling, time-limited links), which ended the browser freezes users hit on large reports.',
      'Lead frontend developer on ezVMS, a vendor management system with buyer and supplier portals, across the core product and 4 client versions: RFx, reverse auctions, procure-to-pay and quality modules.',
      'Built ezNMS and ezNexus from the first commit: 7 monitoring dashboards, and a 14-module unified IT management platform with role-based navigation.',
      'Built the SLA/OLA, knowledge base and 8 ECharts dashboards for ezHelpDesk (ITSM), and the helpdesk/SLA module for an asset-management product used by 3 clients.',
      'On the Source-to-Pay platform, took the app to 7 languages, built sourcing-request, RFP and auction screens, and added session auto-logout with Keycloak.',
      'Worked across auth and security (Keycloak, JWT, SSO/SAML, MFA), Azure Pipelines CI, and Spring Boot REST APIs for reports and master data.',
    ],
    tags: ['Angular 18', 'TypeScript', 'RxJS', 'ECharts', 'Keycloak', 'Azure Pipelines', 'Spring Boot'],
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
    id: 'daas',
    title: 'DAAS — Device-as-a-Service Leasing Platform',
    category: 'Professional',
    client: 'Enterprise IT clients · ezAtlas · Lead contributor',
    summary:
      'Enterprise IT-asset leasing platform covering procurement, the lease contract lifecycle, IFRS lease accounting postings to SAP, AP/AR schedules and reporting. I was the largest frontend contributor.',
    stack: ['Angular 18', 'RxJS', 'Keycloak', 'Server-Sent Events', 'ngx-translate', 'ApexCharts', 'ECharts', 'xlsx', 'jsPDF'],
    highlights: [
      'Lease contract lifecycle: amendment, novation, extension, return, buyout, settlement and knock-off',
      'IFRS postings and AP journal entries with SSE-driven posting jobs, reversals and SAP export',
      '“Download Box” async export pipeline with queued jobs, status polling, per-user quotas and time-limited download links',
      'PO → GRN flow with partial acceptance, serial-number sheets and exhibit-based GRN approval',
      'Worked on 35 AP/AR report screens and built 9 of them, with server-side search, pagination and Excel/PDF export',
      'Keycloak SSO with group- and role-based access on approval screens',
    ],
    details: [
      {
        heading: 'Scope',
        body: 'Largest contributor to the frontend, with about 44% of commits. I built 90+ components and 50+ services, and brought the platform to multiple enterprise clients with per-client branding and environment builds.',
      },
      {
        heading: 'Lease accounting',
        body: [
          'Present-value, lease-schedule and AR calculators with schedule generation and interest-rate tolerance checks',
          'Multi-currency schedules and exports driven by effective-dated exchange rates',
          'IFRS report, monthly GL report and SAP GRN posting',
        ],
      },
      {
        heading: 'Also built',
        body: [
          'Activity-freeze windows with enforcement and email notifications',
          'Demand forecast, catalogue/marketplace, store requests and non-inventory POs',
          'Inventory, receipts, delivery and AP/AR dashboards with drill-throughs, asset ageing and lease-expiry views',
          'Security hardening (HTML-injection guards, 401 re-login loop fix) and Azure Pipelines multi-environment builds',
        ],
      },
    ],
  },
  {
    id: 'ezvms',
    title: 'ezVMS — Vendor Management System',
    category: 'Professional',
    client: 'Core product + 4 client versions · ezAtlas · Lead frontend developer',
    summary:
      'Buyer and supplier portals covering supplier onboarding, RFx and reverse auctions, purchase orders through invoices, and quality management. I joined on day two and became the top contributor across the core product and its client versions.',
    stack: ['Angular 18 Standalone', 'Dashonic', 'ECharts', 'ApexCharts', 'JWT', 'SSO / SAML', 'exceljs', 'jsPDF'],
    highlights: [
      'Masters framework (UOM, category, item, tax, payment terms and more) with API integration',
      'RFx automation: Smart RFQ, auto-created reverse auctions with live ranking, and a process-trail audit view',
      'Procure-to-pay: PO amend, short-close and cancel, delivery schedules, ASN, inward, e-way bill and invoices on both portals',
      'Auth: JWT with token refresh, SSO/SAML, MFA, account lock and inactivity auto-logout',
      'Quality modules: step-wise corrective-action (DPCAR) workflows, SQA and supplier audits',
      'Forecast dashboard, first prototyped as a solo build and then merged into the product',
    ],
    details: [
      {
        heading: 'Scale',
        body: 'Core product plus 4 client versions in cement, manufacturing, electrical, education and cybersecurity. 130–270 components per version across about 37 buyer and supplier modules.',
      },
      {
        heading: 'Client-specific work',
        body: [
          'Multi-entity filtering for PO, GRN and invoices',
          'Reusable Excel/CSV import with preview, validation and background retry',
          'Supplier bulk upload with credential generation, and GRN upload',
          'Buyer KPI dashboard, purchase requisitions, RFP templates, helpdesk and vendor onboarding',
          'UI for AI-based document extraction',
          'GSTIN validation and autofill through a reusable GST service',
          'PO lifecycle fixes (direct PO, amend, approve, cancel, short-close) and session-timeout/token-refresh fixes',
        ],
      },
      {
        heading: 'Foundations',
        body: 'Shared services, directives, pipes and list/table components reused across all four deployments, plus Azure Pipelines CI with dev, UAT and prod configs.',
      },
    ],
  },
  {
    id: 'ezhelpdesk',
    title: 'ezHelpDesk — ITSM & Ticketing',
    category: 'Professional',
    client: 'ITSM product · ezAtlas',
    summary:
      'ITIL-aligned service management suite, plus a lighter standalone ticketing portal. I built its SLA/OLA, knowledge base and dashboard modules and later maintained the ticketing portal on my own.',
    stack: ['Angular 18', 'ECharts', 'ng-bootstrap', 'RxJS', 'jsPDF', 'xlsx'],
    highlights: [
      'SLA/OLA module: global and client-specific SLAs, business hours, escalation, penalties, breach register and compliance',
      '8 ECharts dashboards: executive, NOC (role-based), SLA, incident, change, problem, knowledge and ticketing overviews',
      'Knowledge base with a draft → review → approve → publish workflow and search',
      'Ticket lifecycle: tabbed update form, parent/child incidents, reopen, watchers and multi-file attachments',
      'Sole developer on the standalone ticketing portal from Jan to Apr 2026',
    ],
    details: [
      {
        heading: 'Also built',
        body: [
          'Service layer for incidents, change requests, problems, SLA, OLA and knowledge',
          'Domain and Ticket Group masters, custom validators and input directives',
          'SSO login with a token service, and Azure Pipelines CI',
          'Cleanup that removed legacy modules (about 75k lines) when the product was split from the asset-management codebase',
        ],
      },
    ],
  },
  {
    id: 'ams-helpdesk',
    title: 'Asset Management — Helpdesk & SLA Module',
    category: 'Professional',
    client: '3 client deployments · ezAtlas',
    summary:
      'Fixed-asset management platform covering the asset lifecycle, from GRN through allocation, transfer and maintenance to disposal and depreciation. I built its incident/helpdesk ticketing module and took it from first build to production in about five months.',
    stack: ['Angular 18', 'Reactive Forms', 'ECharts', 'ng-select', 'Azure Pipelines'],
    highlights: [
      'Helpdesk ticketing: new ticket, list and detail views with dynamic tabbed forms, child incidents, activity history and attachments',
      'SLA policies with multi-level escalation matrices, timers, breach flags and P1–P4 priorities',
      'Ticketing overview dashboard with drill-down into incident reports (list/card views and export)',
      'Popup-based SSO login with route guards on ticketing screens',
      'Mail configuration, domain and ticket-group masters, and an end-user role guard',
    ],
  },
  {
    id: 'eznexus',
    title: 'ezNexus — Unified IT Management Platform',
    category: 'Professional',
    client: 'Next-gen product · ezAtlas · Built from scratch',
    summary:
      'A single Angular app that brings ITOM, ITSM, ITAM, SLA, leasing, purchase requests, risk, projects and analytics together under one shell with role-based navigation. I made the initial commit and wrote nearly all of the code.',
    stack: ['Angular 18 Standalone', 'Functional interceptors', 'ECharts', 'ApexCharts', 'Leaflet', 'FullCalendar'],
    highlights: [
      '14 lazy-loaded domain modules, about 320 standalone components and a central navigation config',
      'Auth, no-auth and role guards, plus auth and error HTTP interceptors',
      'ITOM: discovery, servers, alerts, network, APM, CMDB, patch, compliance, capacity and maintenance',
      'ITAM: assets, transfers, audit, depreciation, warranty and software',
      'Offline demo mode: an HTTP interceptor serves seeded data from browser storage for client demos',
    ],
  },
  {
    id: 'eznms',
    title: 'ezNMS — Network & IT Operations Monitoring',
    category: 'Professional',
    client: 'Product · ezAtlas · Built from scratch',
    summary:
      'Network and IT-operations monitoring frontend that I built from the first commit on the Dashonic template with Angular standalone components. Later it absorbed ticketing, masters, leasing and SLA modules.',
    stack: ['Angular 18', 'Dashonic', 'ECharts', 'ApexCharts', 'Maps'],
    highlights: [
      '7 monitoring dashboards: network, server performance, traffic, devices, cloud, patches and certificates',
      'Agent management with shared table, pagination and modal components',
      'SLA dashboards (commercial, operations and governance) with KPI, measurement and penalty forms',
      'App foundation (layout, login, routing), Azure Pipelines CI and environment configs',
    ],
  },
  {
    id: 's2p',
    title: 'Source-to-Pay e-Procurement Platform',
    category: 'Professional',
    client: 'Global procurement product · ezAtlas · My first project',
    summary:
      'Enterprise sourcing and procurement app for buyers, vendors and approvers. It covers sourcing requests, RFP/RFQ with technical and commercial bids, negotiation, reverse auctions and reports. Version 2 added catalogue, cart, POs and contracts.',
    stack: ['Angular 16', 'ngx-translate', 'Keycloak', 'RxJS', 'ApexCharts', 'xlsx', 'jsPDF'],
    highlights: [
      'Took the app multilingual: 7 languages (en, de, es, fr, hi, ja, zh), about 1,430 keys each, across 73 templates',
      'Sourcing Request module: autosave, open/close, line items and date filters',
      'RFP lifecycle (create, launch, modify, negotiation, sanction approval) and the RFP/SR/reminder email templates',
      'Reverse-auction screens: bidding refresh, price discovery and auction reports',
      'Session auto-logout: HostListener activity tracking, 20-minute inactivity timer, translated countdown warning and Keycloak logout',
      'Resolved about 150 tracked bugs across sourcing, auctions, reports and dashboards',
    ],
    details: [
      {
        heading: 'Version 2 — order management',
        body: [
          'Catalogue with images, cart and wishlist',
          'PO create, approval, view and preview rework',
          'Non-commercial contracts and contract-status optimisation',
          'Form redesign across vendor, user, company, budget and DOA masters',
        ],
      },
      {
        heading: 'Performance',
        body: 'Search debouncing, fewer dashboard API calls, buyer-profile and contract-status optimisation, and inline styles moved into global SCSS.',
      },
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
    items: ['Reusable component libraries', 'Lazy-loaded routing', 'Route guards', 'HTTP interceptors', 'Server-side pagination', 'Async job queues', 'Server-Sent Events', 'Multi-tenant client builds'],
  },
  {
    group: 'Security & Access',
    items: [
      'Keycloak',
      'OAuth2 / OIDC',
      'JWT',
      'SSO / SAML',
      'MFA',
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
    items: ['ECharts', 'ApexCharts', 'Chart.js', 'Leaflet', 'SheetJS', 'ExcelJS', 'jsPDF', 'Excel / CSV / PDF export'],
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
    items: ['ITSM / ITIL', 'ITOM / ITAM', 'IFRS lease accounting', 'Vendor management', 'RFx & reverse auctions', 'Source-to-Pay', 'Maker-checker approvals'],
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
