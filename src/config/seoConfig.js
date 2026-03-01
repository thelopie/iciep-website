// SEO Configuration for ICI Equity Partners Website
// Centralized metadata for all pages

const seoConfig = {
  // Site-wide defaults
  siteUrl: 'https://www.iciep.com', // Update with actual production domain
  defaultTitle: 'ICI Equity Partners',
  titleTemplate: '%s | ICI Equity Partners',
  defaultDescription:
    'An operationally-focused private equity investor partnering with North American companies to unlock their full potential through strategic capital and operational excellence.',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@iciequity',
  organizationName: 'ICI Equity Partners LLC',
  organizationLogo: '/images/logo.png',

  // Per-page SEO metadata
  pages: {
    '/': {
      title: 'Building Value, Driving Growth',
      description:
        'An operationally-focused private equity investor partnering with North American companies to unlock their full potential through strategic capital and operational excellence.',
      keywords: [
        'private equity',
        'value creation',
        'North America',
        'operational excellence',
        'growth capital',
        'strategic investment',
        'business transformation',
        'equity partners',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ICI Equity Partners',
        url: 'https://www.iciep.com',
        logo: 'https://www.iciep.com/images/logo.png',
        description:
          'An operationally-focused private equity investor partnering with North American companies.',
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Philadelphia',
            addressRegion: 'PA',
            addressCountry: 'US',
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Chicago',
            addressRegion: 'IL',
            addressCountry: 'US',
          },
        ],
        sameAs: [
          'https://www.linkedin.com/company/ici-equity-partners',
          'https://twitter.com/iciequity',
          'http://instagram.com/iciequity/',
        ],
      },
    },

    '/philosophy': {
      title: 'Our Investment Philosophy',
      description:
        'ICI Equity Partners transforms businesses through strategic capital and operational expertise. Learn about our partnership-driven approach to unlocking value and preparing companies for successful exits.',
      keywords: [
        'investment philosophy',
        'value creation',
        'strategic partnership',
        'exit strategy',
        'operational expertise',
        'business transformation',
        'private equity approach',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Investment Philosophy',
        provider: {
          '@type': 'Organization',
          name: 'ICI Equity Partners',
        },
        description:
          'Partnership-driven investment philosophy focused on transforming businesses and unlocking exceptional value.',
        serviceType: 'Private Equity Investment',
      },
    },

    '/approach': {
      title: 'Our Approach to Value Creation',
      description:
        'We go beyond financial support with active, hands-on investment. Discover how our operational excellence and strategic initiatives maximize enterprise value and drive sustainable growth.',
      keywords: [
        'active investor',
        'operational excellence',
        'enterprise value',
        'sustainable growth',
        'strategic initiatives',
        'hands-on investment',
        'value maximization',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Investment Approach',
        provider: {
          '@type': 'Organization',
          name: 'ICI Equity Partners',
        },
        description:
          'Active, hands-on investment approach focused on operational excellence and strategic value creation.',
        serviceType: 'Private Equity Investment',
      },
    },

    '/investments': {
      title: 'Our Portfolio',
      description:
        'Building exceptional companies across key industry sectors. Explore our portfolio of successful investments in manufacturing, distribution, financial services, life sciences, and higher education.',
      keywords: [
        'portfolio companies',
        'successful exits',
        'investment track record',
        'private equity portfolio',
        'manufacturing',
        'distribution',
        'financial services',
        'life sciences',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Our Investments',
        description:
          'Portfolio of ICI Equity Partners investments across key industry sectors.',
      },
    },

    '/contact-us': {
      title: 'Contact Us',
      description:
        "Ready to unlock your company's full potential? Contact ICI Equity Partners to discuss partnership opportunities. Offices in Philadelphia, PA and Chicago, IL.",
      keywords: [
        'contact',
        'partnership opportunities',
        'private equity contact',
        'investment inquiry',
        'Philadelphia',
        'Chicago',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact ICI Equity Partners',
        description: 'Contact ICI Equity Partners to discuss partnership opportunities.',
        mainEntity: {
          '@type': 'Organization',
          name: 'ICI Equity Partners',
          email: 'info@iciep.com',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'General Inquiries',
              email: 'info@iciep.com',
            },
          ],
          address: [
            {
              '@type': 'PostalAddress',
              addressLocality: 'Philadelphia',
              addressRegion: 'PA',
              addressCountry: 'US',
            },
            {
              '@type': 'PostalAddress',
              addressLocality: 'Chicago',
              addressRegion: 'IL',
              addressCountry: 'US',
            },
          ],
        },
      },
    },

    '/privacy-policy': {
      title: 'Privacy Policy',
      description:
        'Read ICI Equity Partners\' privacy policy to understand how we collect, use, and protect your personal information.',
      keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'data privacy'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        description: 'Privacy policy for ICI Equity Partners website.',
      },
    },

    '/terms-and-conditions': {
      title: 'Terms and Conditions',
      description: 'Terms and conditions for using the ICI Equity Partners website and services.',
      keywords: ['terms of service', 'website terms', 'legal terms', 'terms and conditions'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms and Conditions',
        description: 'Terms and conditions for ICI Equity Partners website.',
      },
    },

    '/disclaimer': {
      title: 'Disclaimer',
      description:
        'Important disclaimers regarding investment information and website content provided by ICI Equity Partners.',
      keywords: ['disclaimer', 'investment disclaimer', 'legal notice', 'website disclaimer'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Disclaimer',
        description: 'Disclaimer for ICI Equity Partners website.',
      },
    },
  },

  // Helper function to get page-specific metadata
  getPageMeta(pathname) {
    return this.pages[pathname] || {};
  },

  // Helper function to get full title
  getPageTitle(pathname) {
    const pageMeta = this.getPageMeta(pathname);
    if (pageMeta.title && pathname !== '/') {
      return this.titleTemplate.replace('%s', pageMeta.title);
    }
    return pageMeta.title || this.defaultTitle;
  },

  // Helper function to get canonical URL
  getCanonicalUrl(pathname) {
    return `${this.siteUrl}${pathname}`;
  },

  // Helper function to get full image URL
  getImageUrl(imagePath) {
    if (imagePath?.startsWith('http')) {
      return imagePath;
    }
    return `${this.siteUrl}${imagePath || this.defaultImage}`;
  },
};

export default seoConfig;
