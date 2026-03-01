# ICI Equity Partners Website

Official website for ICI Equity Partners LLC, an operationally-focused private equity investor partnering with North American companies.

## 🚀 Live Site

**Production:** [https://www.iciep.com](https://www.iciep.com)

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Azure Deployment](#azure-deployment)
- [SEO Configuration](#seo-configuration)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI framework
- **Vite 5.1** - Build tool and dev server
- **Material UI 5.15** - Component library
- **React Router 6.22** - Client-side routing
- **Emotion** - CSS-in-JS styling

### Backend (Azure Functions)
- **Node.js** - Runtime
- **Azure Communication Services** - Email delivery
- **Azure Functions** - Serverless API

### Deployment
- **Azure Static Web Apps** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

### SEO
- **react-helmet-async** - Dynamic meta tag management
- **JSON-LD Structured Data** - Rich search results
- **Open Graph & Twitter Cards** - Social media optimization

---

## ✨ Features

### User-Facing Features
- 🎨 Modern, responsive design with Material UI
- 📱 Mobile-first responsive layout
- 🎭 Smooth page transitions and animations
- 📧 Contact form with Azure email integration
- 🔍 Comprehensive SEO optimization
- 🌐 8 pages: Home, Philosophy, Approach, Investments, Contact, Privacy, Terms, Disclaimer

### Technical Features
- ⚡ Fast page loads with Vite
- 🔒 Security headers (X-Content-Type-Options, X-Frame-Options)
- 🤖 robots.txt and sitemap.xml for search engines
- 📊 Google Analytics ready
- 🎯 Open Graph and Twitter Card support
- 📈 Structured data for rich search results

---

## 📁 Project Structure

```
iciep-website/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # CI/CD workflow
├── api/                                  # Azure Functions backend
│   ├── contact/
│   │   ├── index.js                     # Contact form handler
│   │   └── function.json                # Function config
│   ├── host.json                        # Azure Functions host config
│   └── package.json                     # API dependencies
├── public/                              # Static assets
│   ├── images/
│   │   ├── logo.jpg                     # ICI brand logo
│   │   ├── logo.png                     # Logo for structured data
│   │   └── og-image.jpg                 # Open Graph image (1200x630)
│   ├── favicon.ico                      # Site favicon
│   ├── robots.txt                       # Crawler directives
│   └── sitemap.xml                      # Site structure for search engines
├── src/
│   ├── components/
│   │   ├── Footer.jsx                   # Site footer with social links
│   │   ├── Logo.jsx                     # ICI logo component
│   │   ├── Navigation.jsx               # Main navigation bar
│   │   └── SEO.jsx                      # SEO meta tags component
│   ├── config/
│   │   └── seoConfig.js                 # SEO metadata for all pages
│   ├── pages/
│   │   ├── Home.jsx                     # Landing page
│   │   ├── Philosophy.jsx               # Investment philosophy
│   │   ├── Approach.jsx                 # Value creation approach
│   │   ├── Investments.jsx              # Portfolio page
│   │   ├── ContactUs.jsx                # Contact form
│   │   ├── PrivacyPolicy.jsx           # Privacy policy
│   │   ├── TermsConditions.jsx         # Terms and conditions
│   │   └── Disclaimer.jsx              # Legal disclaimer
│   ├── App.jsx                          # Main app component with routing
│   ├── main.jsx                         # App entry point
│   └── theme.js                         # Material UI theme config
├── index.html                           # HTML template
├── package.json                         # Frontend dependencies
├── staticwebapp.config.json            # Azure Static Web Apps config
└── vite.config.js                       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git**
- **Azure account** (for deployment)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thelopie/iciep-website.git
   cd iciep-website
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install API dependencies:**
   ```bash
   cd api
   npm install
   cd ..
   ```

4. **Set up environment variables** (see [Environment Variables](#environment-variables))

5. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

---

## 💻 Development

### Running Locally

**Frontend only:**
```bash
npm run dev
```

**With Azure Functions (API):**
```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Run both frontend and API
swa start http://localhost:3000 --api-location ./api
```

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## ☁️ Azure Deployment

### Azure Static Web Apps Configuration

This site is deployed to **Azure Static Web Apps** with the following configuration:

#### Key Settings

| Setting | Value |
|---------|-------|
| **App Location** | `/` (root) |
| **API Location** | `/api` |
| **Output Location** | `dist` |
| **Build Command** | `npm run build` |
| **Node Version** | 18+ |

#### Configuration File: `staticwebapp.config.json`

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*", "/css/*", "/js/*", "/api/*", "/*.{xml,txt,json,ico,svg,png}"]
  },
  "routes": [
    { "route": "/sitemap.xml", "headers": { "content-type": "application/xml; charset=utf-8" } },
    { "route": "/robots.txt", "headers": { "content-type": "text/plain" } },
    { "route": "/api/*", "allowedRoles": ["anonymous"] },
    { "route": "/*", "serve": "/index.html", "statusCode": 200 }
  ],
  "globalHeaders": {
    "cache-control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY"
  }
}
```

### GitHub Actions CI/CD

**Workflow:** `.github/workflows/azure-static-web-apps.yml`

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Process:**
1. Checkout code
2. Install dependencies
3. Build frontend (`npm run build`)
4. Deploy to Azure Static Web Apps
5. Deploy API (Azure Functions)

**Secrets Required:**
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Azure deployment token

### Manual Deployment

If needed, you can deploy manually:

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Build the app
npm run build

# Deploy (requires Azure login)
swa deploy --app-location . --output-location dist --api-location api
```

---

## 🔍 SEO Configuration

### Meta Tags

All pages include:
- ✅ Unique title tags (template: "Page Title | ICI Equity Partners")
- ✅ Custom meta descriptions
- ✅ Targeted keywords
- ✅ Canonical URLs
- ✅ Open Graph tags (og:title, og:description, og:image, og:url)
- ✅ Twitter Card tags
- ✅ robots meta tag

### Structured Data (JSON-LD)

**Home Page:**
```json
{
  "@type": "Organization",
  "name": "ICI Equity Partners",
  "logo": "https://www.iciep.com/images/logo.png",
  "address": [
    { "addressLocality": "Philadelphia", "addressRegion": "PA" },
    { "addressLocality": "Chicago", "addressRegion": "IL" }
  ]
}
```

**Contact Page:**
```json
{
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "email": "info@iciep.com",
    "contactPoint": [...]
  }
}
```

### SEO Files

- **robots.txt** - `/public/robots.txt`
- **sitemap.xml** - `/public/sitemap.xml` (all 8 routes with priorities)

### Updating SEO Content

Edit `src/config/seoConfig.js` to modify:
- Page titles and descriptions
- Keywords
- Open Graph settings
- Structured data schemas

---

## 🔐 Environment Variables

### Frontend (Vite)

No environment variables required for frontend.

If needed, prefix with `VITE_`:
```env
VITE_API_URL=https://www.iciep.com/api
```

### API (Azure Functions)

**Required environment variables:**

```env
AZURE_COMMUNICATION_CONNECTION_STRING=endpoint=https://...
AZURE_COMMUNICATION_FROM_EMAIL=donotreply@iciep.com
AZURE_COMMUNICATION_TO_EMAIL=info@iciep.com
```

**Setting in Azure Portal:**
1. Go to your Static Web App resource
2. Navigate to **Configuration** > **Application settings**
3. Add the environment variables above

**Local Development:**

Create `api/local.settings.json`:
```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AZURE_COMMUNICATION_CONNECTION_STRING": "your-connection-string",
    "AZURE_COMMUNICATION_FROM_EMAIL": "donotreply@iciep.com",
    "AZURE_COMMUNICATION_TO_EMAIL": "info@iciep.com"
  }
}
```

⚠️ **Note:** `local.settings.json` is gitignored for security.

---

## 📜 Scripts

### Frontend

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### API

| Script | Description |
|--------|-------------|
| `cd api && npm install` | Install API dependencies |
| `func start` | Run Azure Functions locally (requires Azure Functions Core Tools) |

---

## 📊 SEO Verification

### Test Tools

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test: https://www.iciep.com

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Test Open Graph tags

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Test Twitter Card tags

4. **Lighthouse SEO Audit**
   - Chrome DevTools → Lighthouse tab
   - Target score: 95-100

### Submit to Search Engines

1. **Google Search Console**
   - Add property: https://www.iciep.com
   - Submit sitemap: https://www.iciep.com/sitemap.xml

2. **Bing Webmaster Tools**
   - Add site: https://www.iciep.com
   - Submit sitemap: https://www.iciep.com/sitemap.xml

---

## 🤝 Contributing

### Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally:
   ```bash
   npm run dev
   ```

3. Build to verify no errors:
   ```bash
   npm run build
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- **ESLint** configuration in `.eslintrc.cjs`
- **Prettier** recommended (VSCode extension)
- Use functional components and hooks
- Follow Material UI patterns

