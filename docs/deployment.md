# Deployment — HimVirasat

## Overview

HimVirasat is a two-part application: a Vite-built React frontend (`client/dist`) and an Express/TypeScript backend (`server/dist`) backed by MongoDB.

## Prerequisites

- Node.js 18+
- MongoDB (self-hosted or MongoDB Atlas)
- A reverse proxy (nginx/Caddy/Cloudflare Tunnel) for production TLS

## Build

### Frontend
```bash
cd client
npm ci --production=false   # devDependencies needed for build
npm run build               # tsc && vite build -> client/dist
```

### Backend
```bash
cd server
npm ci --production=true
npm run build               # tsc -> server/dist
```

## Environment

Create `server/.env` from `server/.env.example` and `client/.env` from `client/.env.example`.

Required production values:
- `MONGODB_URI` — MongoDB connection string
- `JWT_SECRET` — strong random secret (32+ chars)
- `NODE_ENV=production`
- `PORT` — e.g. `5000`
- `CORS_ORIGIN` — your production frontend origin (e.g. `https://himvirasat.example.com`)
- `COOKIE_SECURE=true` (behind HTTPS)
- `COOKIE_SAME_SITE=lax` (or `none` if cross-site)

**Never commit `.env` files.** They are excluded from version control.

## Running the Backend

```bash
cd server
npm start        # serves server/dist/server.js on :$PORT
```

The backend exposes:
- `GET /health`
- `/api/auth/*`, `/api/contact/*`, `/admin/*`

## Serving the Frontend (Static Site — No Backend)

HimVirasat is now a **static frontend-only** site (no backend). Build the frontend and deploy the `client/dist` folder to any static host.

### Critical: SPA Fallback for Client-Side Routes

React Router uses client-side routes (e.g., `/recipe`). When a user visits `/recipe` directly or refreshes, the server must serve `index.html` — otherwise you get a 404. Add one of the following fallback configs based on your host:

#### Netlify (`public/_redirects` — included)
```
/*    /index.html   200
```

#### Vercel (`vercel.json` at **project root** — included)

**Important:** The `vercel.json` file must be at the **root of your repository** (same level as `package.json`), not inside `public/` or `client/`. It is already included at `HimVirasat/vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "cd client && npm install && npm run build",
  "outputDirectory": "client/dist",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel to:
1. Build the frontend in `client/`
2. Serve output from `client/dist/`
3. Route all requests (`/recipe`, etc.) to `index.html` so React Router handles them

#### Apache / cPanel (`public/.htaccess` — included)
```
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Firebase Hosting (`public/firebase.json` — included)
```json
{ "hosting": { "public": "dist", "rewrites": [{ "source": "**", "destination": "/index.html" }] } }
```

#### GitHub Pages (`public/404.html` + `index.html` — included)
GitHub Pages doesn't support rewrites, so `public/404.html` catches unknown routes and redirects to `index.html`, which restores the path via `sessionStorage`. This is already handled in `client/index.html`.

#### Nginx
```nginx
location / { root /path/to/client/dist; try_files $uri $uri/ /index.html; }
```

#### Express / Node.js
```js
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/dist/index.html')));
```

### Build & Deploy

```bash
cd client
npm install
npm run build        # produces client/dist
```

Upload the contents of `client/dist/` to your static host. No `.env` needed for the frontend (no API calls).

### Build Output

```
client/dist/
├── index.html          # SPA entry point (served for all routes)
├── _redirects          # Netlify fallback
├── vercel.json         # Vercel fallback
├── .htaccess           # Apache fallback
├── firebase.json       # Firebase fallback
├── 404.html            # GitHub Pages fallback
├── favicon.png         # Site favicon
├── logo.svg            # Logo placeholder
├── og-image.svg        # Open Graph image
└── assets/             # Bundled JS/CSS
```

## MongoDB

Create the `himvirasat` database. Collections `users` and `contacts` are created automatically on first write. Indexes:
- `users.email` (unique)
- `contacts.createdAt` (-1), `contacts.email` (1)

## Admin Setup

1. Register the first user via `POST /api/auth/register`.
2. Manually set their role to `administrator` in MongoDB:
   ```js
   db.users.updateOne({ email: "you@example.com" }, { $set: { role: "administrator" } })
   ```
3. Access admin routes (e.g. `GET /api/admin/stats`) with that user's auth cookie.

## Security Checklist

- [ ] `.env` not committed
- [ ] `JWT_SECRET` is strong and unique
- [ ] `COOKIE_SECURE=true` behind HTTPS
- [ ] `CORS_ORIGIN` restricted to your domain
- [ ] `NODE_ENV=production`
- [ ] Error stack traces hidden (handled by `errorHandler`)
- [ ] Reverse proxy enforces TLS

## Process Management

Use a process manager (systemd, PM2, or Docker):

```bash
# PM2 example
cd server
pm2 start dist/server.js --name himvirasat-api --env production
```

## Health Monitoring

Poll `GET /health` for uptime checks. It returns `200 { status: "ok" }` when the server is up (MongoDB connection is established at startup).
