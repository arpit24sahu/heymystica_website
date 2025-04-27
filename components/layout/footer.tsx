import Link from "next/link";
import { siteConfig, footerLinks, quotes } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="bg-background border-t border-border/40 relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-30 pointer-events-none" />
      
      <div className="container px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold font-decorative gradient-text">
                HeyMystica
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Manifest your dreams and desires with our powerful app designed to help you visualize, affirm, and achieve your goals.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter size={18} />
                </Button>
              </Link>
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram size={18} />
                </Button>
              </Link>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook size={18} />
                </Button>
              </Link>
              <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github size={18} />
                </Button>
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-heading text-xl">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-border/40" />

        <div className="text-center mt-6 mb-8">
          <blockquote className="italic text-lg text-glow">
            "{randomQuote}"
          </blockquote>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HeyMystica. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}