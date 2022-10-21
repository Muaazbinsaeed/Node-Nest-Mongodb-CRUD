export interface Item {
  id?: string;
  name: string;
  detail?: string;
  quantity: number;
  price: number;
}

export interface UpdateItem {
  id?: string;
  name?: string;
  detail?: string;
  quantity?: number;
  price?: number;
}
