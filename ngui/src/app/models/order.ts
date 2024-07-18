export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  client: string;
  items: Item[];
  total: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
