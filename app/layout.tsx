import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cool The World",
  description: "รวมลิงก์ YouTube, TikTok และ Facebook ของ Cool The World",
};

export const viewport: Viewport = {
  themeColor: "#2e3192",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
