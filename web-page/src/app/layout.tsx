"use client";
import ChatNavBar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { IBM_Plex_Sans_Thai } from "next/font/google";

import "./globals.css";

const IBMplexSans = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-landing bg-fixed bg-cover relative ">
      <body className={IBMplexSans.className}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <div className="h-screen max-h-screen w-screen flex flex-col relative">
              <ChatNavBar />
              <div className="h-full">{children}</div>
            </div>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
