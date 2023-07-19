import Header from "@/components/header/Header";
import "./globals.css";
import { Inter, Lato, Montserrat } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ['100', '300', '400', '700', '900']
});


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
  display: "swap",
});

export const metadata = {
  title: "marvin berrio home",
  description: "Welcome to my personal website",
};

export default function RootLayout(props) {
  console.log(props)
  return (
    <html
      lang="en"
      className={`${inter.className} ${lato.className} ${montserrat.className} 
      `}
    >
      <body>
        {props.modal}
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
