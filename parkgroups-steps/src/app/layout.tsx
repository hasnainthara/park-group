import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Park Groups - Building Businesses, Creating Impact",
  description:
    "Park Groups is a diversified holding company with strategic investments across multiple high-growth sectors in the UK.",
  keywords: "park groups, holding company, investment, business, UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
