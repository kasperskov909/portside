import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import { signOut } from '@/auth';

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
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col  py-32 px-16 bg-white dark:bg-black sm:items-start gap-4">
        {children}
              </main>
    </div>
            <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="ps-btn">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </body>
    </html>
  );
}
