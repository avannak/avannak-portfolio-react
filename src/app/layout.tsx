import CustomCursor from "@/components/CustomCursor/CustomCursor";
import NavBar from "@/components/NavBar/NavBar";
import "../styles/styles.scss";
import { GlobalContextProvider } from "@/context/global/GlobalContext";

export const metadata = {
  title: "Arthur's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <CustomCursor />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
