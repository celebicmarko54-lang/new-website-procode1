# Copilot Instructions for vibesdk

This document provides guidance for GitHub Copilot when working with this repository.

## Project Overview

This is **vibesdk** - an AI-powered full-stack application generation platform built on Cloudflare infrastructure.

## Critical Workflow Rules

### DO NOT Run Locally

**Never run this project locally.** The workflow is:

1. Make all changes in the codebase.
2. Commit and push to GitHub
3. Cloudflare will automatically deploy via CI/CD
4. Live preview is available at **magicapptesting.com**

When asked to run, start, or test the application, respond with:
> "Changes will be committed and pushed to GitHub. Cloudflare CI/CD will automatically deploy. Live preview available at magicapptesting.com"

### Frontend-Only Changes

**ONLY modify frontend/design code.** Do not touch:

- `/worker/` directory (backend logic)
- `/migrations/` directory (database)
- API routes or controllers
- Backend services
- Any business logic
- WebSocket handlers
- Durable Objects code
- LLM/AI agent code

### Already Configured

All APIs and infrastructure are already set up through the Cloudflare VibeSDK wizard:

- API keys stored in Cloudflare
- D1 database configured
- AI Gateway configured
- Workers deployed
- Containers/Sandbox configured

**Do not attempt to reconfigure or set up any infrastructure.**

## Frontend Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v7
- **UI Components:** Radix UI primitives + shadcn/ui
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **State Management:** React Context + Custom Hooks

## Frontend Structure

```
/src
├── components/       # React components
│   ├── ui/          # Base UI components (shadcn/ui style)
│   ├── primitives/  # Low-level building blocks
│   ├── shared/      # Shared components across routes
│   ├── layout/      # Layout components
│   ├── icons/       # Custom icon components
│   └── analytics/   # Analytics components
├── routes/          # Route components
│   ├── app/         # App route
│   ├── apps/        # Apps listing
│   ├── chat/        # Chat interface
│   ├── discover/    # Discover page
│   └── settings/    # Settings pages
├── hooks/           # Custom React hooks
├── contexts/        # React contexts
├── lib/             # Utility libraries
├── utils/           # Utility functions
├── assets/          # Static assets (fonts, images)
└── api-types.ts     # API type definitions
```

## Code Style Guidelines

### Communication Style

- Be professional, concise, and direct
- **Do NOT use emojis** in code, comments, or generated content
- Use clear technical language
- Comments explain purpose, not narration

### TypeScript

- **Never use `any` type** - find or create proper types
- Import frontend types from `@/api-types` (single source of truth)
- Search codebase for existing types before creating new ones

### React Components

- Use functional components with hooks
- File naming: PascalCase.tsx for components
- Prefer composition over inheritance
- Use TypeScript interfaces for props

### Styling

- Use TailwindCSS utility classes
- Follow existing color scheme and design tokens
- **Always support dark mode** - use theme CSS variables, not hardcoded colors
- Use `cn()` utility for conditional classes

### Theme Support (Critical)

The project uses CSS variables for theming. **Never use hardcoded colors like `text-gray-800` or `bg-white`.**

**Brand Colors (Red Gradient):**
- Primary gradient: `linear-gradient(135deg, #E50914 0%, #E50914 100%)`
- Primary red: `#E50914`
- Secondary red: `#E50914`

Instead, use the theme-aware classes:
- **Backgrounds:** `bg-bg-1`, `bg-bg-2`, `bg-bg-3`, `bg-bg-4` (with `dark:` variants)
- **Text:** `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- **Borders:** `border-border-primary`, `border-border-secondary`
- **Accent:** `text-accent`, `bg-accent`

Example of proper dark mode support:
```tsx
// CORRECT - uses theme variables
<div className="bg-bg-4 dark:bg-bg-2 text-text-primary border-border-primary">

// WRONG - hardcoded colors break dark mode
<div className="bg-white text-gray-800 border-gray-200">

// For gradient buttons, use inline style:
<button style={{ background: 'linear-gradient(135deg, #E50914 0%, #E50914 100%)' }}>
```

### DRY Principle

- Search for similar functionality before implementing
- Extract reusable utilities, hooks, and components
- Never copy-paste code - refactor into shared functions

## UI Component Library

The project uses shadcn/ui-style components in `/src/components/ui/`:

- `button.tsx` - Button variants
- `card.tsx` - Card containers
- `dialog.tsx` - Modal dialogs
- `dropdown-menu.tsx` - Dropdown menus
- `input.tsx` - Form inputs
- `select.tsx` - Select dropdowns
- `tabs.tsx` - Tab navigation
- `tooltip.tsx` - Tooltips
- And many more...

Use existing components before creating new ones.

## File Naming Conventions

- **React Components:** PascalCase.tsx (e.g., `Header.tsx`)
- **Utilities/Hooks:** kebab-case.ts (e.g., `use-theme.ts`)
- **Types:** kebab-case.ts (e.g., `api-types.ts`)

## What You Can Modify

1. **UI Components** (`/src/components/`)
   - Styling and layout
   - Component structure
   - Visual design
   - Animations

2. **Styles** (`/src/index.css`, TailwindCSS classes)
   - Colors and themes
   - Typography
   - Spacing
   - Responsive design

3. **Route Components** (`/src/routes/`)
   - Page layouts
   - Component composition
   - Visual presentation

4. **Assets** (`/src/assets/`)
   - Images
   - Fonts
   - Icons

5. **Static Files** (`/public/`)
   - Favicon
   - Static assets

## What You Must NOT Modify

1. **Worker/Backend** (`/worker/`)
2. **Database Migrations** (`/migrations/`)
3. **API Types** (`/src/api-types.ts`) - unless adding new frontend-only types
4. **API Client** (`/src/lib/api-client.ts`)
5. **Configuration Files** for deployment (wrangler.jsonc, etc.)
6. **Environment Variables**

## Common Design Tasks

### Change Colors/Theme

Edit TailwindCSS config or CSS variables in `/src/index.css`

### Modify Component Appearance

Edit component files in `/src/components/ui/` or create wrapper components

### Add New UI Elements

1. Check if similar component exists
2. Use existing UI primitives from `/src/components/ui/`
3. Follow existing patterns and naming conventions

### Update Page Layout

Edit route components in `/src/routes/`

## Testing Changes

Since we don't run locally:

1. Make changes
2. Commit with descriptive message
3. Push to main branch
4. Wait for Cloudflare deployment
5. Verify at magicapptesting.com

## Git Workflow

```bash
git add .
git commit -m "feat: describe your frontend change"
git push origin main
```

Cloudflare CI/CD handles the rest automatically.

## Important Reminders

1. **Frontend only** - No backend changes
2. **No local running** - Commit, push, deploy via CI/CD
3. **Live preview** at magicapptesting.com
4. **Reuse existing components** - Don't reinvent
5. **Follow existing patterns** - Consistency is key
6. **No emojis** in code or comments
7. **Type safety** - No `any` types
8. **Production-ready code** - No TODOs or placeholders
