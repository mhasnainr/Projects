import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
// import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GIAIC: Assignment 2",
  description: "GIAIC task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-orange-500">
          <Navbar />
        </header>
        <main className="flex-1 container mx-auto text-center px-4 py-9">
          {children}
        </main>
        {/* <footer className="bg-orange-400">
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}
