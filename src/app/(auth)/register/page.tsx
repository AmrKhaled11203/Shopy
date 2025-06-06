"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {};

  return (
    <div className="flex justify-center">
      <div className="w-200 my-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold m-4">Sign Up</h2>
        <div className="flex gap-8 w-full ">
          <input
            className="border-2 p-2 my-2 w-full"
            placeholder="First Name"
          />
          <input className="border-2 p-2 my-2 w-full" placeholder="Last Name" />
        </div>
        <input
          className="border p-2 my-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 my-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleSignUp}
          className="bg-black text-white  px-4 py-2 rounded-full w-full"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
