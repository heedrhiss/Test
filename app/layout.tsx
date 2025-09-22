import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import QueryProvider from "./_hooks/QueryProvider";
import { DarkModeProvider } from "./_hooks/DarkModeContext";

export const metadata: Metadata = {
  title: "Cartolinks Test Project",
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
        className={`grid grid-rows-[auto_1fr] min-h-screen  overflow-x-hidden`}
      >
        <DarkModeProvider>
        <QueryProvider>
        <Navbar/>
        {children}
        <Footer/>
        </QueryProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
