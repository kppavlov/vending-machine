export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  disabled?: boolean;
};

export type Denominations =
  | 0.01
  | 0.05
  | 0.1
  | 0.2
  | 0.5
  | 1
  | 2
  | 5
  | 10
  | 20
  | 50
  | 100;
