import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anchor Global - International Maritime Logistics",
  description: "Leading maritime logistics company providing ocean freight, air freight, customs clearance, warehousing, and project cargo services across the Americas and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
