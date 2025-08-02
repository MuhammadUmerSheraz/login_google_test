'use client';

import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams(); // ✅ Move hook to top-level
  const callback = searchParams.get('callback');

  useEffect(() => {
    if (callback) {
      localStorage.setItem('callback', callback);
    }
    signIn("google", { callbackUrl: "/dashboard" });
  }, [callback]);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <p>Redirecting to Google login...</p>
    </div>
  );
}
