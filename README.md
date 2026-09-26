# NVQ Central

NVQ Central is a free-first educational web platform for Sri Lanka focused on NVQ learners. It brings together course guidance, study materials, practical resources, videos, notices, career opportunities and contributor workflows in a single modern experience.

## Overview

This project is designed for a mobile-first, professional education platform that supports Sri Lankan NVQ learners across multiple stages of study and work readiness. The initial foundation focuses on:

- responsive educational web UI
- scalable architecture for future Supabase integration
- role-based access patterns for learners, contributors, moderators and admins
- resource workflow support for review and approval
- secure-by-default configuration with environment variables
- future-ready multilingual support for Sinhala, Tamil and English content

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + Row Level Security
- Cloudflare R2 for uploaded files
- YouTube for videos
- Cloudflare Pages for deployment
- GitHub for source control
- Brevo SMTP for transactional email
- Cloudflare Turnstile for abuse protection

## Project Structure

- app/ — page routes and root layout
- components/ — reusable UI blocks for the interface
- lib/ — configuration and support modules
- supabase/ — database schema for future Supabase setup
- types/ — shared project types
- .env.example — environment placeholders
- README.md — project documentation

## Current Homepage Features

The initial homepage includes:

- header with desktop and mobile navigation
- hero section with mission statement and CTAs
- search bar
- explore by NVQ level cards
- explore by field cards
- featured learning materials
- latest notices
- career opportunities
- contributor call-to-action
- platform statistics
- footer with educational information and official-source placeholders

## Authentication and User Roles

The architecture is set up for:

- full name
- email
- WhatsApp/mobile number
- password and confirmation
- optional gender
- terms and privacy agreement
- email verification
- Google Sign-in
- forgot password flow
- Supabase Auth integration

Supported roles:

- user
- contributor
- moderator
- super_admin

Contributor permissions are treated as an upgrade to an existing normal account rather than a separate identity model.

## Resource System Architecture

The project includes database structure for the following tables:

- profiles
- user_roles
- courses
- course_semesters
- course_modules
- course_units
- resource_categories
- resource_types
- resources
- resource_versions
- saved_resources
- resource_feedback
- resource_reports
- resource_requests
- contributor_applications
- notifications
- audit_logs
- careers
- notices

Workflow:

Draft → Pending Review → Approved / Changes Requested / Rejected → Archived

Approved contributors can submit resources, but they cannot directly publish resources.

## Local Development

### Requirements

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000

### Build for production

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Type check

```bash
npm run type-check
```

## Environment Variables

Copy the example file and update it with your actual secrets as needed:

```bash
cp .env.example .env.local
```

The project intentionally uses placeholder names only in `.env.example` and never hardcodes API keys, credentials or secret values.

## Security Notes

- never expose service-role secrets to the browser
- validate requests server-side where required
- prepare for Supabase RLS and scoped access
- keep private keys in environment variables only
- do not implement insecure uploads or trust client-side authorization

## Notes

- Course catalog data will be imported later from verified project sources.
- No fake national NVQ course list should be created in this foundation stage.
- The UI remains English-first while the architecture is prepared for future Sinhala, Tamil and English resource support.

## License

This project is for educational and community use and is intended to remain free-first.
