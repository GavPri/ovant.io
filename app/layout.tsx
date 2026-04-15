import type { Metadata } from "next";
import { Antonio, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ovant.io"),
  title: "Ovant.io — Fast, Beautiful Websites for Local Businesses",
  description:
    "Ovant.io builds fast, beautiful websites for local businesses — with Google Analytics, dark mode, contact forms, and a 95+ PageSpeed score, all included as standard.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ovant.io — Fast, Beautiful Websites for Local Businesses",
    description:
      "Ovant.io builds fast, beautiful websites for local businesses — with Google Analytics, dark mode, contact forms, and a 95+ PageSpeed score, all included as standard.",
    url: "https://ovant.io",
    siteName: "Ovant.io",
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${jetbrainsMono.variable} ${antonio.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-center overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
