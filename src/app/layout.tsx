import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Faiza Zafar — React Native Developer",
  description:
    "Mobile products, engineered with intent. 4.5+ years shipping cross-platform React Native apps for healthcare, fitness, tourism and government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ cursor: "default" }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
