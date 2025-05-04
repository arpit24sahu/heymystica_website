"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/config/site";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-[var(--header-height)] z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-full">
        <Link 
          href="/" 
          className="flex items-center"
          aria-label="HeyMystica Home"
        >
          <span className="text-2xl font-bold font-decorative text-glow gradient-text">
            HeyMystica
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 text-sm">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md transition-colors hover:text-accent font-heading tracking-wide",
                pathname === item.href && "text-accent"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/#download"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md px-4 py-2 border border-yellow-500 bg-white text-yellow-600 hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
          >
            Download App
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu"
              className="text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[385px] mystic-bg border-l border-accent/20">
            <div className="flex flex-col h-full py-6">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" aria-label="Close">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-6 mt-8">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-md transition-all text-lg hover:text-accent font-heading tracking-wide hover:bg-secondary/30",
                      pathname === item.href && "text-accent bg-secondary/20"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link 
                  href="/#download" 
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full mt-6 accent-bg hover:bg-accent/90"
                  )}
                >
                  Download App
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}