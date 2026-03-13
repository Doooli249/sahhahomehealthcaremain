# Sahha Home Health Care — SEO Website + Simple Backend

This repo is a modern rebuild of the Sahha Home Health Care website:

- **Next.js (App Router) + TypeScript + Tailwind**
- **Airtable** as the simplest “backend” (your admin dashboard)
- **Resend** for email alerts on every form submission
- Optional **Google Reviews** (Places API) displayed on the homepage

## Pages

- `/` (Home)
- `/about-us`
- `/services` and `/services/[slug]`
- `/ihss`
- `/insurances/medicaid` `/insurances/medicare` `/insurances/private-pay`
- `/my-team`
- `/contact-us`
- `/book-appointment`
- `/blog` and `/blog/[slug]`

## Forms

All forms submit to Airtable and send an email alert via Resend:

- **Request Care** (home page)
- **Contact** (contact page)
- **Book Appointment** (appointment page)

## Setup

### 1) Clone + install

```bash
npm install
```

### 2) Configure env vars

Copy `.env.example` → `.env.local` and fill in values.

#### Airtable

Create an Airtable Base with two tables:

**Leads** fields:
- Created At (date/time)
- First Name (text)
- Last Name (text)
- Email (email)
- Phone (phone/text)
- Form Type (single select)
- Subject (text)
- Message (long text)
- Source Page (text)
- Status (single select)

**Appointments** fields:
- Created At (date/time)
- Name (text)
- Email (email)
- Phone (phone/text)
- Preferred Date (text or date)
- Preferred Time (text)
- Service Interest (text)
- Notes (long text)
- Status (single select)

Then set:

- `AIRTABLE_TOKEN`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_LEADS` (table name or table id)
- `AIRTABLE_TABLE_APPOINTMENTS` (table name or table id)

### 3) Resend email alerts

Create a Resend API key and set:

- `RESEND_API_KEY`
- `OWNER_EMAIL` (the email you want alerts sent to)

Optional: set `FROM_EMAIL` if you have a verified domain in Resend.

### 4) Google Reviews (optional)

Set:

- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

The public site calls `/api/reviews` which fetches ratings + latest reviews.

## Run locally

```bash
npm run dev
```

Open: http://localhost:3000

## Deploy

Deploy to Vercel:

1. Import repo
2. Add env vars from `.env.local`
3. Deploy

## Brand edits

Update phone/name/service area/colors in:

`src/theme/brand.ts`
