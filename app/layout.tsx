import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/scss/styles.scss";
import ColorSwitcher from "@/components/ColorSwitcher";
import Bootstrap from "@/components/Bootstrap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Demos from "@/components/Demos";
import TawkTo from "@/components/scripts/TawkTo";

export const metadata: Metadata = {
  title: "Sonal Gupta - Personal Portfolio Template",
  description: "Backend developer specializing in creating scalable, secure, and high-performance server-side applications with a passion for APIs and database design",
};
type LayoutType = {
  children: React.ReactNode;
};
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] });
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <style>

      </style>
        <Bootstrap>
          <ColorSwitcher />
          {/*<Demos />*/}
          {children}
          <TawkTo />
        </Bootstrap>
      </body>
    </html>
  );
}
