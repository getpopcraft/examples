"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div style={{ maxWidth: 560, margin: "64px auto", padding: 32, fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ margin: 0 }}>Something went wrong</h2>
      <p>There was an issue with the store. Please try again.</p>
      <button onClick={() => reset()} style={{ padding: "12px 20px", borderRadius: 8, border: 0, background: "#2B3A55", color: "#fff", cursor: "pointer" }}>
        Try again
      </button>
    </div>
  );
}
