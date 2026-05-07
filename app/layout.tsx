import type { Metadata } from "next";
import { Fira_Mono, Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://garutyunov.com";
const TITLE = "German Arutyunov — Principal Engineer";
const DESCRIPTION =
  "Principal engineer with 7+ years in fintech and SaaS. AI-native product delivery, distributed systems, micro frontends, cloud infrastructure, and engineering leadership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — German Arutyunov",
  },
  description: DESCRIPTION,
  applicationName: "German Arutyunov",
  authors: [{ name: "German Arutyunov", url: SITE_URL }],
  creator: "German Arutyunov",
  publisher: "German Arutyunov",
  keywords: [
    "German Arutyunov",
    "Principal Engineer",
    "AI engineer",
    "LLM integration",
    "distributed systems",
    "Go",
    "Python",
    "Kubernetes",
    "micro frontends",
    "fintech",
    "TradingView",
    "engineering leadership",
    "Malaga",
    "Spain",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "German Arutyunov",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "German Arutyunov",
  url: SITE_URL,
  jobTitle: "Principal Engineer",
  email: "mailto:germanarutyunov@gmail.com",
  worksFor: { "@type": "Organization", name: "TradingView" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malaga",
    addressCountry: "ES",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Higher School of Economics",
  },
  knowsAbout: [
    "AI-native development",
    "LLM integration",
    "Distributed Systems",
    "Go",
    "Python",
    "Kubernetes",
    "Micro Frontends",
    "Fintech",
    "Engineering Leadership",
  ],
  sameAs: [
    "https://github.com/gaarutyunov",
    "https://linkedin.com/in/german-arutyunov/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${firaMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-background flex h-14 items-center justify-between px-4 gap-3 sm:gap-6">
          <div className="flex items-center min-w-0">
            <Link href="/" className="text-sm sm:text-base text-foreground hover:text-muted transition-colors truncate">
              German Arutyunov
            </Link>
          </div>
          <nav className="flex items-center gap-4 sm:gap-5 shrink-0">
            <Link href="/cv" className="text-sm text-muted hover:text-foreground transition-colors">
              CV
            </Link>
            <a href="/llms.txt" className="hidden sm:inline text-sm text-muted hover:text-foreground transition-colors">
              /llms.txt
            </a>
            <a
              href="mailto:germanarutyunov@gmail.com"
              aria-label="Email"
              title="Email"
              className="text-muted hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/gaarutyunov"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              title="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/german-arutyunov/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
              </svg>
            </a>
          </nav>
        </header>
        <main className="flex-1 py-6 sm:py-8 lg:py-8">{children}</main>
      </body>
    </html>
  );
}
