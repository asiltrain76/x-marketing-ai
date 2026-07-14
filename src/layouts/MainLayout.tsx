import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div
      dir="rtl"
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <main
          style={{
            flex: 1,
            padding: "35px",
            background:
              "linear-gradient(180deg,#0f172a 0%, #111827 100%)",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "auto",
            }}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}