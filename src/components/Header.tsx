export default function Header() {
  return (
    <header
      style={{
        height: "75px",
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#f8fafc",
            fontSize: "24px",
          }}
        >
          لوحة التحكم
        </h2>

        <span
          style={{
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          أهلاً بك في منصة نبض المحتوى 🚀
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <input
          type="text"
          placeholder="ابحث..."
          style={{
            width: "260px",
            padding: "10px 15px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#1e293b",
            color: "#fff",
            outline: "none",
          }}
        />

        <button
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: "none",
            background: "#1e293b",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          🔔
        </button>

        <button
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: "none",
            background: "#1e293b",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          🌙
        </button>

        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          خ
        </div>
      </div>
    </header>
  );
}