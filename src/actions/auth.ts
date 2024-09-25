"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/session";

export async function signin(prevState: any, formData: FormData) {
  const { username, password } = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (username === "user" && password === "1234") {
    await createSession(username);
    return redirect("/dashboard");
  } else {
    return {
      message: "Wrong credentials",
    };
  }
}

export async function logout() {
  deleteSession();
  return redirect("/");
}
