import { Inter, Roboto } from "next/font/google";

// Configure Inter font with all weights
export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Roboto font with all weights
export const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});
