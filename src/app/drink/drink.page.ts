import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: 'drink.page.html',
  styleUrls: ['drink.page.scss'],
})
export class DrinkPage implements OnInit{
  public drinks = [];
  public items = [];
  public i = 1;

  constructor( public route: Router, private drinksService: DrinkService, public activatedRoute: ActivatedRoute ) {
    this.activatedRoute.queryParams.subscribe(async (res) => {
      this.items = JSON.parse(res.special);
      this.items = this.items.map((item) => item.value);
      this.getDrinks();
    })
  }

  ngOnInit(): void {
    this.getDrinks();
  }

  logScrollEnd(event) {
    if (this.items.length != 0) {
      this.drinksService.getDrink(this.items).subscribe((drinks) => {
        drinks.drinks.map((drink) => {
          this.drinks.push(drink);
        })
      })
      this.items.shift();
    }
  }

  public filter(): void {
    this.route.navigate(['/filter']);
  }

  private getDrinks(): void {
    if(this.items.length != 0) {
      this.drinks = [];
        this.drinksService.getDrink(this.items).subscribe((drinks) => {
          drinks.drinks.map((drink) => {
            this.drinks.push(drink);
          })
        })
      this.items.shift();
    }
  }

}
