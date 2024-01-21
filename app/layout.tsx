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
    title: "Katerina Ernst Filmmaker | Photographer portfolio",
    description: "You're gonna carry that weight",
  },
};
