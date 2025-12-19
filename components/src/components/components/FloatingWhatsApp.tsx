import React from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "918073664011"; // India country code + number
  const message = encodeURIComponent(
    "Hi BiTech Care, I am interested in refurbished laptops."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#ffffff",
        padding: "14px 18px",
        borderRadius: "50px",
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      WhatsApp
    </a>
  );
}
