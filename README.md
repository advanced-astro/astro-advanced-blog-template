# [Astro](https://astro.build) Blog Template

[![Screenshot](screenshot.png)](https://astro-blog-template.netlify.app/)

## 👉 Check out the ✨ [Live Demo](https://astro-blog-template.netlify.app/) ✨

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

### On StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/charca/astro-blog-template)

## ✨ Features

- ✅ Astro 1.0
- ✅ Dark Mode
- ✅ Full Markdown support
- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ RSS 2.0 generation
- ✅ Sitemap.xml generation
- 🗜️ Source compression by [astro-compress](https://github.com/Playform/astro-compress#readme)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```txt
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
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

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
