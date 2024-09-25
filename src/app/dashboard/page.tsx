import ButtonHome from "@/components/ButtonHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
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

export default function () {
  return (
    <>
      <header className="p-5 flex">
        <ButtonHome />
      </header>
      <main className="flex h-[400px] w-vw justify-center align-center items-center">
        <p>En desarrollo</p>
      </main>
    </>
  );
}
