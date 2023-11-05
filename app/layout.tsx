import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyetmlix",
  description: "Streaming app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
