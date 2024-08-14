import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import Nav from '@/app/ui/nav-bar'
import clsx from 'clsx';
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "uni-opensource",
  description: "mvp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(poppins.className, 'bg-black text-white')}>
        <Providers>
          <Nav />
          <main className=" w-full min-h-screen max-w-7xl m-auto">
            {children}
          </main>
          <footer className="h-48 w-full bg-lightblack" />
        </Providers>
      </body>
    </html>
  );
}
