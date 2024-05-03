// import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "../styles/styles.scss";
import { Mochiy_Pop_One } from "next/font/google";

const googleFont = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Arthur's Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "../../public/favicon/customFav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Welcome to my portfolio!" />
        <link
          type="image/png"
          rel="icon"
          href="/favicon/customFav.png"
          sizes="any"
        />
      </head>
      <body>
        <div className={googleFont.className}>
          {/* <NavBar /> */}
          {/* <CustomCursor /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
