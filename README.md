# Midnight Bento — Updated Yashraj Maddi Portfolio

A responsive React + Vite portfolio that preserves the Midnight Bento cyan design and updates the content to reflect Yashraj's Cloud/DevOps projects, software development experience, skills, education and contact details.

## Run locally

From this folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Content included

- Four Cloud/DevOps projects with their known GitHub repositories
- SFMS Flutter/Firebase project (repository link was not provided)
- AWS, Terraform, Docker, Kubernetes, Linux, CI/CD and observability skills
- DK TECHNOS hybrid application development internship
- B.Tech CSE and Diploma education
- AWS Skill Builder Well-Architected Solutions course
- Resume PDF in `public/resume.pdf`
- GitHub, LinkedIn, email and resume links

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import that repository in https://vercel.com.
3. Choose **Vite** as the framework.
4. Set build command to `npm run build` and output directory to `dist`.
5. Deploy.

## Before sharing

Confirm that each project repository is public and that the resume PDF is the latest version. The SFMS project does not have a repository URL in the supplied details, so its card intentionally has no external repository link. Update it in `src/App.jsx` if you have the correct URL.

## Design

- Midnight background with cyan accents
- Bento-grid hero and identity cards
- Responsive project cards, skills, journey and contact sections
- React, Vite and Lucide React
