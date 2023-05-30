import CustomCursor from "@/components/CustomCursor/CustomCursor";
import NavBar from "@/components/NavBar/NavBar";
import "../styles/styles.scss";

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
        {children}
      </body>
    </html>
  );
}
