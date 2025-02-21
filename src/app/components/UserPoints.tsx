"use client"

import { useState, useEffect } from "react"
import UnlockableProduct from "./UnlockableProduct"

interface UnlockableItem {
  id: string
  name: string
  description: string
  image: string
  pointsRequired: number
}

const unlockableItems: UnlockableItem[] = [
  {
    id: "1",
    name: "Status de Cliente VIP",
    description: "Desbloqueie ofertas exclusivas e atendimento prioritário",
    image: "/placeholder.svg",
    pointsRequired: 1000,
  },
  {
    id: "2",
    name: "Frete Grátis no Dia Seguinte",
    description: "Obtenha frete grátis no dia seguinte em todos os seus pedidos por um mês",
    image: "/placeholder.svg",
    pointsRequired: 2500,
  },
  {
    id: "3",
    name: "R$ 50 de Crédito na Loja",
    description: "Receba um crédito de R$ 50 para usar em qualquer compra",
    image: "/placeholder.svg",
    pointsRequired: 5000,
  },
  {
    id: "4",
    name: "Gadget Tecnológico de Edição Limitada",
    description: "Gadget de alta tecnologia exclusivo apenas para nossos maiores acumuladores de pontos",
    image: "/placeholder.svg",
    pointsRequired: 10000,
  },
]

export default function UserPoints() {
  const [points, setPoints] = useState(0)

  useEffect(() => {
    // Simular a busca de pontos do usuário de uma API
    const fetchedPoints = 5000
    setPoints(fetchedPoints)
  }, [])

  return (
    <div className="space-y-8">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Seus Pontos</h2>
        <p className="text-4xl font-bold text-primary">{points}</p>
        <p className="mt-2 text-muted-foreground">
          Use seus pontos para desbloquear recompensas e descontos exclusivos!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recompensas Desbloqueáveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {unlockableItems.map((item) => (
            <UnlockableProduct key={item.id} item={item} userPoints={points} />
          ))}
        </div>
      </div>
    </div>
  )
}

