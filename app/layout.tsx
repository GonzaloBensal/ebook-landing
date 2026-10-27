/* En este archivo se configura el layout principal de la aplicación, por ejemplo si quiero cambiar el titulo de la pestaña lo hago desde acá */
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebook Premium",
  description: "Landing moderna para vender ebooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
