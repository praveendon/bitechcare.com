import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>Welcome to BiTech Care</h1>
        <p>
          Online-only refurbished laptop sales and services.  
          Reliable devices. Trusted service.
        </p>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
