import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Yusril Islam | Front-End Web Developer",
  description: "Portfolio of Muhammad Yusril Islam, a front-end web developer based in Malang, Indonesia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
