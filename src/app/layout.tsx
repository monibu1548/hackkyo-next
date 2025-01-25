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
  title: "핵교 - 전국 초중고 시간표 및 급식 정보",
  description: "핵교는 NEIS 시스템과 연동하여 전국 초중고의 시간표와 급식 정보를 실시간으로 제공합니다.",
  keywords: "학교,초등학교,중학교,고등학교,시간표,초중고,급식,초등학교 시간표,중학교 시간표,고등학교 시간표",
  authors: [{ name: "규랩스", url: "https://hackkyo.kyulabs.app" }],
  generator: "Next.js",
  applicationName: "핵교",
  metadataBase: new URL("https://hackkyo.kyulabs.app"),
  openGraph: {
    title: "핵교 - 전국 초중고 시간표 및 급식 정보",
    description: "핵교는 NEIS 시스템과 연동하여 전국 초중고의 시간표와 급식 정보를 실시간으로 제공합니다.",
    url: "https://hackkyo.kyulabs.app",
    siteName: "핵교",
    images: [
      {
        url: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/88/fb/e588fb12-bdfc-95f1-dd5b-e091ff3bcbd7/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/230x0w.webp",
        width: 230,
        height: 230,
        alt: "핵교 앱 아이콘",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "핵교 - 전국 초중고 시간표 및 급식 정보",
    description: "핵교는 NEIS 시스템과 연동하여 전국 초중고의 시간표와 급식 정보를 실시간으로 제공합니다.",
    site: "@kyulabs",
    creator: "@kyulabs",
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/88/fb/e588fb12-bdfc-95f1-dd5b-e091ff3bcbd7/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/230x0w.webp",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}