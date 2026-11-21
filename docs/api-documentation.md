# API Documentation — HimVirasat

Base URL (development): `http://localhost:5000/api`  
All mutating endpoints validate input via express-validator. Errors return `{ error: string, details?: any[] }`. Production responses exclude stack traces.

## Authentication

Endpoints are under `/api/auth`. JWT access token is issued as an httpOnly cookie (`token`) and also returned in the response body.

### POST /auth/register
Register a new user.

**Body**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | yes | |
| email | string | yes | must be valid email, unique |
| password | string | yes | min 6 chars |

**Response (201)**
```json
{ "user": { "id": "...", "name": "...", "email": "...", "role": "user" }, "token": "..." }
```

### POST /auth/login
Authenticate and issue a token.

**Body**
| Field | Type | Required |
|-------|------|----------|
| email | string | yes |
| password | string | yes |

**Response (200)** — same shape as register.

### POST /auth/logout
Clear the auth cookie. No body required.

### GET /auth/me
Return the current authenticated user. Requires valid auth cookie/header.

**Response (200)**
```json
{ "user": { "id": "...", "name": "...", "email": "...", "role": "user" } }
```

### GET /auth/admin-only
Example administrator-only route. Requires authentication + `administrator` role.

## Contact / Enquiries

Endpoints under `/api/contact`.

### POST /contact
Submit a contact enquiry (public).

**Body**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | yes | |
| email | string | yes | valid email |
| phone | string | no | valid mobile phone |
| subject | string | yes | |
| message | string | yes | |

**Response (201)**
```json
{ "message": "Your enquiry has been received", "contact": { "id": "...", "name": "...", "email": "...", "subject": "...", "status": "new", "createdAt": "..." } }
```

### GET /contact
List all enquiries. Administrator only.

**Query** — none.

**Response (200)**
```json
{ "contacts": [ {...} ], "count": N }
```

### PATCH /contact/:id/status
Update an enquiry's status. Administrator only.

**Body**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| status | string | yes | one of: new, read, replied, closed |

**Response (200)**
```json
{ "message": "Enquiry status updated", "contact": { ... } }
```

## Administrator

Endpoints under `/api/admin`. All routes require authentication + `administrator` role.

### GET /admin/stats
Website statistics.

**Response (200)**
```json
{ "users": N, "enquiries": N, "newEnquiries": N }
```

### GET /admin/users
List users (passwords excluded).

### GET /admin/users/:id
Get a single user.

### PATCH /admin/users/:id/role
Update a user's role.

**Body** `{ "role": "visitor" | "user" | "administrator" }`

### DELETE /admin/users/:id
Delete a user.

## Health

### GET /health
`{ "status": "ok", "service": "himvirasat-server", "time": "..." }`

## Error Format

```json
{ "error": "Human-readable message" }
```
Validation failures include `details` from express-validator.

## Security Notes

- JWT in httpOnly cookie; `secure` and `sameSite` configurable via env
- Passwords hashed with bcrypt (never returned)
- All mutating endpoints validate input
- Rate-limiting and Helmet headers applied server-wide
