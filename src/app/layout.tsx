import type { Metadata } from "next";
import "./global.css";

/**
 * The metadata configuration for the application.
 * This object defines various metadata properties used for SEO and social sharing.
 */
export const metadata: Metadata = {
  title: "Home",
  description:
    "Dashboard to display image, name, type and attributes of each pokemon",
  openGraph: {
    title: "Pokemon Dashboard",
    description:
      "Dashboard to display image, name, type and attributes of each pokemon",
    images: [{ url: "/pikachu.png" }],
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html translate="no" className="notranslate" lang="en">
      <body className="dark:bg-stone-950 dark:text-white h-dvh">
        {children}
      </body>
    </html>
  );
}
