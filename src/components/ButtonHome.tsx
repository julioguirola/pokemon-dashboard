"use client";

import { Button } from "@/components/ui/button";
import nav from "@/actions/nav";

export default function () {
  return (
    <>
      <Button onClick={() => nav("/")}>Home</Button>
    </>
  );
}
