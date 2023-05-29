import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "../styles/styles.scss";
import NavBar from "@/components/NavBar/NavBar";
import { UserContext } from "../context/user/UserContext";

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
        <CustomCursor />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
