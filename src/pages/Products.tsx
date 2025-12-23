const products = [
  {
    name: "Dell Latitude 7490",
    spec: "i5 8th Gen · 16GB · 512GB · 14”",
    price: "₹24,500+",
  },
  {
    name: "Lenovo ThinkPad L480",
    spec: "i5 8th Gen · 16GB · 512GB · 14”",
    price: "₹24,500+",
  },
  {
    name: "MacBook Pro A2251",
    spec: "i7 10th Gen · 32GB · 512GB · 13”",
    price: "₹36,500+",
  },
];

export default function Products() {
  return (
    <>
      <h2>Refurbished Laptops</h2>
      <p>Prices visible · Bulk available · 6 months warranty</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginTop: 24,
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h3>{p.name}</h3>
            <p>{p.spec}</p>
            <strong>{p.price}</strong>

            <a
              href="https://wa.me/918073664011"
              target="_blank"
              style={{
                display: "block",
                marginTop: 12,
                background: "#2563eb",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
                borderRadius: 6,
              }}
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
