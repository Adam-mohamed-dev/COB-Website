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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${plusJakartaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
