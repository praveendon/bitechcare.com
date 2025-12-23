export default function Contact() {
  return (
    <>
      <h2>Contact BiTech Care</h2>
      <p>Bangalore · Online only</p>

      <div style={{ marginTop: 20 }}>
        <a
          href="tel:+918073664011"
          style={{
            display: "inline-block",
            marginRight: 12,
            padding: "12px 20px",
            border: "1px solid #2563eb",
            borderRadius: 6,
          }}
        >
          Call Now
        </a>

        <a
          href="https://wa.me/918073664011"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#25D366",
            color: "#fff",
            borderRadius: 6,
          }}
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
