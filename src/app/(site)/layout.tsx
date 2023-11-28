import "../../styles/global.scss";
import { inter, geistSans } from "@/app/ui/fonts";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";

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
