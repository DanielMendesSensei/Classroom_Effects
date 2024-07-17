import "./globals.css";

export const metadata = {
  title: "Classroom Effects",
  description: "Sistema de sonoplastia para aulas da PdA",
  fivicon: "/imgs/Logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href={metadata.fivicon} type="image/png" />
      </head>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </>
  );
}
