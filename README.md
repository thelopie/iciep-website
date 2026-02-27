# ICI Equity Partners Website

A modern, single-page React application for ICI Equity Partners, a private equity firm focused on North American companies.

## Features

- **React 18** with React Router v6 for seamless navigation
- **Material-UI v5** for modern, responsive design
- **Custom Brand Theme** with ICI red (#C0392B) and dark charcoal colors
- **Fully Responsive** - mobile-first design that works on all devices
- **Smooth Animations** - fade-in transitions and hover effects
- **4 Main Sections**:
  - Home - Value creation hero with overlapping card
  - Philosophy - Investment philosophy and exit strategy
  - Approach - Active investor methodology with feature cards
  - Investments - Under construction placeholder

## Tech Stack

- React 18.2
- React Router DOM 6.22
- Material-UI (MUI) 5.15
- Emotion (CSS-in-JS)
- Vite (build tool)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
ici-equity-partners/
├── src/
│   ├── components/
│   │   ├── Logo.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Approach.jsx
│   │   └── Investments.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── theme.js
├── index.html
├── package.json
└── vite.config.js
```

## Design System

### Colors
- **Primary (ICI Red)**: #C0392B
- **Secondary (Dark Charcoal)**: #1a1a2e
- **Background**: White (#ffffff)

### Typography
- Font Family: Roboto (MUI default)
- Headings: Bold, 700 weight
- Body: Regular, line-height 1.7-1.8

### Components
- **Buttons**: Outlined style with red border
- **Cards**: White Paper with elevation
- **Navigation**: Sticky AppBar with red underlines
- **Logo**: Red circle with white "ICI" text

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

Copyright © 2021 ICI Equity Partners LLC. All Rights Reserved.
