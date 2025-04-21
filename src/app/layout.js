import { Manrope, Oooh_Baby, Old_Standard_TT } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const shadows = Oooh_Baby({
  variable: "--font-shadows",
  subsets: ["latin"],
  weight: ["400"],
});

const old_standard = Old_Standard_TT({
  variable: "--font-standard",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${manrope.variable} ${shadows.variable} ${old_standard.variable} font-sans antialiased selection:bg-[#ffdf48] selection:text-[#945b41]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
