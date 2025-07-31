'use client';
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>Welcome, {session.user.name}</h2>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} alt="profile" width={100} height={100} />
      <br />
      <button onClick={() => signOut()} style={{ marginTop: 20 }}>
        Logout
      </button>
    </div>
  );

}