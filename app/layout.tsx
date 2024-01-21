import { Antonio, Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const antonio = Antonio({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={antonio.className}>{children}</body>
    </html>
  );
}

import { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {
    title: "Filmmaker | Photographer",
    description: "You're gonna carry that weight",
    url: "https://KaterinaErnst.com",
    siteName: "Katerina Ernst",
    images: [
      {
        url: "https://www.katerinaernst.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katerina Ernst Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
