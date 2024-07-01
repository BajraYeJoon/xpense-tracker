import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { TReactQuery } from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpense",
  description: "A simple expense tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={jost.className}>
          <Toaster richColors position="top-right" />
          <TReactQuery>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="container mx-auto w-full max-w-screen-2xl px-2.5 md:px-20">
                {children}
              </main>
            </ThemeProvider>
          </TReactQuery>
        </body>
      </html>
    </ClerkProvider>
  );
}
