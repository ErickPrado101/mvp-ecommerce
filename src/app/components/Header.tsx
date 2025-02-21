import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-secondary text-secondary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TechShop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/cart" className="flex items-center hover:text-primary transition-colors">
                <ShoppingCart className="mr-2" />
                Carrinho
              </Link>
            </li>
            <li>
              <Link href="/account" className="flex items-center hover:text-primary transition-colors">
                <User className="mr-2" />
                Conta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

