import { Rubik } from "next/font/google";
import Navber from "@/components/Navber";
import "./globals.css";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Tasty Wave",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
