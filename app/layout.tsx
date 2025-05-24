import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAI - Business Automation with Artificial Intelligence",
  description:
    "Automate your business and respond to your customers 24/7 without increasing your team. AI-powered automation for WhatsApp, Gmail, and social media.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
