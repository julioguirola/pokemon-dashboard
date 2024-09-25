import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { signin } from "@/actions/auth";
import Link from "next/link";

export default function () {
  return (
    <div className="h-dvh flex justify-center items-center">
      <form action={signin} className="w-[300px] flex flex-col gap-5">
        <h1 className="text-2xl">Log In</h1>
        <label htmlFor="user">User</label>
        <Input
          type="text"
          required
          name="username"
          id="user"
          placeholder="Username"
        />
        <label htmlFor="pass">User</label>
        <Input
          type="password"
          required
          name="password"
          id="pass"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
        <Button asChild>
          <Link href={"/"}>Go Back</Link>
        </Button>
      </form>
    </div>
  );
}
