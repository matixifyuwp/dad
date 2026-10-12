import type { Metadata } from "next";
import { Bungee, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-x",
});

export const metadata: Metadata = {
  title: "Melt SMP — Java + Bedrock survival",
  description:
    "A small survival server with big plans. Java + Bedrock crossplay, a hand-built spawn, seasonal events and zero pay-to-win nonsense. Come melt with us.",
  keywords: [
    "Melt SMP",
    "minecraft server",
    "survival",
    "java",
    "bedrock",
    "crossplay",
    "smp",
  ],
  openGraph: {
    title: "Melt SMP",
    description:
      "Java + Bedrock survival with a hand-built spawn, seasonal events and zero pay-to-win. Come melt with us.",
    siteName: "Melt SMP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bungee.variable} ${grotesk.variable} ${jetMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
