import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <title>Arthur's Portfolio</title>
      <h1>Welcome to my portfolio!</h1>
    </div>
  );
}
