import type { Metadata } from "next";

import { ThemeClientProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Time tracking app for freelancers and small businesses | Time tracking app",
    template: "%s | Time tracking app",
  },
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
