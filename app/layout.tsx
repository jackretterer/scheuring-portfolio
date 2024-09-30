import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const meta = {
  title: 'An Old World Killer is Back.',
  description: 'Author of The DRYP Trilogy',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  image: '/og-image.png',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Rachel Scheuring', 'DRYP', 'Health', 'Pandemic', 'Novel'],
    authors: [{ name: 'RA Scheuring', url: 'https://rascheuring.com/' }],
    creator: 'RA Scheuring',
    publisher: 'RA Scheuring',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: 'RA Scheuring',
        },
      ],
      siteName: 'RA Scheuring',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rascheuring',
      creator: '@rascheuring',
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
