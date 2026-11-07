/**
 * All of the site's content lives here.
 * Replace any remaining [bracketed] placeholders with your own details.
 */

export type ProjectCategory = "fullstack" | "frontend" | "mobile" | "ml";

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: "fullstack", label: "full stack" },
  { id: "frontend", label: "front end" },
  { id: "mobile", label: "mobile" },
  { id: "ml", label: "machine learning" },
];

export interface CaseStudySection {
  /** Used for the in-page link, e.g. "features". */
  id: string;
  title: string;
  text?: string;
  bullets?: string[];
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  featured?: boolean;
  /** Path under /public. Leave empty to show the project's name instead. */
  image?: string;
  /** "contain" for screenshots that shouldn't be cropped (phone screens, charts). */
  imageFit?: "cover" | "contain";
  links: { demo?: string; source?: string };
  caseStudy: {
    headline: string;
    role: string;
    timeline: string;
    status: string;
    sections: CaseStudySection[];
    architecture?: { summary: string; steps: string[] };
    results?: { value: string; label: string }[];
  };
}

export interface Job {
  period: string;
  role: string;
  company: string;
  /** Plain bullet points, or grouped by team/product when `teams` is set. */
  highlights?: string[];
  teams?: { name: string; highlights: string[] }[];
}

export const site = {
  name: "Suhana Ayisha",
  handle: "suhanaayisha",
  role: "Senior Front-End Software Engineer",
  tagline: "fast, scalable web apps",
  intro:
    "Front-end engineer with 6+ years of experience building customer-facing features, enterprise CMS platforms and B2B apps — on web and mobile — for Noon, one of the Middle East's largest e-commerce platforms.",
  availability: "Currently at Noon",
  location: "Dubai, UAE",
  email: "suhanaayisha@gmail.com",
  resumeUrl: "/resume.pdf",
  /** Path under /public. Set to "" to hide the photo. */
  photo: "/profile.png",
  socials: {
    github: "https://github.com/suhanaayisha",
    linkedin: "https://www.linkedin.com/in/[username]",
    x: "https://x.com/[username]",
  },
  motto: { quote: "What we have to learn to do, we learn by doing.", author: "Aristotle" },
  /** Short summary shown in the hero's terminal card. */
  terminal: {
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["React", "Next.js", "React Native", "SolidJS"],
    infra: ["Node.js", "Docker", "Jenkins", "Kubernetes"],
  },
  /** Full skills list shown in the About section. */
  skills: [
    {
      label: "frontend",
      items: ["React", "Next.js", "React Native", "Expo", "SolidJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "CSS Modules", "SCSS", "Zustand", "Redux"],
    },
    { label: "backend & apis", items: ["Node.js", "REST APIs", "Firebase", "Auth flows"] },
    { label: "testing", items: ["Jest", "Cypress", "Pytest", "Tavern"] },
    {
      label: "tools",
      items: ["Git", "GitHub", "Docker", "Jenkins", "Kubernetes", "Yarn", "npm", "Bun", "Android Studio", "Jira", "Lighthouse", "WebPageTest"],
    },
  ],
  about: [
    "Hi there! I'm a front-end software engineer based in Dubai with 6+ years of experience building scalable, high-performance web applications. I stumbled into software by chance, but the more I got into it, the more I loved it.",
    "At Noon I've worked across the core marketplace, the enterprise CMS that powers Noon, Namshi, Noon Minutes and Home Services, and the Noon Business B2B platform on web and mobile. I care about reusable component architecture, clean state management and front-end performance — and about always learning, which led me to an M.Sc. in Artificial Intelligence & Computer Science.",
  ],
  experience: [
    {
      period: "2021 — Now",
      role: "Software Development Engineer",
      company: "Noon",
      teams: [
        {
          name: "Noon Business",
          highlights: [
            "Build the front end for Noon Business with React, Next.js and TypeScript.",
            "Develop mobile features with React Native, Expo and Android Studio.",
            "Build reusable UI components and integrate REST APIs.",
            "Work with Product, Design, Backend and QA through feature delivery, code reviews and production support.",
          ],
        },
        {
          name: "Enterprise CMS",
          highlights: [
            "Built the multi-marketplace CMS powering Noon, Namshi, Noon Minutes and Home Services.",
            "Developed reusable widgets including banners, navigation and product carousels.",
            "Designed the packaging architecture for multi-marketplace adoption.",
            "Migrated legacy class components to hooks; added i18n, Zustand state management and seller analytics dashboards.",
            "Built an internal QA application with SolidJS.",
          ],
        },
        {
          name: "Core Noon Marketplace",
          highlights: [
            "Developed customer-facing features for the core Noon e-commerce platform.",
            "Built reusable React components, integrated APIs, and delivered UI enhancements and performance improvements.",
          ],
        },
      ],
    },
    {
      period: "2019 — 2021",
      role: "Software Engineer",
      company: "Tenderd",
      highlights: [
        "Built responsive web applications with React and TypeScript.",
        "Implemented Firebase authentication and developed Node.js backend services.",
        "Created machine-learning dashboards and wrote unit tests.",
      ],
    },
    {
      period: "2019",
      role: "Software Developer Intern",
      company: "Dubizzle",
      highlights: [
        "Built automated testing pipelines with Cypress, Jest, Pytest and Tavern.",
        "Created Jenkins CI/CD pipelines and used Docker for containerization.",
        "Used Lighthouse for performance testing of deployed apps.",
      ],
    },
  ] as Job[],
  education: [
    {
      period: "2023 — 2025",
      degree: "M.Sc. Artificial Intelligence & Computer Science",
      school: "Heriot-Watt University Dubai",
      notes: [
        "Final project: Handwriting-Based Gender Classification Using Deep Learning and Handcrafted Feature Fusion",
      ],
    },
    {
      period: "2015 — 2019",
      degree: "B.Tech. Software Engineering",
      school: "Manipal Academy of Higher Education Dubai",
      notes: [
        "Winner, Manipal Hackathon 2017",
        "Best Paper & Poster: MAHEBOT",
        "Research publications: IJAER, IRJAET, IJET",
      ],
    },
  ],
};

const gh = (repo: string) => `https://github.com/suhanaayisha/${repo}`;

export const projects: Project[] = [
  {
    slug: "eurosat-landuse-classification",
    name: "EuroSAT Land-Use Classifier",
    year: "2026",
    summary:
      "Classifies Sentinel-2 satellite tiles into ten land-use types, going from a 32% baseline to 98.1% accuracy with a fine-tuned ResNet-18. The live demo runs both neural networks entirely in the browser.",
    category: "ml",
    tags: ["Python", "PyTorch", "scikit-learn", "ONNX Runtime Web"],
    featured: true,
    image: "/projects/eurosat.webp",
    imageFit: "contain",
    links: {
      demo: "https://huggingface.co/spaces/suhanaayisha/eurosat-classifier",
      source: gh("eurosat-landuse-classification"),
    },
    caseStudy: {
      headline: "from 32% to 98.1% accuracy on satellite images",
      role: "Solo project",
      timeline: "2026",
      status: "Live demo",
      sections: [
        {
          id: "problem",
          title: "The problem",
          text: "EuroSAT has 27,000 RGB tiles of 64×64 pixels from the Sentinel-2 satellite, each labelled as one of ten land-use classes such as Forest, Highway, Residential or SeaLake. Every model is trained on the same stratified 80/20 split and scored once on the same 5,400 held-out tiles. Model selection only ever uses cross-validation or a validation split, so the test set never influences a choice.",
        },
        {
          id: "findings",
          title: "What I found",
          bullets: [
            "The input representation mattered more than the model: Naive Bayes jumps from 32% on raw pixels to 75% on a 378-dimension descriptor of colour, HSV, HOG and LBP texture features.",
            "The classes overlap. k-means cleanly recovers SeaLake and Forest but blurs the crop and vegetation classes, and the data has no natural ten-cluster structure.",
            "A single decision tree overfits (99.9% train, ~78% cross-validated); random forests and gradient boosting fix that, reaching 88.4% and 92.0%.",
            "Letting the network learn its own features was the biggest step: a 289k-parameter CNN trained from scratch reaches 97.6%, and fine-tuning ResNet-18 adds only half a point more.",
            "Most of the remaining 102 errors are genuinely ambiguous tiles, such as a highway cutting through a forest, or crop types that look alike at 10 m resolution.",
          ],
        },
        {
          id: "demo",
          title: "The demo",
          text: "Both CNNs are exported to ONNX and checked against PyTorch on the full test set, then served as a static Hugging Face Space. Inference runs in the browser with ONNX Runtime Web (WebAssembly), so there is no server: pick a tile or upload your own and the two models classify it side by side.",
        },
      ],
      architecture: {
        summary: "A reusable Python package for data, features, evaluation and models, with one script per stage of the analysis.",
        steps: ["Sentinel-2 tiles", "Features & augmentation", "NB → trees → CNNs", "ONNX export", "Browser demo"],
      },
      results: [
        { value: "98.1%", label: "test accuracy, fine-tuned ResNet-18" },
        { value: "97.6%", label: "CNN trained from scratch" },
        { value: "92.0%", label: "best with hand-crafted features" },
        { value: "32%", label: "starting baseline" },
      ],
    },
  },
  {
    slug: "a2z-auto-parts",
    name: "A2Z Auto Parts",
    year: "2026",
    summary:
      "The internal app a UAE used auto parts business runs on: enquiries, quotes, invoices and credit notes, with an optional WhatsApp intake that uses Claude to turn workshops' messages, photos and voice notes into enquiries.",
    category: "fullstack",
    tags: ["Next.js", "React 19", "Express", "MongoDB", "Claude API"],
    links: { source: gh("a2z-auto-parts") },
    caseStudy: {
      headline: "running a parts business from enquiry to invoice",
      role: "Solo project",
      timeline: "2026",
      status: "In production · internal tool",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Enquiries with several items, each with Used, Aftermarket or Original options and their own lead time, cost, price and discount.",
            "Numbered quotes with revisions, exported as a PDF or as WhatsApp text the workshop can answer with codes like “1A 2B”.",
            "Invoices created from a quote, including part invoicing. Numbers are assigned on the server so two people can never get the same one, and issued invoices can't be edited.",
            "Credit notes, part payments, overdue flags and delivery tracking with due dates worked out from lead times.",
            "A dashboard of what needs pricing, quotes awaiting reply, deliveries due, sales, profit and unpaid invoices.",
          ],
        },
        {
          id: "whatsapp",
          title: "WhatsApp intake",
          bullets: [
            "A listener joins WhatsApp as a linked device and saves every message, photo and voice note to MongoDB.",
            "Messages from one chat are batched once the chat goes quiet, voice notes are transcribed, and Claude decides whether it's a parts request and lists the items with a confidence score.",
            "Requests from known workshops above 85% confidence become enquiries automatically; everything else waits in a review tab.",
            "VINs are decoded with the NHTSA vPIC service, and prices the team sends in WhatsApp are matched back to the right enquiry.",
            "Quotes can be sent back from the app, one at a time, with safeguards so a message is never sent late or twice.",
          ],
        },
        {
          id: "built",
          title: "How it's built",
          bullets: [
            "One Node process serves both the Next.js screens and the Express API, so the browser talks to a single site and the login cookie stays secure.",
            "MongoDB doubles as the job queue: each batch is claimed atomically and retried up to three times, and every decision is written to an audit log.",
            "Photos are shrunk in the browser before upload, and API tests run against an in-memory MongoDB.",
          ],
        },
      ],
      architecture: {
        summary: "The web app and API run as one Render service, with the WhatsApp listener as an optional background worker. The live deployment is private to the business.",
        steps: ["WhatsApp listener", "MongoDB queue", "Claude worker", "Express API", "Next.js app"],
      },
    },
  },
  {
    slug: "menuqr",
    name: "MenuQR",
    year: "2026",
    summary:
      "Turns a restaurant's PDF menu into a mobile-friendly menu page and a printable QR code. A full-stack Next.js app where every change is type-checked, built and tested end to end before Render deploys it.",
    category: "fullstack",
    tags: ["Next.js 16", "React 19", "TypeScript", "MongoDB", "Cloudflare R2", "GitHub Actions"],
    image: "/projects/menuqr.webp",
    imageFit: "contain",
    links: { demo: "https://menuqr-hwlp.onrender.com", source: gh("menuqr-generator") },
    caseStudy: {
      headline: "PDF menus to QR codes, shipped through a tested CI/CD pipeline",
      role: "Solo project",
      timeline: "2026",
      status: "Live demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          text: "Restaurants sign up, upload their menu and put the QR code on their tables. Guests scan it and the menu opens on their phone, with no app and no PDF viewer. The project started as the one-endpoint starter app from a CI/CD crash course; everything after that first commit is my own work.",
          bullets: [
            "Upload a menu PDF (up to 25 MB) and get a readable link such as /m/escape-cafe, plus an SVG QR code that prints sharply at any size.",
            "Replace the PDF at any time: the link and QR code never change, so printed codes keep working.",
            "Manage several menus (lunch, dinner, drinks) from one dashboard.",
            "PDF.js draws each page at the phone's width and pixel density; the first page appears while the rest load, and the menu is cached until it changes.",
          ],
        },
        {
          id: "pipeline",
          title: "CI/CD pipeline",
          bullets: [
            "Every pull request and push to main runs a GitHub Actions job: clean install, strict type-check, production build, then the full test suite against a real MongoDB service container.",
            "CI runs the same npm run verify command developers run locally, with a read-only token and timeouts so a hung server fails in seconds.",
            "Render deployment is defined as code and only releases commits whose checks pass. Traffic switches to a new version only after its health check returns 200.",
            "/api/version reports the deployed commit, and the guardrails were proven by opening a pull request with a deliberately failing test.",
          ],
        },
        {
          id: "testing",
          title: "Testing",
          bullets: [
            "16 business-logic tests cover accounts, sessions, upload validation and ownership rules, including that one user can never change another's menu.",
            "13 end-to-end tests start the real production build and submit the actual Server Action forms: sign up, upload, view, replace and delete.",
            "No database mocks: each test file creates and drops its own throwaway MongoDB database, so tests can never touch real data.",
          ],
        },
        {
          id: "security",
          title: "Security",
          bullets: [
            "Passwords hashed with scrypt and a per-user salt; session tokens are random, stored only as hashes, and expire automatically.",
            "Every replace or delete looks a menu up by ID and owner.",
            "Uploads are checked by the file's contents (the PDF signature), not its name or type.",
          ],
        },
      ],
      architecture: {
        summary:
          "Business rules live in plain TypeScript with no Next.js imports; pages and Server Actions are thin wrappers around them. Storage is pluggable: Cloudflare R2 in production, a local folder in development and memory in tests.",
        steps: ["Pages & Server Actions", "Business logic (lib/)", "MongoDB", "Cloudflare R2"],
      },
      results: [{ value: "29", label: "unit & end-to-end tests on every change" }],
    },
  },
  {
    slug: "gamezone",
    name: "GameZone",
    year: "2021 · 2026",
    summary:
      "A mobile app for logging video game reviews: search RAWG's database of 900,000+ games, rate them out of five hearts and see cover art and Metacritic scores. One codebase for iOS, Android and the web.",
    category: "mobile",
    tags: ["React Native", "Expo", "TypeScript", "React Navigation"],
    image: "/projects/gamezone.webp",
    imageFit: "contain",
    links: { demo: "https://gamezone-jv4w.onrender.com/", source: gh("GameZone") },
    caseStudy: {
      headline: "a cross-platform game review log",
      role: "Solo project",
      timeline: "2021, updated 2026",
      status: "Live web demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Write, edit and delete reviews with a title, your thoughts and a 1–5 heart rating.",
            "Link each review to a game from RAWG, adding its cover, release date, genres, platforms, Metacritic score and more.",
            "Search and sort your reviews by title, text or genre.",
            "Works offline, with reviews saved on the device.",
            "Light and dark mode that follows the phone, with an in-app switch that's remembered.",
          ],
        },
        {
          id: "built",
          title: "How it's built",
          bullets: [
            "Typed navigation: every screen and its route parameters are typed, so mistakes are caught before the app runs.",
            "One shared source of review data in a React context, which never writes until saved data has loaded, so reviews can't be overwritten on startup.",
            "Game search waits for a 400 ms pause and cancels stale requests, and game details are cached for the session, keeping the app inside RAWG's free limit.",
            "A single theme system that also tells the operating system which mode to use, so pop-ups and the keyboard match.",
            "Web fallbacks for React Native features that don't exist in the browser.",
          ],
        },
      ],
      architecture: {
        summary: "Screens read from a shared reviews context that persists to device storage, with a small cached client for the RAWG API.",
        steps: ["Screens", "Reviews context", "AsyncStorage", "RAWG API client"],
      },
    },
  },
  {
    slug: "expensify",
    name: "Expensify",
    year: "2019 · 2026",
    summary:
      "A full-stack expense tracker with private accounts: log, filter, sort and total your expenses. Started as a course project and rebuilt with a real API, authentication and 97 tests.",
    category: "fullstack",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Jest"],
    image: "/projects/expensify.webp",
    links: { demo: "https://expensify-4l1k.onrender.com/", source: gh("react-course-2-expensify-app") },
    caseStudy: {
      headline: "a course project grown into a secure full-stack app",
      role: "Solo project",
      timeline: "2019, updated 2026",
      status: "Live demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Sign up and log in; sessions last seven days and survive refreshes.",
            "Add, edit and remove expenses with a description, amount, date and note.",
            "Search, sort and filter by date range, with a running count and total.",
            "Clear validation, loading and empty states, on desktop and mobile.",
          ],
        },
        {
          id: "security",
          title: "Security-minded auth",
          bullets: [
            "Passwords hashed with Node's scrypt and a per-user salt, compared in constant time.",
            "Signed session tokens in httpOnly, SameSite cookies that page scripts can't read.",
            "Rate-limited login and sign-up that never reveal whether a user exists.",
            "Every query is scoped to the signed-in user, taken from the session rather than the request.",
          ],
        },
        {
          id: "update",
          title: "Bringing it up to date",
          bullets: [
            "Converted class components to hooks and upgraded React, Enzyme and the Sass toolchain.",
            "Replaced in-memory state with a real API and database, and added authentication.",
            "Async Redux actions update the UI only after the server confirms, and an expired session sends you to log in and back again.",
            "Fixed real bugs, including a crash on refreshing an edit page and two tests that never asserted anything.",
          ],
        },
      ],
      architecture: {
        summary: "One Render service builds the React app and runs the Express API, serving both from the same origin.",
        steps: ["React + Redux", "Express /api", "MongoDB Atlas"],
      },
      results: [{ value: "97", label: "Jest & Enzyme tests" }],
    },
  },
  {
    slug: "contractor-supplier",
    name: "Contractor · Supplier",
    year: "2019 · 2026",
    summary:
      "A small marketplace where contractors request construction equipment and suppliers bid to provide it, with separate dashboards for each role and bid acceptance.",
    category: "fullstack",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/contractor-supplier.webp",
    links: { demo: "https://contractor-supplier.onrender.com", source: gh("fullstack-contractor-supplier") },
    caseStudy: {
      headline: "an equipment marketplace for contractors and suppliers",
      role: "Solo project",
      timeline: "2019, updated 2026",
      status: "Live demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Contractors create requests from an equipment list with a quantity and a needed-by date, then review the bids on each one.",
            "Accepting a bid rejects the others and closes the request; bids can also be rejected one at a time.",
            "Suppliers browse open requests from every contractor, place priced bids and track whether each is pending, accepted or rejected.",
            "Email and password sign-up with strong password rules.",
          ],
        },
        {
          id: "built",
          title: "How it's built",
          bullets: [
            "A React front end with function components, hooks and React Router.",
            "An Express API with Mongoose models for users, requests, bids and equipment, and JWT-based login.",
            "A starter equipment list is seeded the first time the API connects to an empty database.",
            "Deployed as one Render service, with Express serving both the API and the built React app.",
          ],
        },
      ],
      architecture: {
        summary: "A single Express server handles the API and serves the React app.",
        steps: ["React client", "Express /api", "MongoDB"],
      },
    },
  },
  {
    slug: "recipe-box",
    name: "Recipe Box",
    year: "2019 · 2026",
    summary:
      "A multi-user recipe sharing site built with Node.js, Express and MongoDB. First built in 2019 as a blog, then rebuilt in 2026 as a recipe site with search, photo uploads and safer output.",
    category: "fullstack",
    tags: ["Node.js", "Express 5", "MongoDB", "Edge", "Cloudinary"],
    image: "/projects/recipe-box.webp",
    links: { demo: "https://recipe-box-6edx.onrender.com/", source: gh("Nodejs-BlogApp") },
    caseStudy: {
      headline: "a 2019 blog rebuilt as a recipe site",
      role: "Solo project",
      timeline: "2019, updated 2026",
      status: "Live demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Accounts with bcrypt-hashed passwords and sessions stored in MongoDB.",
            "Structured recipes with ingredients, numbered steps, prep and cook times, servings and a photo.",
            "Search by name, description or ingredient, with shareable result URLs.",
            "Photo uploads to Cloudinary, or to disk when Cloudinary isn't set up.",
            "Server-rendered pages where all user content is escaped, so scripts can't be injected.",
          ],
        },
        {
          id: "update",
          title: "The 2026 update",
          bullets: [
            "Replaced free-text blog posts with a structured Recipe model and RESTful routes.",
            "Removed a rich-text editor that allowed script injection in favour of plain, escaped fields.",
            "Upgraded every dependency to current versions (Express 5, Mongoose 9) and rewrote callbacks as async/await.",
            "Fixed bugs from the original: shared creation dates, broken flash messages, crashes on bad URLs, overwritten uploads, and a password printed to the log.",
          ],
        },
      ],
      architecture: {
        summary: "Each route maps to a small controller, and access rules live in reusable middleware.",
        steps: ["Edge views", "Controllers + middleware", "MongoDB", "Cloudinary"],
      },
    },
  },
  {
    slug: "recruitment-app",
    name: "Recruitment App",
    year: "2019 · 2026",
    summary:
      "A small applicant-tracking tool for recruiters: add candidates, see them as cards and filter by position, experience, availability and location. Data stays private in your browser.",
    category: "frontend",
    tags: ["React", "Redux", "CSS", "Jest"],
    links: { demo: "https://recruitment-app-s9v0.onrender.com", source: gh("recruitment-app") },
    caseStudy: {
      headline: "a lightweight applicant tracker",
      role: "Solo project",
      timeline: "2019, updated 2026",
      status: "Live demo",
      sections: [
        {
          id: "features",
          title: "What it does",
          bullets: [
            "Add candidates in a validated modal form with a photo, position, experience, notice period and location.",
            "Combine four live filters, with a “Showing X of Y” count.",
            "Candidate cards show the photo, or coloured initials when there isn't one.",
            "Remove candidates with a confirmation dialog.",
            "Responsive, with keyboard focus styles and screen-reader labels.",
          ],
        },
        {
          id: "built",
          title: "How it's built",
          bullets: [
            "Redux stores only the candidates and filters; the filtered list is derived by a selector, so it can't fall out of date.",
            "The form and the filter bar read their options from one shared file, so they can't drift apart.",
            "Saving to localStorage happens in a single store subscription that runs only when candidates change.",
            "Photos are centre-cropped and shrunk to 160×160 with a canvas, so no file server is needed.",
            "A reusable confirmation dialog focuses Cancel by default, so a stray Enter can't delete anyone.",
          ],
        },
      ],
      architecture: {
        summary: "A static React app; all state lives in Redux and is persisted to the browser.",
        steps: ["Form & filters", "Redux store", "Selector", "localStorage"],
      },
    },
  },
  {
    slug: "react-applications",
    name: "React Applications",
    year: "2019 · 2026",
    summary:
      "Four small React apps: a meme generator, a superhero squad builder, a decision maker and an age calculator. Each one practises a different core skill, and all now run on React 19 and Vite.",
    category: "frontend",
    tags: ["React 19", "Redux", "Vite", "Sass"],
    image: "/projects/react-applications.webp",
    links: { source: gh("react-applications") },
    caseStudy: {
      headline: "four small apps, four core React skills",
      role: "Solo project",
      timeline: "2019, updated 2026",
      status: "Source on GitHub",
      sections: [
        {
          id: "apps",
          title: "The apps",
          bullets: [
            "Meme Generator: Redux with redux-thunk to call the imgflip API, with errors shown to the user and credentials kept in environment variables.",
            "SuperSquad: separate reducers for the character list and the squad, with stats calculated from state rather than stored twice.",
            "Indecision App: options saved in the browser, Sass organised per component, and an accessible result popup.",
            "Age Teller: exact age in years, months and days from real calendar dates, so leap years are handled correctly.",
          ],
        },
        {
          id: "update",
          title: "The 2026 update",
          text: "I first built these while learning React in 2019. In 2026 I moved them to React 19 and Vite and fixed bugs along the way.",
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
