import LoginForm from "@/components/LoginForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Log In",
};
export default function () {
  return (
    <>
      <LoginForm />
    </>
  );
}
