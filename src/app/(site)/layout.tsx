import "../../styles/global.scss";
import { inter, geistSans } from "@/app/ui/fonts";
import Header from "../ui/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
