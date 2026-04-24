import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURUM — Fine Dining Excellence",
  description:
    "AURUM — Where culinary artistry meets timeless elegance. Experience the finest in contemporary fine dining with Michelin-starred cuisine in an intimate, luxurious setting in Jakarta.",
  keywords: "fine dining, restaurant, Jakarta, Michelin star, luxury dining, AURUM",
  openGraph: {
    title: "AURUM — Fine Dining Excellence",
    description: "Where culinary artistry meets timeless elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
