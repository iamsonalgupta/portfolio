import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/scss/styles.scss";
import "@/public/scss/custom.scss";
import ColorSwitcher from "@/components/ColorSwitcher";
import Bootstrap from "@/components/Bootstrap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TawkTo from "@/components/scripts/TawkTo";
import React from "react";
import { seo } from "@/config/profile.config";
import { ToastContainer } from "react-toastify";

// export const metadata: Metadata = {
//   title: seo.title,
//   description: seo.description,
//   keywords: seo.keywords,
//   icons: "/favicon.ico",
//   openGraph: {
//     title: seo.title,
//     description: seo.description,
//     images: "https://iamsonalgupta.com/images/profile-pic.png",
//     url: seo.url
//   },
//   twitter: {
//     title: seo.title,
//     description: seo.description,
//     images: "https://iamsonalgupta.com/images/profile-pic.png",
//     site: seo.url
//   }
// };

type LayoutType = {
  children: React.ReactNode
}

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      <meta property="og:url" content="https://iamsonalgupta.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="https://iamsonalgupta.com/images/profile-pic.png" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="iamsonalgupta.com" />
      <meta property="twitter:url" content="https://iamsonalgupta.com/" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://iamsonalgupta.com/images/profile-pic.png" />
    </head>
    <body className={poppins.className}>
    <Bootstrap>
      {/*<ColorSwitcher />*/}
      {/*<Demos />*/}
      {children}
      <TawkTo />
      <ToastContainer />
    </Bootstrap>
    </body>
    </html>
  );
}
