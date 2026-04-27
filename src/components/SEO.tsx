import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const SITE_URL = "https://harborlineband.com";
const DEFAULT_TITLE = "Harborline | Baltimore's Premier Event & Corporate Band";
const DEFAULT_DESC =
  "Top-rated live entertainment for weddings, galas, corporate events, and private celebrations in Baltimore, Maryland, Washington DC, and the Mid-Atlantic.";
const DEFAULT_OG = `${SITE_URL}/icon-512.png`;

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const finalTitle = title ?? DEFAULT_TITLE;
  const finalDesc = description ?? DEFAULT_DESC;
  const finalCanonical = canonical ?? SITE_URL;
  const finalOg = ogImage ?? DEFAULT_OG;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={finalOg} />
      <meta property="og:site_name" content="Harborline" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalOg} />
    </Helmet>
  );
}
