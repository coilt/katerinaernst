// fonts.js
import { Exo_2, Noto_Sans } from "next/font/google";

export const titleFont = Exo_2({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const paragraphFont = Noto_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
