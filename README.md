# Resume Portfolio Site

A dual-personality portfolio website with clean professional and creative personal sections.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🏗️ Project Structure

```
app/
├── layout.tsx              # Root layout with theme provider
├── page.tsx                # Main page with mode switching
├── professional/           # Professional portfolio section
│   └── page.tsx
├── personal/               # Personal/hobby section
│   └── page.tsx
└── globals.css             # Global styles

components/
├── Navigation.tsx          # Navigation with mode toggle
└── PageTransition.tsx      # Transition wrapper

lib/
├── ModeContext.tsx         # Context for professional/personal mode
├── types.ts                # TypeScript type definitions
└── constants.ts            # Site configuration
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development Phases

### ✅ Phase 1: Foundation (COMPLETE)
- [x] Next.js setup with TypeScript
- [x] Tailwind CSS + Framer Motion
- [x] Base layout and navigation
- [x] Theme system (professional/personal)
- [x] Routing structure
- [x] Mode toggle with smooth transitions

### ✅ Phase 2: Professional Side (COMPLETE)
- [x] Hero with character-by-character animation
- [x] GitHub stats component
- [x] Projects showcase with images
- [x] Skills section with categories
- [x] Experience timeline
- [x] Contact section with email copy
- [x] Scroll animations on all sections
- [x] Template data structures

**Next Step**: Update template data with your actual resume info!
See `DATA_UPDATE_GUIDE.md` for instructions.

### 🚧 Phase 3: Personal Side (NEXT)
- [ ] Personal hero with playful design
- [ ] Tabletop games showcase
- [ ] Lore document structure
- [ ] Creative projects section

### Phase 4: Polish & Deploy
- [ ] Performance optimization
- [ ] Responsive refinement
- [ ] Accessibility audit
- [ ] Deploy to GitHub Pages

## 🚀 Deployment

This site is configured for **GitHub Pages** deployment.

### Quick Deploy

1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. Automatic deployment on every push!

**See `GITHUB_PAGES_DEPLOYMENT.md` for detailed instructions.**

### Build Commands

```bash
# Development
npm run dev

# Production build (creates /out directory)
npm run build

# Lint
npm run lint
```

## 📝 Configuration

### Update Personal Information

Edit `lib/constants.ts`:
- Name, email, GitHub, LinkedIn
- Tagline and specialties

### Add Your Data

- **Experience**: `lib/data/experience.ts`
- **Skills**: `lib/data/skills.ts`
- **Projects**: `lib/data/projects.ts`

**See `DATA_UPDATE_GUIDE.md` for step-by-step instructions.**

### GitHub Pages Setup

If deploying to `username.github.io/repo-name`, update `next.config.js`:

```javascript
basePath: '/repo-name',
assetPrefix: '/repo-name',
```

## 🔌 API Integrations

### GitHub Integration

- Set `NEXT_PUBLIC_GITHUB_USERNAME` in `.env.local`
- Optional: Add `NEXT_PUBLIC_GITHUB_TOKEN` for higher rate limits
- See `lib/github.ts` for implementation

### LinkedIn Integration

- Manual data entry recommended (see `lib/linkedin.ts`)
- LinkedIn API requires OAuth 2.0 approval
- Update `manualLinkedInData` object with your info
- [ ] Responsive refinement
- [ ] Accessibility audit
- [ ] Deploy to Vercel

## Configuration

Update `lib/constants.ts` with your personal information:
- Name
- Email
- GitHub URL
- LinkedIn URL
- Tagline

## Design Philosophy

- **Professional Side**: Ultra-clean, minimalist, high-impact typography (Isaac Powell/The Line Studio inspired)
- **Personal Side**: Colorful, playful, creative chaos with vibrant gradients
- **Transition**: Smooth fade and swap between modes

See `DESIGN_CONCEPT.md` for full design specifications.

## License

MIT
