# ZAHDEY TECH

Marketing website for ZAHDEY TECH, a Nairobi-based company focused on practical digital systems, product delivery, and infrastructure-minded execution.

## Project Snapshot

- Stack: Vite, React, TypeScript, Tailwind CSS, shadcn/ui
- Purpose: Present the company, its capabilities, flagship product, and contact path
- Main sections: Homepage, About, Services, contact CTA, product spotlight for M-VENTORY

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

- `src/pages`: Route-level pages for home, about, services, and 404
- `src/components`: Reusable marketing and UI components
- `src/data/siteContent.ts`: Shared company content, metrics, FAQs, and service copy
- `src/assets`: Brand and photography assets used by the site

## Recent Refresh

This codebase now includes:

- A clearer homepage narrative with capability, product, testimonial, FAQ, and contact sections
- Reusable section components for heroes, cards, timelines, process grids, and CTAs
- Updated About and Services pages that match the homepage design language
- Improved metadata, route scroll behavior, and removal of leftover starter scaffolding

## Notes

- The contact form opens the user’s email client with a prefilled message
- SEO metadata is handled with a lightweight client-side component plus static tags in `index.html`
