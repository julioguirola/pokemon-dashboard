"use server";

import { SignJWT, jwtVerify } from "jose";
import { type JWTPayload } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

/**
 * Encrypts a JWT payload using HS256 algorithm.
 * @param payload - The payload to be encrypted.
 * @returns A Promise that resolves to the encrypted JWT string.
 */
export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

/**
 * Decrypts a JWT session token and returns the payload.
 * @param session - The JWT session token to decrypt. Defaults to an empty string if not provided.
 * @returns A Promise that resolves to the decrypted payload, or undefined if decryption fails.
 */
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

/**
 * Creates a session for the specified user ID.
 * This function encrypts the user ID and expiration time into a JWT,
 * sets it as an HTTP-only cookie named "session", and configures
 * various security options for the cookie.
 *
 * @param userId - The ID of the user for whom the session is being created.
 * @returns A Promise that resolves when the session has been created and the cookie has been set.
 */
export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Checks if the user is authenticated by verifying the session cookie.
 * @returns A Promise that resolves to a boolean indicating whether the user is authenticated.
 */
export async function isAuthenticated() {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  return session ? true : false;
}

/**
 * Deletes the session by removing the "session" cookie.
 * This effectively logs out the user by destroying their session data.
 * @returns A Promise that resolves when the session cookie has been deleted.
 */
export async function deleteSession() {
  cookies().delete("session");
}
