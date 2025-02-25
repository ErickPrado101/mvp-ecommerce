import type React from "react"
import Image from "next/image"
import type { Product } from "../types"
import AddToCartButton from "./AddToCartButton"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">R$ {product.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">{product.points} pontos</span>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

export default ProductCard

