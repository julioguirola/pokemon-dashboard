import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Dashboard to display image, name, type and attributes of each pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-950 dark:text-white h-dvh">
        {children}
      </body>
    </html>
  );
}
