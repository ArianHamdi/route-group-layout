import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shop-layout">
          <h1>Product layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
