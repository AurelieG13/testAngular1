import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: Array<{ name: string, nbSeat: number, price: number }> = [];

  constructor(private cartService: CartService) {
    this.items = cartService.getItems();
    console.log(this.items);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
}
