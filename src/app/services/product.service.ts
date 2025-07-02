import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Elegant Red Dress',
      price: 2499,
      imageUrl: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80',
      category: 'Women'
    },
    {
      id: 2,
      name: 'Stylish Men’s Jacket',
      price: 3599,
      imageUrl: 'https://images.unsplash.com/photo-1618354691223-755cbf344b02?auto=format&fit=crop&w=600&q=80',
      category: 'Men'
    },
    {
      id: 3,
      name: 'Kids Fashion Set',
      price: 1799,
      imageUrl: 'https://images.unsplash.com/photo-1542060748-10c28b62716e?auto=format&fit=crop&w=600&q=80',
      category: 'Kids'
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
