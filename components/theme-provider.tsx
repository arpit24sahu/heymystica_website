"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { createThemeCssVars } from "@/lib/theme-utils";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Apply CSS variables when component mounts
  React.useEffect(() => {
    // Get the document root element
    const root = document.documentElement;
    
    // Force dark mode for consistent purple theme
    root.classList.add('dark');
    
    // Get theme CSS variables
    const cssVars = createThemeCssVars();
    
    // Apply the variables to the root element
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // Apply critical inline styles to ensure the theme takes effect immediately
    // This helps prevent FOUC (Flash of Unstyled Content)
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        color-scheme: dark;
      }
      body {
        background-color: rgb(26, 0, 51);
        color: rgb(248, 247, 255);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <NextThemesProvider {...props} forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}