"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import type { Product } from "../types"
import { ShoppingCart } from "lucide-react"

interface AddToCartButtonProps {
  product: Product
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`mt-4 w-full py-2 px-4 rounded-full flex items-center justify-center transition-colors ${
        isAdded ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
    >
      <ShoppingCart className="mr-2" />
      {isAdded ? `${product.name} Adicionado` : `Adicionar ao Carrinho - R$ ${product.price.toFixed(2)}`}
    </button>
  )
}

export default AddToCartButton

