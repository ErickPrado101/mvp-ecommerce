import CartList from "../components/CartList"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        <CartList />
      </main>
      <Footer />
    </div>
  )
}

