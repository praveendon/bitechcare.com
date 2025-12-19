import React from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "918073664011";
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
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "50px",
        fontWeight: 600,
        textDecoration: "none",
        zIndex: 1000,
      }}
    >
      WhatsApp
    </a>
  );
}
