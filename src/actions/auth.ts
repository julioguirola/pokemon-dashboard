"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/session";

/**
 * Authenticates a user based on provided credentials.
 * @param prevState - The previous state of the form (unused in this function).
 * @param formData - The form data containing the username and password.
 * @returns A redirect to the dashboard if authentication is successful, or an error message if it fails.
 */
export async function signin(prevState: any, formData: FormData) {
  const { username, password } = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (username === "user" && password === "1234") {
    await createSession(username);
    return redirect("/dashboard?page=1");
  } else {
    return {
      message: "Wrong credentials",
    };
  }
}

/**
 * Logs out the current user.
 * This function deletes the user's session and redirects to the home page.
 * @returns A redirect to the home page after logging out.
 */

export async function logout() {
  deleteSession();
  return redirect("/");
}
