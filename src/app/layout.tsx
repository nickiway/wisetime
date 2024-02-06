import type { Metadata } from "next";

import ThemeClientProvider from "@/components/ThemeClientProvider";
import Header from "@/components/Header";

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
      <body>
        {/* theme provider */}
        <ThemeClientProvider>
          <Header />
          <main>{children}</main>
          <footer>Footer</footer>
        </ThemeClientProvider>
      </body>
    </html>
  );
}
