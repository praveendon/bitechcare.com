import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "16px",
        textAlign: "center",
        fontSize: "14px",
        color: "#6b7280",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      © {new Date().getFullYear()} BiTech Care · Technology with Care
    </footer>
  );
}
