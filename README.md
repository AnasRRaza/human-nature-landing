# Human Nature - Landing Page

A beautiful "Coming Soon" landing page for the Human Nature mobile application, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- Dark gradient background with modern aesthetic
- Animated "Launching Soon" text with gradient color transitions
- Smooth fade-in animations
- Animated loading dots
- Fully responsive design
- Uses the same branding as the Human Nature mobile app:
  - Logo with star icon
  - Outfit font family
  - Brand colors: Sage Green (#A3B18A) and Beige (#ECE5DA)

## Getting Started

### Development

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

### Build for Production

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

## Project Structure

```
human-nature-landing/
├── app/
│   ├── globals.css        # Global styles with custom animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Landing page component
├── components/
│   ├── Logo.tsx          # SVG logo component
│   └── LoadingDots.tsx   # Animated loading dots
└── public/              # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Outfit (Google Fonts)

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/human-nature-landing)

## License

This project is part of the Human Nature application suite.
