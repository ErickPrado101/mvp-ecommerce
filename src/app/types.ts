export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  points: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UnlockableItem {
  id: string;
  name: string;
  description: string;
  image: string;
  pointsRequired: number;
}
