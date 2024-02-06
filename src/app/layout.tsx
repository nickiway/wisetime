import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WiseTime App",
  description: "Time tracking app for freelancers and small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
