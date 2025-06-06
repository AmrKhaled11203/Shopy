import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Providers } from "@/lib/providersss";
import { Toaster } from "sonner";

// Import the Quicksand font
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shopy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Toaster position="top-center" />
          <Contact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
