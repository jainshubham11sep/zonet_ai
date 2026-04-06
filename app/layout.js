import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata = {
  title: "ZonetTech | AI-Powered Development Agency",
  description: "We build websites, apps, and AI tools in 7–30 days using advanced AI workflows. Premium AI-first development company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <AIChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
