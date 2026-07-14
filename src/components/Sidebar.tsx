export default function Sidebar() {
  return (
    <aside
      style={{
        width: "270px",
        background: "#020617",
        borderLeft: "1px solid #1e293b",
        display: "flex",
        flexDirection: "column",
        padding: "28px",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "40px",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        🚀 نبض المحتوى
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <a href="#" style={linkStyle}>🏠 لوحة التحكم</a>
        <a href="#" style={linkStyle}>✍️ الكاتب الذكي</a>
        <a href="#" style={linkStyle}>📅 الجدولة</a>
        <a href="#" style={linkStyle}>📊 التحليلات</a>
        <a href="#" style={linkStyle}>💡 بنك الأفكار</a>
        <a href="#" style={linkStyle}>⚙️ الإعدادات</a>
      </nav>

      <div
        style={{
          marginTop: "auto",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        الإصدار 0.1
      </div>
    </aside>
  );
}

const linkStyle = {
  display: "block",
  padding: "14px 18px",
  borderRadius: "12px",
  background: "#111827",
  color: "#f8fafc",
  textDecoration: "none",
};