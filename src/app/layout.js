import { Outfit, Oooh_Baby } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const shadows = Oooh_Baby({
  variable: "--font-shadows",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Andrew Monthero | Digital Product Designer",
  description:
    "Discover Andrew Monthero's portfolio of UX/UI design, digital product creation, and user-centered solutions — crafted to solve real-world problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${shadows.variable} font-sans antialiased selection:bg-[#ffdf48] selection:text-[#945b41]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
