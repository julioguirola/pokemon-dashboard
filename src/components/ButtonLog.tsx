"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth";
import Link from "next/link";

export default function ({ caso }: { caso: "login" | "logout" }) {
  if (caso === "login") {
    return (
      <Button asChild>
        <Link href={"/login"}>Log In</Link>
      </Button>
    );
  } else {
    return <Button onClick={() => logout()}>Log Out</Button>;
  }
}
