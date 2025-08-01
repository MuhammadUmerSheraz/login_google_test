'use client';

import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  useEffect(() => {
    signIn("google", { callbackUrl: "/dashboard" });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <p>Redirecting to Google login...</p>
    </div>
  );
}
