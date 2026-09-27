# Anshuman Nayak — Portfolio

Personal portfolio covering my experience, projects, skills, education and certifications. It's built with React and Vite, has no backend or database, and works on phones, tablets and desktops, with a light/dark theme.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Updating content

All content lives in **[`src/data/profile.js`](src/data/profile.js)**. To add a job, project or certification, edit that file. You don't need to touch any components.

- **Projects** can include an optional `details` array (`{ heading, body }`, where `body` is a string or a list of bullets). It appears in the project's "View details" dialog. You can also add `links: [{ label, url }]`.
- **Certifications and publications** accept a `url` that links to the credential.
- **Résumé:** put `resume.pdf` in `public/` and set `resumeUrl: 'resume.pdf'`.
- **Phone:** set `contact.phone` to `null` to hide it from the public site.

## Deploy

Every push to `main` runs the GitHub Action in `.github/workflows/deploy.yml` and publishes the site to GitHub Pages. Enable it once under **Settings → Pages → Source: GitHub Actions**.
