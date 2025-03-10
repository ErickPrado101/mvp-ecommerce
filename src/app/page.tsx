import ProductList from "./components/ProductList"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Bem vindo a sua loja favorita!</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}

