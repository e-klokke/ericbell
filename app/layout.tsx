import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Bell | Performance, Leadership & Technology",
  description:
    "Former professional athlete, development coach, and technology founder building elite performance systems for athletes, leaders, and organizations.",
  openGraph: {
    title: "Eric Bell | Performance, Leadership & Technology",
    description:
      "Building elite performance systems across sports, leadership, and technology.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
