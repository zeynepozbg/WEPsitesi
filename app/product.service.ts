import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 150 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 200 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
