import localFont from "next/font/local";
import "@/styles/style.scss";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "InfinityLoop | Digital Transformation & Enterprise Solutions",
  description: "Leading provider of enterprise software products and professional services. Transform your business with our world-class solutions across 11 service lines and 9 product ventures.",
  keywords: "digital transformation, enterprise solutions, cloud services, AI, consulting, software products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
