"use client";
import { Button } from "@/components/ui/button";
import nav from "@/actions/nav";
import { logout } from "@/actions/auth";

export default function ({ caso }: { caso: "login" | "logout" }) {
  if (caso === "login") {
    return (
      <Button
        className="bg-blue-500 hover:bg-blue-600"
        onClick={() => nav("/login")}
      >
        Login
      </Button>
    );
  } else {
    return <Button onClick={() => logout()}>Log Out</Button>;
  }
}
