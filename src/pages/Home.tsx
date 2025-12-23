export default function Home() {
  return (
    <>
      <section
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "64px 24px",
          borderRadius: 16,
        }}
      >
        <h1 style={{ fontSize: 36 }}>BiTech Care</h1>
        <p style={{ fontSize: 18 }}>Technology with Care</p>
        <p>
          Online refurbished laptop sales & IT services in Bangalore.
          Trusted devices. Transparent pricing. Reliable support.
        </p>

        <a
          href="https://wa.me/918073664011"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          Chat on WhatsApp
        </a>
      </section>

      <section style={{ marginTop: 48 }}>
        <h2>Why BiTech Care?</h2>
        <ul>
          <li>✔ Refurbished laptops with 6 months warranty</li>
          <li>✔ Bulk & corporate supply</li>
          <li>✔ Data recovery & OS installation</li>
          <li>✔ Honest pricing & support</li>
        </ul>
      </section>
    </>
  );
}
