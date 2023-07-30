import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shop-layout">
      <h1>Shop layout</h1>
      {children}
    </div>
  );
}
