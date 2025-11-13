import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Nature - Launching Soon",
  description: "We're working hard to bring you something amazing. Stay tuned!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
