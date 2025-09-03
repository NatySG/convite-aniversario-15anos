import type { Metadata } from "next";
import { Playfair_Display, Geist, Didact_Gothic, Baskervville, Geist_Mono, Montserrat, Dancing_Script, Allura, Great_Vibes, Alex_Brush } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const cursiva = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursiva",
});

export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

export const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

export const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-didact-gothic",
});

export const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Sofia Esther 15 anos",
    template: "%s | Meu Site",
  },
  description: "Convite de 15 anos da Sofia Esther",
  openGraph: {
    title: "Sofia Esther 15 anos",
    description: "Você está convidado para a celebração!",
    url: "https://sofiaesther15anos.netlify.app",
    images: [
      {
        url: "https://sofiaesther15anos.netlify.app/opengraphy.png?v=3",
        width: 1200,
        height: 630,
        alt: "Convite Sofia Esther 15 anos",
      },
    ],
    type: "website",
  },
  
  icons: {
    icon: "/favicon.png",
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
