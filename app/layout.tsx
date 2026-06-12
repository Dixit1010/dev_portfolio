import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dixit Kumar — Software Engineer",
  description: "Software Engineer specializing in full-stack web development and embedded systems. Building reliable products at scale.",
  openGraph: {
    title: "Dixit Kumar — Software Engineer",
    description: "Software Engineer specializing in full-stack web development and embedded systems. Building reliable products at scale.",
    url: "https://portfoliodixitt.netlify.app",
    siteName: "Dixit Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
