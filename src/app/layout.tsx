import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Yusril Islam | Front-End Web Developer",
  description: "Portfolio of Muhammad Yusril Islam, a front-end web developer based in Malang, Indonesia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Script id="theme-initialization" strategy="beforeInteractive">
          {`try {
            if (localStorage.getItem("portfolio-theme") === "light") {
              document.documentElement.dataset.theme = "light";
            }
          } catch {}`}
        </Script>
      </body>
    </html>
  );
}
