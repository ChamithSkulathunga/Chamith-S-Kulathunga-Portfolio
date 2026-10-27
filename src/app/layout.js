import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
   subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Chamith Sadeepa Kulathunga | BICT (Hons) Graduate & Digital Designer",
description: "Explore Chamith Sadeepa Kulathunga's portfolio showcasing expertise in web development, UI/UX design, and graphic design, creating innovative and user-focused digital experiences.",
  icon: "/codesoft.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
     
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
