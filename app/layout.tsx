import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <title>J2Live</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
