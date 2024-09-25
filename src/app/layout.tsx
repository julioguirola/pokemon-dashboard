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
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f97316" />
        <meta property="og:title" content="Pokemon Dashboard" />
        <meta
          property="og:description"
          content="Dashboard to display image, name, type and attributes of each pokemon"
        />
        <meta property="og:image" content="/pikachu.png" />
      </head>
      <body className="dark:bg-stone-950 dark:text-white h-dvh">
        {children}
      </body>
    </html>
  );
}
