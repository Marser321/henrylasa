import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henry | Luxury Kitchens & Closets",
  description:
    "Bespoke millwork for elevated spaces. Premium kitchens and closets with signature Liquid Glass finish. Custom carpentry in Miami.",
  keywords: [
    "luxury kitchens",
    "custom closets",
    "millwork",
    "bespoke carpentry",
    "liquid glass",
    "Miami",
    "Henry Kitchen",
  ],
  openGraph: {
    title: "Henry | Luxury Kitchens & Closets",
    description:
      "Bespoke millwork for elevated spaces. Premium kitchens and closets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} antialiased`}>
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
