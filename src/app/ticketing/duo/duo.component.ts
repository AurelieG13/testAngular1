import { Component, OnInit } from '@angular/core';
import { Sport } from '../../model/sport.model';
import { CartService } from '../../services/cart.service';
import { SportApiService } from '../../services/sport-api.service';
import { TotalService } from '../../services/total.service';

@Component({
  selector: 'app-duo',
  templateUrl: './duo.component.html',
  styleUrl: './duo.component.css'
})
export class DuoComponent implements OnInit {

  sports: Sport[] = [];
  message!: string;
  addMessage: number = 0;
  totalSport!: number;
  totalSeatSport!: number;
  totalFromService: number = 0;
  totalSeatFromService: number = 0;
  private maxProducts = 2;


  constructor(private totalService: TotalService, private cartService: CartService, private sportApiService: SportApiService) {}

  ngOnInit(): void {
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
    if (this.totalSeatFromService < this.maxProducts) {
      this.cartService.addToCart(sport);
      this.addMessage = 1;
      this.message = "Sport ajouté avec succès";
      this.totalService.updateTotal(this.totalFromService);
      this.totalService.updateTotalSeat(this.totalSeatFromService);
      console.log(this.message);

    } else {
      this.addMessage = 2;
      this.message = "Vous ne pouvez selectionner que 2 billets";
    }

  }

  getTotal() {
    this.totalSport = this.cartService.getTotal();
  }

  getTotalSeat() {
    this.totalSeatSport = this.cartService.getTotalSeat();
  }
}
