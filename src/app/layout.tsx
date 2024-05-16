import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth from "@/src/components/auth/Auth"
import NavBar from "@/src/components/NavBar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar isSignedIn={false} />
        <Auth>
        {children}
        </Auth>
        </body>
    </html>
  );
}
