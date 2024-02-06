import type { Metadata } from "next";
import ThemeClientProvider from "@/components/ThemeClientProvider";

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
          <header>Header</header>
          <main>{children}</main>
          <footer>Footer</footer>
        </ThemeClientProvider>
      </body>
    </html>
  );
}
