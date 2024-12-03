import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import QueryProvider from "./_hooks/QueryProvider";

export const metadata: Metadata = {
  title: "IGS Test Project",
  description: "Designed and Created By Heedrhiss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body
        className={`grid grid-rows-[auto_1fr] min-h-screen text-stone-800 bg-slate-200 overflow-x-hidden`}
      >
        <QueryProvider>
        <Navbar/>
        {children}
        <Footer/>
        </QueryProvider>
      </body>
    </html>
  );
}
