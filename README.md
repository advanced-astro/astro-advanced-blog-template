# [Astro](https://astro.build) Advanced Blog Template

![Astro](https://img.shields.io/badge/astro-1.9.0-blue) [![Netlify Status](https://api.netlify.com/api/v1/badges/acde8324-2040-411a-994d-516b6b2f63a8/deploy-status)](https://app.netlify.com/sites/astro-advanced-blog-template/deploys) ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=astro-advanced-blog-template) ![License](https://img.shields.io/badge/license-MIT-blue)

## 👉 Check out the Live Demos at ✨ [Netlify](https://astro-advanced-blog-template.netlify.app/) or ✨ [Vercel](https://astro-advanced-blog-template.vercel.app/)

## 👩‍🚀 Getting Started

### Locally

```sh
# Using NPM
npm init astro -- --template redwerkz/astro-advanced-blog-template
# Using Yarn
yarn create astro -- --template redwerkz/astro-advanced-blog-template
# Using PNPM
pnpm create astro -- --template redwerkz/astro-advanced-blog-template
```

### Web

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/gitlab/withastro/astro-advanced-blog-template)
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/redwerkz/astro-advanced-blog-template/tree/main)

### Deploy

[![Deploy on Netlify](https://netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/redwerkz/astro-advanced-blog-template)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/redwerkz/astro-advanced-blog-template)

## ✨ Features

- [x] 🚀 [Astro 1.0](https://astro.build/blog/astro-1/) Static Site Generation (SSG)
- [x] 💯 Full Score on performance + all Web Core Vitals
- [x] 👌 Zero JS runtime
- [x] 🌑 Dark Mode
- [x] ⭐ Next-Gen favicons ([SVG](https://caniuse.com/link-icon-svg)+[PNG](https://caniuse.com/link-icon-png))
- [x] 📈 SEO-friendly setup with canonical URLs and OpenGraph data
- [x] 📝 Full Markdown support ([MDX](https://mdxjs.com/))
- [x] 🗺 [Sitemap generation](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [x] 🗜️ [Site compression](https://github.com/Playform/astro-compress#readme)
- [x] ⬆️ Deploy to Netlify, Vercel or [FTP](https://github.com/simonh1000/ftp-deploy#readme)
- [x] 🤖 robots.txt
- [ ] 🌐 RSS 2.0 generation

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```txt
/
├── public/
│   ├── assets/
│   │   └── icons/
│   │       ├── favicon_dark-16.png
│   │       ├── favicon_dark-16.png
│   │       ├── favicon_light-16.png
│   │       ├── favicon_light-16.png
│   │       └── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Bio.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Logo.astro
│   │   └── Nav.astro
|   ├── data/
|   |   └── blog-posts/
|   |       ├── hello-world.md
|   |       └── markdown-test.md
|   ├── layouts/
|   |   └── BaseLayout.astro
│   ├── pages/
│   |   ├── blog/
│   |   |   ├── [slug].astro
|   |   |   └── index.astro
│   |   ├── about.astro
│   |   └── index.astro
|   ├── styles/
|   |   ├── fonts.css
|   |   └── global.css
|   └── utils/
|       └── getPostData.ts
├── .gitignore
├── .npmrc
├── astro.config.mjs
├── deploy.js
├── LICENSE
├── pnpm-lock.yaml
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3030`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
| `pnpm deploy`      | Deploy your build via FTP                    |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
