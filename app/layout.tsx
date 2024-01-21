import { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {
    title: "Katerina Ernst Filmmaker | Photographer",
    description: "Filmmaker | Photographer portfolio",
  },
};

import "../styles/globals.css";

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
