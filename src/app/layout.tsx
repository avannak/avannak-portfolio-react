import "./styles.scss";
import "fontsource-roboto-slab";
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
      <body>{children}</body>
    </html>
  );
}
