import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items: Array<{ name: string, nbSeat: number, price: number }> = [];


  addToCart(sport: { name: string, nbSeat: number, price: number }) {
    this.items.push(sport);
  }

  getItems(): Array<{ name: string, nbSeat: number, price: number }> {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
