import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEST",
  description: "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  keywords: ['nest.dev', 'nest', 'nest-links', 'nest-instagram'],
  icons: {
    icon: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    apple:
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
  },
  creator: "Mahmoud Sayed",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    ],
    title: "NEST Links",
    description:
      "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
    countryName: "Egypt",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEST Links",
    description:
      "We combine attractive design with cutting-edge technology to deliver an exceptional experience.",
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg",
    ],
  },
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
      >
        {children}
      </body>
    </html>
  );
}
