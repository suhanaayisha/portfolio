# Suhana Ayisha — Software Development Engineer

Software engineer based in **Dubai, UAE**, with **6+ years** of experience. I've spent that time shipping production front ends at scale at **Noon**, one of the Middle East's largest e-commerce platforms. Alongside that, I build full-stack applications end to end: **Node.js / Express and Next.js APIs, MongoDB, authentication, automated testing and CI/CD.** I also hold an M.Sc. in Artificial Intelligence & Computer Science.

This repository is the source code of my portfolio site: **[suhanaayisha.com](https://suhanaayisha.com/)**

🌐 [Portfolio](https://suhanaayisha.com/) · 💼 [LinkedIn](https://www.linkedin.com/in/suhana-ayisha/) · 📄 [Résumé (PDF)](public/resume.pdf) · ✉️ [suhanaayisha@gmail.com](mailto:suhanaayisha@gmail.com) · 💻 [GitHub](https://github.com/suhanaayisha)

---

## What I bring

- **Front end at production scale:** 4+ years on Noon's marketplace, its multi-brand enterprise CMS and the Noon Business B2B platform, on web and mobile.
- **Back-end and API design:** REST APIs in Express and Next.js Server Actions, MongoDB data modelling, and business logic kept separate from the framework.
- **Security fundamentals:** password hashing (scrypt and bcrypt), httpOnly session cookies, JWT, rate limiting, per-user data scoping and upload validation.
- **Testing and delivery:** unit and end-to-end tests against real databases, GitHub Actions and Jenkins pipelines, Docker, and deployment defined as code with health checks.
- **AI integration:** LLM-powered workflows (Claude API) and in-browser ML models.

## Tech stack

| | |
| --- | --- |
| **Languages** | TypeScript, JavaScript, Python |
| **Front end** | React, Next.js, React Native, Expo, SolidJS, Redux, Zustand, CSS Modules, SCSS |
| **Back end** | Node.js, Express, Next.js Server Actions, REST APIs, Mongoose, Firebase |
| **Data & storage** | MongoDB, Cloudflare R2, Cloudinary |
| **Testing** | Jest, Cypress, Pytest, Tavern, end-to-end tests against real MongoDB |
| **DevOps** | Docker, Jenkins, GitHub Actions, Kubernetes, Render |
| **AI / ML** | Claude API, PyTorch, scikit-learn, ONNX Runtime Web |

## Full-stack projects

Solo projects, each designed, built, tested and deployed by me. Every project has a full case study (architecture, decisions and results) on the portfolio site.

### A2Z Auto Parts: production business system with an AI intake pipeline
The internal app a UAE auto-parts business runs on, covering enquiries, quotes, invoices, credit notes and payments. It is **in production** and private to the business.
- One Node process serves both the Next.js app and the Express API.
- Invoice numbers are assigned on the server so two people can never get the same one, and issued invoices can't be edited.
- A WhatsApp listener stores messages, photos and voice notes in MongoDB, which also acts as a **job queue** (atomic claims, retries and an audit log). A worker uses **Claude** to turn them into structured parts enquiries with confidence scores.
- API tests run against an in-memory MongoDB.

`Next.js` `React 19` `Express` `MongoDB` `Claude API` · [Code](https://github.com/suhanaayisha/a2z-auto-parts)

### MenuQR: SaaS app with a tested CI/CD pipeline
Restaurants upload a PDF menu and get a permanent mobile menu page and a QR code.
- GitHub Actions runs a type-check, a production build and **29 unit and end-to-end tests** against a real MongoDB service container. Render only deploys commits that pass.
- Business logic is plain TypeScript with no framework imports. Storage is pluggable: Cloudflare R2 in production, local disk in development and memory in tests.
- Passwords are hashed with scrypt, session tokens are stored only as hashes, every change checks who owns the menu, and uploads are validated by their PDF signature.

`Next.js 16` `TypeScript` `MongoDB` `Cloudflare R2` `GitHub Actions` · [Demo](https://menuqr-hwlp.onrender.com) · [Code](https://github.com/suhanaayisha/menuqr-generator)

### Expensify: secure full-stack expense tracker
A course project rebuilt with a real API, authentication and **97 tests**.
- Express + MongoDB API. Signed session tokens in httpOnly, SameSite cookies; rate-limited login that never reveals whether an account exists.
- Every query is scoped to the signed-in user, taken from the session rather than the request.

`React` `Redux` `Node.js` `Express` `MongoDB` `Jest` · [Demo](https://expensify-4l1k.onrender.com/) · [Code](https://github.com/suhanaayisha/react-course-2-expensify-app)

### More full-stack work
| Project | What it is | Stack | Links |
| --- | --- | --- | --- |
| **Contractor · Supplier** | Two-sided marketplace: contractors request equipment, suppliers bid, and accepting one bid closes the request. | React, Express, MongoDB, JWT | [Demo](https://contractor-supplier.onrender.com) · [Code](https://github.com/suhanaayisha/fullstack-contractor-supplier) |
| **Recipe Box** | Server-rendered multi-user recipe site with MongoDB sessions, search, Cloudinary uploads and escaped output to block script injection. | Node.js, Express 5, MongoDB, Cloudinary | [Demo](https://recipe-box-6edx.onrender.com/) · [Code](https://github.com/suhanaayisha/Nodejs-BlogApp) |

## Other projects

| Project | What it is | Stack | Links |
| --- | --- | --- | --- |
| **EuroSAT Land-Use Classifier** | Satellite image classifier, from a 32% baseline to **98.1% accuracy** with a fine-tuned ResNet-18. Both models run in the browser. | Python, PyTorch, ONNX Runtime Web | [Demo](https://huggingface.co/spaces/suhanaayisha/eurosat-classifier) · [Code](https://github.com/suhanaayisha/eurosat-landuse-classification) |
| **GameZone** | Cross-platform game-review app (iOS, Android, web) built on the RAWG API. | React Native, Expo, TypeScript | [Demo](https://gamezone-jv4w.onrender.com/) · [Code](https://github.com/suhanaayisha/GameZone) |
| **Recruitment App** | Applicant-tracking tool with filtering by position, experience, availability and location. | React, Redux, Jest | [Demo](https://recruitment-app-s9v0.onrender.com) · [Code](https://github.com/suhanaayisha/recruitment-app) |

## Experience

**Software Development Engineer — Noon** · 2021 – present
- **Noon Business (B2B):** building the web front end in React, Next.js and TypeScript and mobile features in React Native and Expo, integrating REST APIs and working with backend, product and QA teams from design to production support.
- **Enterprise CMS:** built the multi-marketplace CMS that powers Noon, Namshi, Noon Minutes and Home Services. Designed its packaging architecture, built reusable widgets, migrated class components to hooks, and added i18n, Zustand state management and seller analytics dashboards. Built an internal QA app with SolidJS.
- **Core marketplace:** shipped customer-facing features, reusable React components and performance improvements.

**Software Engineer — Tenderd** · 2019 – 2021
Built **Node.js backend services** and React + TypeScript web apps, implemented Firebase authentication, and created machine-learning dashboards.

**Software Developer Intern — Dubizzle** · 2019
Built automated testing pipelines (Cypress, Jest, Pytest, Tavern), **Jenkins CI/CD pipelines** and Docker containers, and ran Lighthouse performance tests.

## Education

- **M.Sc. Artificial Intelligence & Computer Science**, Heriot-Watt University Dubai (2023 – 2025). Final project: handwriting-based gender classification using deep learning and handcrafted feature fusion.
- **B.Tech. Software Engineering**, Manipal Academy of Higher Education Dubai (2015 – 2019). Winner of Manipal Hackathon 2017; Best Paper & Poster (MAHEBOT); published in IJAER, IRJAET and IJET.

---

## About this site

Built from scratch with **Next.js 16 (App Router)**, **React 19** and **TypeScript**, with no UI library: just CSS Modules and a few design tokens.

- **Fully static:** exported with `output: "export"` and served from a CDN, so it has no server and no cold starts.
- **Content kept apart from code:** all text, projects and experience live in one typed file, [`src/data/site.ts`](src/data/site.ts).
- **One case-study page per project**, generated at build time from that data (`/projects/[slug]`).
- **Continuous deployment:** every push to `main` rebuilds and redeploys on Render ([`render.yaml`](render.yaml)).

```
src/
  app/
    layout.tsx           fonts and metadata
    page.tsx             home page
    globals.css          colour tokens and shared styles
    projects/[slug]/     case-study pages
  components/            Nav, Hero, About, Projects, Experience, Education, Contact, Footer
  data/site.ts           all site content
```

### Running it locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static build in out/
npm run typecheck    # TypeScript check
```
