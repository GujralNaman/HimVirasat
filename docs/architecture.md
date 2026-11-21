# Architecture — HimVirasat

## Overview

HimVirasat is a full-stack, single-page public website with a REST API backend and MongoDB database. Visual fidelity to the reference Emergent site is the highest priority; backend concerns never compromise the reference designs.

## High-Level Diagram

```
Browser (client, :5173)
     │ HTTPS/HTTP (API proxy /api)
     ▼
Express API (server, :5000)
     │ Mongoose
     ▼
MongoDB (himvirasat)
```

## Layer Responsibilities

### Client (`client/`)
- **Vite** dev server & production bundler
- **React 18** + TypeScript UI
- **Tailwind CSS** — design tokens (forest/ivory/gold/terra) matched to reference
- **Framer Motion** — scroll & entrance animations identical to reference
- **Lucide React** — icons
- **Axios** — API client with `withCredentials` for httpOnly JWT cookies
- Single-page anchor navigation (`#home`, `#about`, `#products`, `#story`, `#promise`, `#contact`)

### Server (`server/`)
- **Express** REST API
- **TypeScript** (compiled to `dist/`)
- **Mongoose** ODM for MongoDB
- **JWT** access tokens in httpOnly cookies
- **bcrypt** password hashing
- **Helmet** security headers, **CORS**, **compression**, **express-rate-limit** ready
- Centralized error handler, async handler, AppError class

### Database (`server/src/models/`)
- `User` — name, email (unique), hashed password, role (visitor/user/administrator), isActive, timestamps
- `Contact` — enquiry submissions: name, email, phone, subject, message, status (new/read/replied/closed), timestamps

## Security Model

- Passwords hashed with bcrypt (salt 10), never stored plaintext
- JWT signed with `JWT_SECRET`, stored in httpOnly cookie
- Role-based authorization middleware (`authorize('administrator')`)
- Input validation via express-validator on all mutating endpoints
- Mongoose models prevent NoSQL injection (schema-typed queries)
- Error responses exclude stack traces in production
- Helmet secure headers; `trust proxy` for reverse-proxy deployments

## Data Flow

1. User submits contact form → `POST /api/contact` → validated → saved to `Contact` collection → success/error response to UI
2. User registers → `POST /api/auth/register` → bcrypt hash → `User` created → JWT cookie set
3. User logs in → `POST /api/auth/login` → password compare → JWT cookie set
4. Admin views stats → `GET /api/admin/stats` (auth + administrator role required) → aggregation counts

## Production Build

- `client`: `tsc && vite build` → `client/dist`
- `server`: `tsc` → `server/dist`
- Serve `server/dist/server.js` with `NODE_ENV=production`

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `MONGODB_URI` | MongoDB connection | `mongodb://127.0.0.1:27017/himvirasat` |
| `JWT_SECRET` | Token signing secret | 32+ random chars |
| `JWT_EXPIRES_IN` | Token TTL | `7d` |
| `PORT` | Server port | `5000` |
| `CORS_ORIGIN` | Allowed frontend origin | `http://localhost:5173` |
| `NODE_ENV` | Environment | `production` |

## Assumptions

- MongoDB is reachable at `MONGODB_URI`
- The frontend dev server proxies `/api` to `:5000` (configured in `vite.config.ts`)
- Original logo asset (`logo.png`) is unavailable; SVG placeholder used
