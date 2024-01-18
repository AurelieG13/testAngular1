import { Component } from '@angular/core';
import { Sport } from '../model/sport.model';
import { CartService } from '../services/cart.service';
import { SportApiService } from '../services/sport-api.service';
import { TotalService } from '../services/total.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sports: Sport[] = [];
  message!: string;
  addMessage: number = 0;
  totalSport!: number;
  totalSeatSport!: number;
  totalFromService: number = 0;
  totalSeatFromService: number = 0;

  constructor(private cartService: CartService, private sportApiService: SportApiService, private totalService: TotalService) {}

  ngOnInit() {
    this.sportApiService.getSports().subscribe(
      (sports) => {
        this.sports = sports;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
    this.totalService.total$.subscribe((total) => {
      this.totalFromService = total;
    });

    this.totalService.totalSeat$.subscribe((totalSeat) => {
      this.totalSeatFromService = totalSeat;
    });
  }

  addToCart(sport: Sport) {
    this.cartService.addToCart(sport);
    this.addMessage = 1;
    this.message = "Sport ajouté avec succès";
    this.totalService.updateTotal(this.totalFromService);
    this.totalService.updateTotalSeat(this.totalSeatFromService);


    console.log(this.message);

  }

  getTotal() {
    this.totalSport = this.cartService.getTotal();
  }

  getTotalSeat() {
    this.totalSeatSport = this.cartService.getTotalSeat();
  }

}