### Adding New Pages

1. **Create page component:**
   ```jsx
   // src/pages/NewPage.jsx
   import { useEffect } from 'react';
   import { Box, Container, Typography, Fade } from '@mui/material';
   import SEO from '../components/SEO';

   const NewPage = () => {
     useEffect(() => {
       if (typeof window !== 'undefined') {
         document.dispatchEvent(new Event('render-event'));
       }
     }, []);

     return (
       <Fade in timeout={800}>
         <Box>
           <SEO pathname="/new-page" />
           {/* Page content */}
         </Box>
       </Fade>
     );
   };

   export default NewPage;
   ```

2. **Add route in App.jsx:**
   ```jsx
   import NewPage from './pages/NewPage';

   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add SEO metadata in seoConfig.js:**
   ```javascript
   '/new-page': {
     title: 'Page Title',
     description: 'Page description...',
     keywords: ['keyword1', 'keyword2'],
     schema: { /* JSON-LD schema */ }
   }
   ```

4. **Update sitemap.xml:**
   ```xml
   <url>
     <loc>https://www.iciep.com/new-page</loc>
     <lastmod>2026-03-01</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

---

## 🎨 Design System

### Colors
- **Primary (ICI Red)**: #C0392B
- **Secondary (Dark Charcoal)**: #1a1a2e
- **Background**: White (#ffffff)

### Typography
- **Font Family**: Roboto (Material UI default)
- **Headings**: Bold, 700 weight
- **Body**: Regular, line-height 1.7-1.8

### Components
- **Buttons**: Contained style with ICI red
- **Cards**: White Paper with subtle elevation
- **Navigation**: Sticky AppBar with animated underlines
- **Logo**: Red circle with white "ICI" text + stacked "EQUITY PARTNERS"

---

## 📝 License

Copyright © 2021 ICI Equity Partners LLC. All Rights Reserved.

---

## 📞 Support

For questions or support, contact:
- **Email:** info@iciep.com
- **Website:** https://www.iciep.com/contact-us

---

## 🎯 Roadmap

- [ ] Add portfolio showcase (investments page)
- [ ] Implement static HTML prerendering with vite-ssg
- [ ] Add Google Analytics 4 integration
- [ ] Create additional Open Graph images per page
- [ ] Add blog/news section
- [ ] Implement A/B testing for CTAs

---

**Built with ❤️ using React, Vite, and Azure Static Web Apps**
