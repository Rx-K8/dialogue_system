import type { Metadata } from "next";
import { IBM_Plex_Sans_JP } from "next/font/google";
import "./globals.css";

const IBMPlexSansJP = IBM_Plex_Sans_JP({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Ailis",
  description: "キャラクターとおしゃべりすることができます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={IBMPlexSansJP.className}>{children}</body>
    </html>
  );
}
