import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMKS Muara Indonesia Jakarta",
  description: "SMK Swasta Unggulan di Jakarta Timur",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={font.className}>{children}</body>
    </html>
  );
}
