import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
   subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Chamith S Kulathunga",
  description: "Explore the portfolio of S.K. Chamith Sadeepa Kulathunga, an ICT undergraduate skilled in UI/UX design and front-end development. With hands-on experience at Creative-2 Pvt Ltd, CodSoft, and various web projects using React, Figma, WordPress, and more, Chamith showcases a passion for technology, creativity, and self-learning."
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
