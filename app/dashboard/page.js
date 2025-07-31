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
      <br />
      <button onClick={() => signOut()} style={{ marginTop: 20 }}>
        Logout
      </button>

      <pre
        style={{
          marginTop: 30,
          background: "#f5f5f5",
          padding: "20px",
          textAlign: "left",
          maxWidth: 600,
          margin: "30px auto",
          borderRadius: "8px",
        }}
      >
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );


}