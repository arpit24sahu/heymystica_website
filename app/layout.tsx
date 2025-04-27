import './globals.css';
import './purple-theme.css';
import type { Metadata } from 'next';
import { Alegreya, Cinzel, Cinzel_Decorative } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/config/site';
import PurpleThemeEnforcer from '@/components/purple-theme-enforcer';
import { Analytics } from "@vercel/analytics/react";

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'manifestation',
    'personal growth',
    'goals',
    'affirmations',
    'self improvement',
    'meditation',
    'journal',
    'law of attraction',
  ],
  authors: [
    {
      name: 'HeyMystica',
      url: siteConfig.url,
    },
  ],
  creator: 'HeyMystica',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@heymystica',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

// Direct CSS overrides to ensure purple background and gold/white text
const purpleStyles = {
  html: {
    '--background': '#2D0B4C',
    '--foreground': '#F8F7FF',
    '--primary': '#4A148C',
    '--accent': '#D4AF37',
    backgroundColor: '#2D0B4C',
    color: '#F8F7FF',
  },
  body: {
    backgroundColor: '#2D0B4C',
    color: '#F8F7FF',
    background: 'linear-gradient(135deg, #2D0B4C 0%, #4A148C 100%)',
    minHeight: '100vh',
  },
  '.heading': {
    color: '#D4AF37',
  },
  '.subheading': {
    color: '#9966CC',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning style={purpleStyles.html} className="purple-theme">
      <head>
        <meta name="theme-color" content="#2D0B4C" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --background: 45 11 76;
            --foreground: 248 247 255;
            --card: 74 20 140;
            --card-foreground: 248 247 255;
            --popover: 74 20 140;
            --popover-foreground: 248 247 255;
            --primary: 74 20 140;
            --primary-foreground: 248 247 255;
            --secondary: 106 27 154;
            --secondary-foreground: 248 247 255;
            --muted: 74 20 140;
            --muted-foreground: 248 247 255;
            --accent: 212 175 55;
            --accent-foreground: 10 10 15;
            --destructive: 153 102 204;
            --destructive-foreground: 248 247 255;
            --border: 74 20 140;
            --input: 45 11 76;
            --ring: 212 175 55;
          }
          
          /* Super-forced purple theme */
          html, body {
            background-color: #2D0B4C !important;
            color: #F8F7FF !important;
            background: linear-gradient(135deg, #2D0B4C 0%, #4A148C 100%) !important;
            min-height: 100vh;
          }
          
          h1, h2, h3, h4, h5, h6 {
            color: #D4AF37 !important;
            font-weight: bold !important;
          }
          
          p, span, div {
            color: #F8F7FF !important;
          }
          
          button, .btn {
            background-color: #4A148C !important;
            color: #F8F7FF !important;
            border-color: #9966CC !important;
          }
          
          button:hover, .btn:hover {
            background-color: #6A1B9A !important;
            box-shadow: 0 0 15px #9966CC !important;
          }
          
          a {
            color: #D4AF37 !important;
            text-decoration: none !important;
          }
          
          a:hover {
            color: #FFD700 !important;
            text-decoration: underline !important;
          }
          
          .card, .bg-card {
            background-color: #4A148C !important;
            border-color: #6A1B9A !important;
          }
          
          .gradient-text {
            background: linear-gradient(to right, #D4AF37, #FFD700) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            color: transparent !important;
          }
          
          .bg-background {
            background-color: #2D0B4C !important;
          }
          
          .mystic-bg {
            background: linear-gradient(to bottom right, #2D0B4C, #4A148C) !important;
          }
          
          .accent-bg {
            background: linear-gradient(to right, #D4AF37, #FFD700) !important;
          }
        `}} />
      </head>
      <body
        className={cn(
          'min-h-screen font-body antialiased',
          cinzel.variable,
          cinzelDecorative.variable,
          alegreya.variable
        )}
        style={purpleStyles.body}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <PurpleThemeEnforcer />
          <div className="purple-theme-wrapper" style={{
            background: 'linear-gradient(135deg, #2D0B4C 0%, #4A148C 100%)',
            minHeight: '100vh',
            color: '#F8F7FF'
          }}>
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}