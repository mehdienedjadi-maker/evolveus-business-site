import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolve’Us Business",
  description: "Suite logicielle & lifestyle pour le bien-être en entreprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="text-deep antialiased">{children}</body>
    </html>
  );
}
