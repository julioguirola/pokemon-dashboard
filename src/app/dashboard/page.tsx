import ButtonHome from "@/components/ButtonHome";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
};
export default function () {
  return (
    <>
      <ButtonHome />
    </>
  );
}
