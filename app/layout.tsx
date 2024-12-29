import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/public/scss/styles.scss"
import ColorSwitcher from "@/components/ColorSwitcher"
import Bootstrap from "@/components/Bootstrap"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TawkTo from "@/components/scripts/TawkTo"
import React from "react";
import { seo } from "@/config/profile.config";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  icons: '/favicon.ico'
}
type LayoutType = {
  children: React.ReactNode
}
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] })
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
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
  )
}
