import Image from "next/image"
import { useCart } from "../contexts/CartContext"
import { Trash2 } from "lucide-react"
import type { CartItem } from "../types"

interface CartItemComponentProps {
  item: CartItem
}

export default function CartItemComponent({ item }: CartItemComponentProps) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex items-center border-b border-border py-4">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-muted-foreground">{item.description}</p>
        <p className="text-sm">Quantidade: {item.quantity}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">{item.points * item.quantity} pontos</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-2 text-destructive hover:text-destructive/90 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}

