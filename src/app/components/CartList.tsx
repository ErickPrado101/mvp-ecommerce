"use client"

import { useCart } from "../contexts/CartContext"
import CartItemComponent from "./CartItem"
import CheckoutButton from "./CheckoutButton"

export default function CartList() {
  const { cart, totalPrice, totalPoints } = useCart()

  if (cart.length === 0) {
    return <p className="text-center text-lg">Seu carrinho está vazio.</p>
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
      <div className="mt-8 text-xl font-semibold">
        <p>Total: R$ {totalPrice.toFixed(2)}</p>
        <p>Total de Pontos: {totalPoints}</p>
      </div>
      <CheckoutButton />
    </div>
  )
}

