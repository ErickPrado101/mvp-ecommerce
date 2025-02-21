"use client"

import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import { CreditCard } from "lucide-react"

export default function CheckoutButton() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { totalPrice, clearCart } = useCart()

  const handleCheckout = async () => {
    setIsProcessing(true)
    // Simular processamento de pagamento
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    setIsProcessing(false)
    alert("Pagamento realizado com sucesso! Obrigado pela sua compra.")
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isProcessing}
      className={`mt-8 w-full py-3 px-6 rounded-full flex items-center justify-center transition-colors ${
        isProcessing ? "bg-muted cursor-not-allowed" : "bg-primary hover:bg-primary/90 text-primary-foreground"
      }`}
    >
      <CreditCard className="mr-2" />
      {isProcessing ? "Processando..." : `Finalizar Compra - R$ ${totalPrice.toFixed(2)}`}
    </button>
  )
}

