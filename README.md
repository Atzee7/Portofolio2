# Muhammad Yusril Islam — Portfolio

Single-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Portfolio content is kept in typed files under `src/data`; the contact endpoint uses the Resend email API and requires no database.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. To enable the contact form, fill these values in `.env.local`:

```dotenv
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Portfolio <hello@your-verified-domain.com>
```

The sender address must be accepted by your Resend account. Keep `.env.local` private; it is ignored by Git.

## Add your portfolio details

- Replace the generic platform links in `src/components/ui/social-links.tsx` with your profile URLs.
- Add your actual internship period in `src/data/experience.ts`.
- Add verified projects in `src/data/projects.ts`; provide screenshot assets under `public/images/projects/` and update each `image` and `imageAlt` value. The current project section shows an empty state until real project entries are added.
- Put your CV at `public/files/cv.pdf` so the CV action works.
- Replace the initials illustration in the hero with your profile photo when one is available.

## Contact endpoint

`POST /api/contact` validates name, email, optional subject, and message on the server, filters a simple honeypot field, then sends a plain-text email through Resend. It responds with a success or error message for the form. The endpoint does not store messages.
