# HimVirasat

**HimVirasat — The Heritage of the Himalayas**

A production-quality, full-stack web application replicating the reference Emergent site
(`https://himalayan-roots-1--0hfdf5ja.preview.emergentagent.com/`), a regional food brand
inspired by Jammu and the Himalayas.

## Tech Stack

**Frontend** (`client/`)
- React 18, TypeScript, Vite
- Tailwind CSS (design-system tokens matched to the reference)
- Framer Motion (animations)
- Lucide React (icons)
- Axios (API client)

**Backend** (`server/`)
- Node.js, Express, TypeScript
- MongoDB + Mongoose
- JWT (httpOnly cookies) + bcrypt password hashing
- express-validator / zod-style validation
- Helmet, CORS, compression, rate-limiting

## Project Structure

```
HimVirasat/
├── client/                 # Frontend (Vite + React + TS)
│   ├── public/             # Static assets (logo.svg, favicon.svg, og-image.svg)
│   ├── src/
│   │   ├── assets/logo.ts  # Logo placeholder (SVG wordmark)
│   │   ├── config/site.ts  # Brand copy, nav, products, images
│   │   ├── components/     # Navbar, sections, footer, forms, common
│   │   ├── lib/motion.ts   # Framer Motion config
│   │   ├── services/api.ts # Axios API client
│   │   ├── styles/         # global.css, animations.css
│   │   ├── types/index.ts
│   │   └── App.tsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── server/                 # Backend (Express + TS)
│   ├── src/
│   │   ├── config/         # db, app
│   │   ├── controllers/
│   │   ├── middleware/     # auth, error
│   │   ├── models/         # User, Contact
│   │   ├── routes/         # auth, contact, admin
│   │   ├── services/
│   │   ├── utils/token.ts  # JWT sign/verify + cookie options
│   │   ├── validators/
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
├── docs/                   # Documentation
│   ├── reference-audit.md  # Phase 1 reference audit (design tokens, components)
│   ├── architecture.md
│   ├── design-system.md
│   ├── api-documentation.md
│   └── deployment.md
├── TODO.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Clone & install dependencies

```bash
# Frontend
cd client
npm install

# Backend (in another terminal)
cd server
npm install
```

### 2. Environment variables

Copy the example files and fill in real values:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Key variables (`server/.env`):
- `MONGODB_URI` — MongoDB connection string
- `JWT_SECRET` — strong random secret (32+ chars)
- `CORS_ORIGIN` — frontend URL (e.g. `http://localhost:5173`)
- `PORT` — backend port (default `5000`)

### 3. Run in development

```bash
# Terminal 1 — backend
cd server
npm run dev     # http://localhost:5000

# Terminal 2 — frontend
cd client
npm run dev     # http://localhost:5173
```

### 4. Production builds

```bash
cd client  && npm run build   # -> client/dist
cd server  && npm run build   # -> server/dist
cd server  && npm start       # http://localhost:5000
```

## Features

- Pixel-targeted recreation of the reference homepage (Hero, About, Products, Story, Promise, Contact, Footer)
- Responsive design verified across desktop/tablet/mobile breakpoints
- Framer Motion scroll & entrance animations
- Contact enquiry form with validation + server storage
- User authentication (register/login/logout/me) with role-based access
- Admin API (stats, users, role management)
- SEO meta tags, Open Graph, semantic HTML, lazy-loaded images
- Security headers, input validation, httpOnly JWT cookies

## Design Tokens (from reference)

| Token | Value |
|-------|-------|
| `--forest` | `#183c30` |
| `--ivory` | `#ede3cf` |
| `--gold` | `#b99a59` |
| `--terra` | `#a75e42` |
| `--nav-h` | `84px` |
| Heading font | Cormorant Garamond |
| Body font | Manrope |

## Notes

- The original `src/assets/logo.png` (720 × 379) is a local Emergent build asset not exposed on the public reference server, so it could not be extracted. An SVG wordmark placeholder is used in `client/src/assets/logo.ts`; replace it with the original `logo.png` for exact visual parity.
- Contact email/WhatsApp values in `client/src/config/site.ts` are placeholders — set real values before launch.

## Documentation

- `docs/reference-audit.md` — Phase 1 reference audit
- `docs/architecture.md` — System architecture
- `docs/design-system.md` — Design tokens & component specs
- `docs/api-documentation.md` — API endpoints
- `docs/deployment.md` — Deployment steps
