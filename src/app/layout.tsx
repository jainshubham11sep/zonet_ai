import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Preloader from "@/components/shared/Preloader";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700", "900"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "ZonetTech | AI-Powered Development Agency",
  description: "We build websites, apps, and AI tools in 7–30 days using advanced AI workflows. Premium AI-first development company.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning className={inter.variable}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
