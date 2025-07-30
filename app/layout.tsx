import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finnthelabel Solutions - Expert CRM Implementation & Consulting",
  description:
    "Transform your sales process with expert CRM implementation services. Trusted by 500+ companies for Salesforce, HubSpot, and custom CRM solutions.",
  keywords: "CRM implementation, Salesforce consulting, HubSpot implementation, sales automation, CRM integration",
  authors: [{ name: "Finnthelabel Solutions" }],
  openGraph: {
    title: "Finnthelabel Solutions - Expert CRM Implementation",
    description: "Transform your sales process with expert CRM implementation services.",
    url: "https://finnthelabel.com",
    siteName: "Finnthelabel Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finnthelabel Solutions - Expert CRM Implementation",
    description: "Transform your sales process with expert CRM implementation services.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
