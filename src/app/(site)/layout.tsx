import "../../styles/global.scss";
import { geistSans } from "@/app/ui/fonts";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhinav Sorate",
  description: "The official portfolio site of Abhinav Sorate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
