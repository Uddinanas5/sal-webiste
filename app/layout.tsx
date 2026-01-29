import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAL - Your AI Operations Partner",
  description: "Run your entire business through one WhatsApp chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-cream text-gray-900">
        {children}
      </body>
    </html>
  );
}
