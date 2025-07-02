import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: Product[] = [];

  getWishlist() {
    return this.wishlist;
  }

  addToWishlist(product: Product) {
    if (!this.wishlist.find(p => p.id === product.id)) {
      this.wishlist.push(product);
    }
  }

  removeFromWishlist(productId: number) {
    this.wishlist = this.wishlist.filter(p => p.id !== productId);
  }
}
