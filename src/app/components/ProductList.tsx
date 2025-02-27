import ProductCard from "./ProductCard"
import type { Product } from "../types"

const products: Product[] = [
  {
    id: "1",
    name: "Laptop ",
    description: "Computação  ultrarrápida em um design elegante",
    price: 1999.99,
    image: "/D_NQ_NP_980534-MLA82442820505_022025-O.webp",
    points: 2000,
  },
  {
    id: "2",
    name: "Tela Holográfica",
    description: "Display holográfico 3D  para visualização imersiva",
    price: 799.99,
    image: "/Tela-de-malha-do-projetor-3d-holografico.jpg",
    points: 800,
  },
  {
    id: "3",
    name: "Limpador Bot",
    description: "Robôs  que mantêm sua casa impecável",
    price: 299.99,
    image: "/1668033974.jpg",
    points: 300,
  },
  {
    id: "4",
    name: "Smartphone ",
    description: "Dispositivo de pessoal multifuncional",
    price: 4999.99,
    image: "/download.jpeg",
    points: 5000,
  },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

