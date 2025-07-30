# Personal Website

This is my [personal website](https://tyalau.github.io/), built with **Next.js** and **Material UI**. It displays my profile, projects, and blog posts, powered by dynamic content sources.

## Tech Stack

- [Next.js](https://nextjs.org/) – React framework with static site export
- [Material UI](https://mui.com/) – UI component library

## Content Management

- **Profile**: Loaded from a public [GitHub Gist](https://gist.github.com/) and configured via environment variables
- **Projects**: Fetched from the [GitHub Repos API](https://docs.github.com/en/rest/repos/repos)
- **Blogs**: Pulled from a [Medium RSS feed](https://help.medium.com/hc/en-us/articles/214874118-Using-RSS-feeds-of-profiles-publications-and-topics)

## Features

- Responsive UI built with Material UI
- Data fetching from GitHub Gist, GitHub API, and Medium RSS at build time
- Automatically deployed to GitHub Pages using a GitHub Actions workflow
