import CustomCursor from "@/components/CustomCursor/CustomCursor";
import NavBar from "@/components/NavBar/NavBar";
import "../styles/styles.scss";
import localFont from "next/font/local";
import { Providers } from "./GlobalRedux/provider";

const myFont = localFont({
  src: "../../public/fonts/FSEX300.ttf",
});

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
        <Providers>
          <div className={myFont.className}>
            <NavBar />
            <CustomCursor />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
