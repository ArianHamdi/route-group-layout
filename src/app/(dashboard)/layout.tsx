import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <h1>Dashboard layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
