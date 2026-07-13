export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "#111827",
        borderLeft: "1px solid #1e293b",
        padding: "25px",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          color: "#38bdf8",
        }}
      >
        صانع المحتوى الذكي
      </h1>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <a href="#">🏠 لوحة التحكم</a>
        <a href="#">✍️ الكاتب الذكي</a>
        <a href="#">📅 الجدولة</a>
        <a href="#">📊 التحليلات</a>
        <a href="#">💡 بنك الأفكار</a>
        <a href="#">⚙️ الإعدادات</a>
      </nav>
    </aside>
  );
}