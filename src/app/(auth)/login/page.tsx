"use client";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/lib/auth";

export default function SignInPage() {
  const [email, setEmail] = useState("amr@example.com");
  const [password, setPassword] = useState("123456");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);

    try {
      await login({ email, password });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-200 my-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold m-4">Sign In</h2>
        <input
          className="border-2 p-2 my-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 p-2 my-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          disabled={loading}
          onClick={handleSignIn}
          className="bg-black text-white px-4 py-2 rounded-full w-full"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
        <div className="pt-4 flex gap-12">
          <p className="text-xl"> Don&apos;t Have An Account ?</p>
          <Link href="/register">
            <Button className="bg-transparent text-black text-xl pt-0 flex items-center justify-center hover:bg-black hover:text-white ">
              Create Acoount
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
