'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      const sessionData = JSON.stringify(session);

      const callback = localStorage.getItem('callback');
      window.location.href = `${callback}/google_login_callback?session=${sessionData}`;
    }
  }, [status, session]);

  if (status === "loading") return <p>Loading...</p>;
  return <p>Redirecting...</p>;
}
