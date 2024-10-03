import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientInit from './ClientInit'; 
import ErrorSuppressor from './ErrorSuppressor';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Interfaz Generada por Vercel v0",
  description: "Implementación de una interfaz generada automáticamente para optimizar el flujo de trabajo y mejorar la escalabilidad mediante el uso de herramientas generativas y serverless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorSuppressor />
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
