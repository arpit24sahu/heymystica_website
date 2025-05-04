import { siteConfig } from '@/lib/config/site';

interface CanonicalUrlProps {
  path?: string;
}

export function CanonicalUrl({ path }: CanonicalUrlProps) {
  const canonicalUrl = path
    ? `${siteConfig.url}${path}`
    : siteConfig.url;

  return (
    <link
      rel="canonical"
      href={canonicalUrl}
    />
  );
} 