import { Injectable } from '@angular/core';
import { TotalService } from './total.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items: Array<{ name: string, nbSeat: number, price: number }> = [];

  constructor(private totalService: TotalService) {}


  addToCart(sport: { name: string, nbSeat: number, price: number }) {
    this.items.push(sport);
    this.updateTotal();
    this.updateTotalSeat();

  }

  getItems(): Array<{ name: string, nbSeat: number, price: number }> {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  updateTotal(): void {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.totalService.updateTotal(total);
  }

  updateTotalSeat(): void {
    const totalSeat = this.items.reduce((sum, item) => sum + item.nbSeat, 0);
    this.totalService.updateTotalSeat(totalSeat);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalSeat(): number {
    return this.items.reduce((totalItem, item) => totalItem + item.nbSeat, 0);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
