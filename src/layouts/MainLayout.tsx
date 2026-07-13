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
        background: "#0f172a",
        color: "white",
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
            padding: "30px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}