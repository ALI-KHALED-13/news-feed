import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Today's news feed",
  description: "Hope you find Today's Browesing informative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="p-3">
        <h1>
          <Link
            href="/"
            className="uppercase text-[24px]"
          >
            news Feed
          </Link>
        </h1>
      </header>
        {children}
      </body>
    </html>
  );
}
