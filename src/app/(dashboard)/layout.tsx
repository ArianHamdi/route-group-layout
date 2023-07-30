import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <h1>Dashboard layout</h1>
      {children}
    </div>
  );
}
