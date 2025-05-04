'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    return {
      href,
      label,
      isCurrent: index === pathSegments.length - 1,
    };
  });

  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-accent hover:text-accent/80">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2 text-muted-foreground">/</span>
            {crumb.isCurrent ? (
              <span className="text-foreground">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-accent hover:text-accent/80"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 