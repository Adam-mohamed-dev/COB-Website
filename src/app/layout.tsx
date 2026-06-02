import type { Metadata } from 'next';
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "COB Healthcare Solutions",
  description: "Revenue cycle management, medical billing, and practice growth solutions.",
  icons: {
    icon: '/logos/Logo.png',
    shortcut: '/logos/Logo.png',
    apple: '/logos/Logo.png',
  },
  openGraph: {
    title: 'COB Healthcare Solutions',
    description: 'Revenue cycle management, medical billing, and practice growth solutions.',
    url: 'https://cob.health',
    siteName: 'COB Healthcare Solutions',
    images: [{ url: '/logos/Logo.png', width: 256, height: 256 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COB Healthcare Solutions',
    description: 'Revenue cycle management, medical billing, and practice growth solutions.',
    images: ['/logos/Logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
