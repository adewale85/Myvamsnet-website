import type { Metadata } from "next";
// 1. Import your specific fonts
import { Russo_One, Space_Grotesk } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 2. Configure Russo One (usually used for headings)
const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

// 3. Configure Space Grotesk (for body text)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "MyVamsnet | Empowering Innovation",
  description: "We deliver tech-enabled growth for individuals and businesses across Africa and beyond.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 4. Add both variables to the className
      className={`${russo.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-space">
       <section className='h-22 mb-22 fixed top-0 left-0 w-full z-50 '>
      <Navbar />
      </section>
        {children}
      <Footer/>
      </body>
    </html>
  );
}