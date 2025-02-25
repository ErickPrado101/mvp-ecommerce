import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechShop - Ganhe Pontos, Compre Inteligente",
  description: "Plataforma moderna de e-commerce com sistema de pontos recompensador",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-foreground`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

