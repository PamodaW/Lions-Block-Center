# Lions Block Center

Company website for Lions Block Center, built with [Next.js](https://nextjs.org) (App Router), React 19 and TypeScript. It is exported as a static site and supports multiple languages.

## Requirements

- [Node.js](https://nodejs.org) 20 or newer
- npm (comes with Node.js)
- [Git](https://git-scm.com)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/PamodaW/Lions-Block-Center.git
   cd Lions-Block-Center
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads as you edit files.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the development server                 |
| `npm run build` | Create the production build (static export)  |
| `npm run start` | Serve the production build locally           |
| `npm run lint`  | Run ESLint                                   |

## Project Structure

```
public/            Static assets (images, icons)
src/app/           Pages and layout (home, services, 404)
src/components/    UI components (layout, sections, ui)
src/lib/           Shared helpers, including translations (i18n)
next.config.ts     Next.js configuration (static export)
.github/workflows/ GitHub Actions (Render deploy)
```

## Deployment

The site is a static export (`output: "export"` in `next.config.ts`) and is hosted on [Render](https://render.com).

- Pushing to `main` (including merging a pull request) runs the **Deploy to Render** workflow, which calls the Render deploy hook.
- The workflow can also be run manually from the **Actions** tab.

### One-time setup

1. In Render, open your service and go to **Settings > Deploy Hook**, then copy the URL.
2. In GitHub, go to **Settings > Secrets and variables > Actions** and add a repository secret named `RENDER_DEPLOY_HOOK_URL` with that URL.

## Contributing

1. Create a branch from `main`: `git checkout -b feature/your-change`
2. Make your changes and run `npm run lint` and `npm run build` to check them.
3. Push the branch and open a pull request into `main`.
