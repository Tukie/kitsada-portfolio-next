import type { Metadata } from "next";
import { Noto_Sans_Thai as NotoSansThai } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";

const notoSansThai = NotoSansThai({
  weight: ["400", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kitsada Butnam - Portfolio",
  description:
    "A dedicated Full-stack Developer passionate about building robust and user-friendly web applications. Proficient in both front-end and back-end technologies, I thrive on bringing ideas to life from concept to deployment.",
  icons: {
    icon: "favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${notoSansThai.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            <header>
              <NavBar />
            </header>
            <main>{children}</main>
            <Toaster position="top-center" richColors />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
