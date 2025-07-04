import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TRUalert: – Real-Time Security for Your Campus",
  description: "Experience peace of mind knowing that help is just a tap away. TruAlert connects you with security professionals for prompt assistance in any emergency situation.",
  icons: {
    icon: '/LogoMark-Dark-Mode.svg',
    apple: '/LogoMark-Dark-Mode.svg',
    other: [
      {
        rel: "icon",
        url: "/LogoMark-Dark-Mode.svg",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/LogoMark-Dark-Mode.svg",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}