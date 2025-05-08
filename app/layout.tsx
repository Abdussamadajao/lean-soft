import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/sections";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "LeanSoftWorks | Digital Innovation with Global Expertise",
    template: "%s | LeanSoftWorks",
  },
  description:
    "Bridging UK expertise with Nigerian innovation to create transformative software experiences in mobile, cloud, and AI systems.",
  keywords: [
    "software development",
    "Nigeria tech",
    "UK software company",
    "cloud solutions",
    "AI systems",
    "mobile apps",
  ],
  openGraph: {
    title: "LeanSoftWorks | Global-Local Digital Solutions",
    description:
      "Precision digital solutions combining UK/Nigeria tech expertise",
    url: "https://lean-softworks.com",
    siteName: "LeanSoftWorks",
    images: [
      {
        url: "/hero/hr1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://lean-softworks.com",
    languages: {
      "en-GB": "https://lean-softworks.com/uk",
      "en-NG": "https://lean-softworks.com/ng",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "LeanSoftWorks | Digital Innovation Experts",
    description: "UK-Nigeria collaborative software development",
    creator: "@LeanSoftWorks",
    images: ["/hero/hr1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
