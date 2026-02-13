# Fashion Design Studio

A modern **frontend-only** fashion e-commerce interface built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. The app showcases fashion designs, provides detail pages, and includes a static cart experience using mock data.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React functional components

## Features

- Elegant home page with hero, featured designs, and category section
- Designs page with reusable product cards
- Dynamic design detail pages (`/designs/[id]`)
- Static cart page with pricing summary
- Reusable UI components (navbar, footer, button, container, product card, category filter)
- Optimized images with `next/image`
- Responsive layout for mobile and desktop

## Project Structure

```text
app/
  cart/page.tsx
  designs/
    [id]/page.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  Button.tsx
  CategoryFilter.tsx
  Container.tsx
  Footer.tsx
  Navbar.tsx
  ProductCard.tsx
data/
  products.ts
lib/
  utils.ts
types/
  product.ts
public/images/
  *.svg
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Notes

- This is a UI-only project with static mock data.
- No backend, authentication, or database is included.
