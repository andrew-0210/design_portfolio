import { Archivo, Manrope } from "next/font/google";

export const archivo = Archivo({ subsets: ["latin"], weight: ["900"], variable:'--archivo-font' });
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
  variable: "--manrope-font",
});
