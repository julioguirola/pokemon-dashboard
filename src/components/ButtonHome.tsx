"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function () {
  return (
    <>
      <Button asChild>
        <Link href={"/"}>Home</Link>
      </Button>
    </>
  );
}
