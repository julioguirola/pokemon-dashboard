"use client";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { signin } from "@/actions/auth";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function () {
  const [state, formAction] = useFormState(signin, initialState);

  return (
    <div className="h-dvh flex justify-center items-center">
      <form action={formAction} className="w-[300px] flex flex-col gap-5">
        <h1 className="text-2xl">Log In</h1>
        <Input
          type="text"
          required
          name="username"
          id="user"
          placeholder="Username"
        />
        <Input
          type="password"
          required
          name="password"
          id="pass"
          placeholder="Password is 1234"
        />
        <p aria-live="polite" className="text-red-600">
          {state?.message}
        </p>
        <Button type="submit">Submit</Button>
        <Button asChild>
          <Link href={"/"}>Go Back</Link>
        </Button>
      </form>
    </div>
  );
}
