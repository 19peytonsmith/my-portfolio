// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Manrope, Fira_Code } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "Peyton Jeffrey Smith Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${firaCode.variable}`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center max-w-5xl w-full mx-auto px-6 sm:px-8 md:py-0 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
