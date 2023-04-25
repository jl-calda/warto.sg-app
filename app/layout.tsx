import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
import Modal from "./_components/modals/Modal";
import ClientOnly from "./_components/utils/ClientOnly";
import RegisterModal from "./_components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "./_components/utils/ToasterProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Warto - Room for Rent",
  description: "Post your room for rent or find a room to rent in SG",
};

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-stone-800`}>
        <ClientOnly>
          <Navbar />
          <RegisterModal />
          <ToasterProvider />
        </ClientOnly>
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
