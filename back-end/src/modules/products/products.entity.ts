export class Product {
  id?: string;
  description: string;
  ean: string;
  unit: string;
  cost?: number;
  price: number;
  stock?: number;
  status: boolean;
  tags?: string;
  min_stock?: number;
  updated_at: Date;
  categoryId: number;
  supplierId: number;
  imageUrl?: string;

  constructor(
    id: string,
    description: string,
    ean: string,
    unit: string,
    cost: number,
    price: number,
    stock: number,
    status: boolean,
    tags: string,
    min_stock: number,
    updated_at: Date,
    categoryId: number,
    supplierId: number,
    imageUrl: string,
  ) {
    this.id = id;
    this.description = description;
    this.ean = ean;
    this.unit = unit;
    this.cost = cost;
    this.price = price;
    this.stock = stock;
    this.status = status;
    this.tags = tags;
    this.min_stock = min_stock;
    this.updated_at = updated_at;
    this.categoryId = categoryId;
    this.supplierId = supplierId;
    this.imageUrl = imageUrl;
  }
}
