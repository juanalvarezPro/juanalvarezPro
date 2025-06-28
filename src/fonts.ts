import { Geist } from "next/font/google";
import localFont from "next/font/local";

// Google Font
export const geistSans = Geist({
  subsets: ["latin"],
});

// fuente personalizada
export const neueMachina = localFont({
  src: [
    {
      path: "../public/fonts/myFont.woff2", 
      weight: "400",
    },
  ],
  display: "swap",
});
