# Personal Website

This is my [personal website](https://tyalau.github.io/), built with **Next.js** and **Material UI**. It displays my profile and projects, powered by [Sanity](https://www.sanity.io/) and the GitHub API.

## Tech Stack

- [Next.js](https://nextjs.org/) – React framework with static site export
- [Material UI](https://mui.com/) – UI component library
- [Sanity](https://www.sanity.io/) – headless CMS

## Content Management

- **Site settings & profile**: Managed in Sanity (name, GitHub username, metadata, experience, tech stack, featured repo names)
- **Projects**: Featured repos chosen in Sanity, with details fetched from the [GitHub Repos API](https://docs.github.com/en/rest/repos/repos)

## Getting Started

```bash
cp .env.example .env   # then fill in the values
pnpm install
pnpm dev
```

## Features

- Responsive UI built with Material UI
- Data fetching from Sanity and the GitHub API at build time
- Automatically deployed to GitHub Pages using a GitHub Actions workflow
