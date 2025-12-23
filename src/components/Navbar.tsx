import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <strong style={{ fontSize: 18, color: "#2563eb" }}>
          BiTech Care
        </strong>

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
