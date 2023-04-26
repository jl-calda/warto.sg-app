import "./globals.css";
import { Roboto } from "next/font/google";

import getCurrentUser from "./_actions/getCurrentUser";

import Navbar from "./_components/navbar/Navbar";
import ClientOnly from "./_components/utils/ClientOnly";
import RegisterModal from "./_components/modals/RegisterModal";
import ToasterProvider from "./_components/utils/ToasterProvider";
import LoginModal from "./_components/modals/LoginModal";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${roboto.className} text-stone-800`}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <LoginModal />
          <RegisterModal />
          <ToasterProvider />
        </ClientOnly>
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
