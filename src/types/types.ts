
export interface BuyOrderFormProps {
  pricePerUnit: number;
}

export interface SellOrder {
  company: string;
  quantity: number;
  submitted: string;
}

export type BuyMode = "quantity" | "total";