'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Login with Google 2</h2>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        style={{ padding: 10, fontSize: 16 }}
      >
        Sign in with Google
      </button>
    </div>
  );
}