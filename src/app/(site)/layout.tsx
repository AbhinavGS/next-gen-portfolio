import "../../styles/global.scss";
import { inter, geistSans } from "@/app/ui/fonts";
import Navbar from "../ui/navbar";

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
      </body>
    </html>
  );
}
