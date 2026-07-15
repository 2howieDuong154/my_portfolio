# Dương Thanh Hoài — Portfolio

A responsive personal portfolio for software engineer **Dương Thanh Hoài**. The site presents professional experience, technical skills, certifications, selected projects, and contact information in a modern single-page layout.

The content is written in Vietnamese and is managed from a central data file, making the portfolio straightforward to update without changing each UI component.

## Features

- Responsive single-page design for desktop and mobile
- Smooth section navigation with a collapsible mobile menu
- Scroll-triggered reveals and interactive animations
- Profile, skills, experience, certifications, and project sections
- Downloadable CV and direct contact links
- Accessible focus styles and reduced-motion support
- Reusable, data-driven React components

## Built with

- [React 19](https://react.dev/) for the component-based interface
- [Vite 8](https://vite.dev/) for development and production builds
- [Tailwind CSS 3](https://tailwindcss.com/) for styling and responsive layouts
- [Framer Motion](https://motion.dev/) for animations
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for static analysis

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) `20.19+` or `22.12+`
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/2howieDuong154.git
cd my_portfolio
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint across the project. |

## Project structure

```text
portfolio/
├── public/                 # Images, certificate artwork, CV, and favicon
├── src/
│   ├── components/         # Page sections and shared animation components
│   ├── data/data.js        # Portfolio content and profile details
│   ├── App.jsx             # Page composition
│   ├── index.css           # Tailwind layers and custom visual styles
│   └── main.jsx            # React entry point
├── index.html              # HTML shell and page metadata
├── tailwind.config.js      # Theme colors, fonts, and animations
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and npm scripts
```

## Customization

Most portfolio content can be edited in [`src/data/data.js`](src/data/data.js):

- `profile` — name, role, contact details, CV, and GitHub URL
- `about` — biography and highlights
- `skills` — skill categories and technologies
- `experience` — employment history
- `education` and `certifications` — education and credentials
- `projects` — project descriptions, tags, images, demo links, and repositories
- `siteTechnologies` — technologies highlighted in the “built with” section

Store static files such as the CV and project images in `public/`, then reference them with root-relative paths such as `/CV.pdf` or `/background_image/project.png`.

Visual design tokens—including the navy, ivory, teal, and sand palette—are defined in [`tailwind.config.js`](tailwind.config.js). Section backgrounds and global behavior are defined in [`src/index.css`](src/index.css).

For project action buttons to open valid destinations, add `link` and `repo` values to each project object:

```js
{
  title: "Project name",
  description: "Short project summary.",
  tags: ["React", "Spring Boot"],
  image: "/background_image/project.png",
  link: "https://example.com",
  repo: "https://github.com/username/repository",
}
```

Update the page title and description in [`index.html`](index.html) before publishing.

## Production build

```bash
npm run build
npm run preview
```

The generated `dist/` directory can be deployed to any static hosting provider, such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
