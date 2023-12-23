import "../../styles/global.scss";
import { geistSans } from "@/app/ui/fonts";
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
