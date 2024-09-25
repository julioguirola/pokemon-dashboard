import ButtonHome from "@/components/ButtonHome";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
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
