import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { GoToTop } from "@/components/go-to-top";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Tariq Yousafzai — Professor · Researcher · Entrepreneurship Educator",
    template: "%s — Muhammad Tariq Yousafzai",
  },
  description:
    "Associate Professor at the Centre for Management and Commerce and Director of the Quality Enhancement Cell, University of Swat. Research on entrepreneurship education, value creation, sustainability and the circular economy.",
  keywords: [
    "entrepreneurship education",
    "value creation",
    "sustainability",
    "circular economy",
    "University of Swat",
    "quality enhancement",
  ],
  authors: [{ name: "Muhammad Tariq Yousafzai" }],
  openGraph: {
    title: "Muhammad Tariq Yousafzai — Professor · Researcher · Entrepreneurship Educator",
    description:
      "Associate Professor at the Centre for Management and Commerce and Director of the Quality Enhancement Cell, University of Swat.",
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollToTop />
        <GoToTop />
      </body>
    </html>
  );
}
