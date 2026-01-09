import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "700", "900"]
});

export const metadata: Metadata = {
  title: "Portside",
  description: "Marina management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
