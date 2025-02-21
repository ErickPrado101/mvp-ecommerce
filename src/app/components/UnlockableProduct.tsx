import Image from "next/image"
import { Lock, Unlock } from "lucide-react"
import type { UnlockableItem } from "../types"

interface UnlockableProductProps {
  item: UnlockableItem
  userPoints: number
}

export default function UnlockableProduct({ item, userPoints }: UnlockableProductProps) {
  const isUnlocked = userPoints >= item.pointsRequired

  return (
    <div
      className={`border border-border rounded-lg shadow-md overflow-hidden ${isUnlocked ? "bg-secondary" : "bg-card"}`}
    >
      <div className="relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-background rounded-full p-2">
          {isUnlocked ? (
            <Unlock className="w-6 h-6 text-primary" />
          ) : (
            <Lock className="w-6 h-6 text-muted-foreground" />
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            {isUnlocked ? "Desbloqueado!" : `${item.pointsRequired} pontos necessários`}
          </span>
          {isUnlocked ? (
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">Resgatar</button>
          ) : (
            <div className="text-sm text-muted-foreground">Faltam {item.pointsRequired - userPoints} pontos</div>
          )}
        </div>
      </div>
    </div>
  )
}

