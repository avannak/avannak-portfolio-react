import "../styles/styles.scss"; // replace this with the path to your CSS file
import RootLayout from "../app/layout"; // replace with the correct path
import { AppProps } from "next/app";
import CursorCore from "react-animated-cursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
