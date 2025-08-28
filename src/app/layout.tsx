import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eguchi Takahiro - Portfolio",
  description: "React + TypeScript フロントエンド開発者のポートフォリオサイト",
  icons: {
    icon: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/favicon.svg`,
    shortcut: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/favicon.svg`,
    apple: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
