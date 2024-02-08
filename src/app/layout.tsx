import type { Metadata } from "next";

import ThemeClientProvider from "@/components/layout/ThemeClientProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body>
        {/* theme provider */}
        <ThemeClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  );
}
