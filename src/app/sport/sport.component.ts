import { Component } from '@angular/core';
import { Sport } from '../model/sport.model';
import { CartService } from '../services/cart.service';
import { SportApiService } from '../services/sport-api.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sports: Sport[] = [];
  message!: string;
  addMessage: number = 0;

  constructor(private cartService: CartService, private sportApiService: SportApiService) {}

  ngOnInit() {
    this.sportApiService.getSports().subscribe(
      (sports) => {
        this.sports = sports;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }

  addToCart(sport: Sport) {
    this.cartService.addToCart(sport);
    this.addMessage = 1;
    this.message = "Sport ajouté avec succès";

    console.log(this.message);

  }

  getTotal() {
    this.cartService.getTotal();
  }
}
