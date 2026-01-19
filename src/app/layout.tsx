import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lame Proj - Market Your Lame Startup",
  description: "The gamified platform where entrepreneurs market their startups as the lamest projects. Join the community of builders, investors, and VCs.",
  keywords: ["startups", "entrepreneurs", "product launch", "indie hackers", "VC", "Y Combinator"],
  authors: [{ name: "Lame Proj" }],
  openGraph: {
    title: "Lame Proj - Market Your Lame Startup",
    description: "The gamified platform where entrepreneurs market their startups as the lamest projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lame Proj - Market Your Lame Startup",
    description: "The gamified platform where entrepreneurs market their startups as the lamest projects.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
