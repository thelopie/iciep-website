import { Helmet } from 'react-helmet-async';
import seoConfig from '../config/seoConfig';

/**
 * SEO Component for managing meta tags, Open Graph tags, Twitter Cards,
 * canonical URLs, and structured data (JSON-LD)
 *
 * @param {Object} props
 * @param {string} props.title - Page title (will be combined with template)
 * @param {string} props.description - Page meta description
 * @param {string} props.pathname - Current page pathname (for canonical URL)
 * @param {string[]} props.keywords - Array of keywords for the page
 * @param {string} props.image - Custom Open Graph image path (optional)
 * @param {Object} props.schema - Custom structured data object (optional)
 * @param {string} props.type - Open Graph type (default: 'website')
 */
const SEO = ({
  title,
  description,
  pathname = '/',
  keywords = [],
  image,
  schema,
  type = 'website',
}) => {
  // Get page-specific data from config or use props
  const pageMeta = seoConfig.getPageMeta(pathname);

  // Merge props with config, props take priority
  const finalTitle = title || pageMeta.title || seoConfig.defaultTitle;
  const fullTitle = pathname === '/' ? finalTitle : seoConfig.titleTemplate.replace('%s', finalTitle);
  const finalDescription = description || pageMeta.description || seoConfig.defaultDescription;
  const finalKeywords = keywords.length > 0 ? keywords : pageMeta.keywords || [];
  const finalSchema = schema || pageMeta.schema;

  // URLs
  const canonical = seoConfig.getCanonicalUrl(pathname);
  const imageUrl = seoConfig.getImageUrl(image || pageMeta.image);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDescription} />
      {finalKeywords.length > 0 && <meta name="keywords" content={finalKeywords.join(', ')} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={seoConfig.organizationName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={imageUrl} />
      {seoConfig.twitterHandle && (
        <meta property="twitter:site" content={seoConfig.twitterHandle} />
      )}

      {/* Structured Data (JSON-LD) */}
      {finalSchema && (
        <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={seoConfig.organizationName} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO;
