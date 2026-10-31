export const instant = false;

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Cartprovider } from "./Context/cartContext";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOLE & CO.",
  description: "Everyday comfort. Timeless style.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Cartprovider>
          {children}
        </Cartprovider>

        <Footer />
      </body>
    </html>
  );
}