import Header from "../components/Header"
import Footer from "../components/Footer"
import UserPoints from "../components/UserPoints"

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Sua Conta</h1>
        <UserPoints />
      </main>
      <Footer />
    </div>
  )
}

