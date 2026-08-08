import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://andizogaj.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Andi Zogaj — Front-End Web Developer",
    template: "%s | Andi Zogaj",
  },
  description:
    "Front-end web developer in Prishtina, Kosovo, building fast, modern websites and web applications. Founder of Obsidium Web Development.",
  keywords: [
    "Andi Zogaj",
    "front-end developer",
    "web developer Kosovo",
    "React developer",
    "Next.js developer",
    "Obsidium Web Development",
  ],
  authors: [{ name: "Andi Zogaj", url: "https://github.com/AndiZogaj22" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Andi Zogaj — Front-End Web Developer",
    description:
      "Front-end web developer in Prishtina, Kosovo, building fast, modern websites and web applications.",
    siteName: "Andi Zogaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andi Zogaj — Front-End Web Developer",
    description:
      "Front-end web developer in Prishtina, Kosovo, building fast, modern websites and web applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andi Zogaj",
  url: SITE_URL,
  jobTitle: "Front-End Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Obsidium Web Development",
    url: "https://www.obsidium-dev.com/",
  },
  sameAs: [
    "https://github.com/AndiZogaj22/",
    "https://www.linkedin.com/in/andi-zogaj-20a8a2242/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
