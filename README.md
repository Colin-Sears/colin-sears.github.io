# Colin Sears – Professional Portfolio

Modern, minimalist software engineering & aerospace portfolio built with **Next.js 14**, focusing on clarity, typography, and performance.

> **Note:** This repo is the professional portfolio only. The creative/personal site (tabletop gaming, worldbuilding, creative projects) is planned as a separate site.

## ✨ Current Features

- High-impact hero with large typographic identity
- Featured Projects with image carousel (multi-image support + graceful placeholder logic)
- Experience section with clean, left-aligned company/role blocks
- GitHub Activity (public contributions + profile link)
- Skills ("What I Work With") plain textual taxonomy—no badges
- Contact section with large email, copy-to-clipboard, and social links
- Subtle sectional dividers maintaining white background continuity
- Smooth scroll + measured fade/translate animations with `framer-motion`
- Accessible reduced-motion fallbacks

## 🧱 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (custom typography & spacing) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages (static export) |

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open: http://localhost:3000 (or the alternate port if 3000 is busy)

## 📂 Key Structure (simplified)

```
app/
   layout.tsx              # Root HTML & metadata
   page.tsx                # Entry → renders professional page
   professional/
      page.tsx              # Section ordering + dividers
      components/
         Hero.tsx
         Projects.tsx        # Uses ProjectImageCarousel
         Experience.tsx
         GitHubActivity.tsx
         Skills.tsx
         Contact.tsx
components/
   ProjectImageCarousel.tsx
   SectionDivider.tsx
   Navigation.tsx          # Minimal nav (logo + links)
   PageTransition.tsx
lib/
   data/                   # Static data sources (projects, skills, etc.)
   github.ts               # Optional GitHub REST helpers (currently minimal)
   types.ts
   constants.ts            # Personal info & nav configuration
public/projects/          # Project images (carousel assets)
docs/                     # Design & update guides
```

## 🖼 Project Images & Carousel

Each project supports `images: (string | null)[]`:

- Non-empty array with valid paths → carousel renders.
- Array of only `null` → light "Image Coming Soon" placeholder.
- Empty array (`[]`) → carousel omitted entirely (no placeholder box).

Add images to `public/projects/` and reference with `/projects/your-file.ext` in `lib/data/projects.ts`.

Recommended sizing:
- Aspect: 16:9
- Width target: 1400px (served responsively)
- Format: `.jpg` / `.png` / `.webp`
- Keep under ~500KB each; use compression.

## 🔧 Customization

Update personal details in `lib/constants.ts` (name, email, GitHub, LinkedIn, tagline). Update data sets in:

| Data | File |
|------|------|
| Projects | `lib/data/projects.ts` |
| Experience | `lib/data/experience.ts` |
| Skills | `lib/data/skills.ts` |

## 🔌 GitHub Activity

Current implementation embeds public contributions & a profile link. Optional enhancements:

1. **Stats Cards (Private contributions)**: Replace chart block with embeds like:
    ```html
    <img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&include_all_commits=true&count_private=true" />
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME" />
    ```
2. Add a token (`NEXT_PUBLIC_GITHUB_TOKEN`) if expanding REST calls (see `lib/github.ts`).

## 🧪 Scripts

```bash
npm run dev      # Start local dev
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🗺 Roadmap

| Status | Item |
|--------|------|
| ✅ | Core professional sections & animations |
| ✅ | Image carousel & placeholder logic |
| ✅ | Section dividers + spacing refinement |
| 🚧 | Performance polish (image preloading, bundle trimming) |
| 🚧 | Accessibility sweep (focus order, aria labeling) |
| ⏳ | Advanced GitHub analytics (GraphQL contributions, languages) |

## 🎨 Design Principles

- White background, strong black typography
- Generous but balanced vertical rhythm
- Minimal UI chrome (no heavy cards or shadows)
- Subtle motion, no distracting parallax
- Flat dividers to separate conceptual blocks

Full specification: `docs/DESIGN_CONCEPT.md`.

## 🧩 Adding a New Project (Template)

```ts
{
   title: 'Project Name',
   description: 'Brief description explaining value & scope.',
   images: ['/projects/example-1.jpg', '/projects/example-2.jpg'], // [] to omit, [null] to placeholder
   technologies: ['Tech1', 'Tech2', 'Tech3'],
   githubUrl: 'https://github.com/your/repo', // optional
   liveUrl: 'https://demo-url.com',            // optional
   featured: true,
   category: 'web' | 'ai' | 'engineering' | 'mobile' | 'other',
}
```

## ⚖️ License

MIT – use, adapt, and build upon freely. Attribution appreciated.
