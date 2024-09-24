"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/session";

export async function signin(formData: FormData) {
  const { username, password } = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (username === "user" && password === "1234") {
    await createSession(username);
    return redirect("/dashboard");
  }
}

export async function logout() {
  deleteSession();
  return redirect("/");
}
