import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Care",
  description: "Premium car care services in Colombo, Sri Lanka. Professional auto detailing, repair, and maintenance.",
  icons: {
    icon: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/e259380cbb3e9d709b7a736eec0aab34.png",
    shortcut: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/e259380cbb3e9d709b7a736eec0aab34.png",
    apple: "https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/e259380cbb3e9d709b7a736eec0aab34.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}