export default function Dashboard() {
  return (
    <>
      <h1>لوحة التحكم</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {[
          ["عدد المنشورات", "128"],
          ["التفاعل", "8.6%"],
          ["المتابعون", "12,430"],
          ["أفضل وقت", "8:30 م"],
        ].map(([title, value]) => (
          <div
            key={title}
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3>{title}</h3>
            <h2 style={{ marginTop: 15 }}>{value}</h2>
          </div>
        ))}
      </div>
    </>
  );
}