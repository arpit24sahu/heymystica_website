import { Header } from "./header";
import { Footer } from "./footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[var(--header-height)]">{children}</main>
      <Footer />
    </div>
  );
}