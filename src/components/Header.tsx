export default function Header() {
  return (
    <header
      style={{
        height: "70px",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        background: "#111827",
      }}
    >
      <h2>لوحة التحكم</h2>

      <div>👋 أهلاً بك</div>
    </header>
  );
}