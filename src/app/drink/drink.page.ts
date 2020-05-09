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

  constructor( public route: Router, private drinksService: DrinkService, public activatedRoute: ActivatedRoute ) {
    this.activatedRoute.queryParams.subscribe(async (res) => {
      this.items = JSON.parse(res.special);
      this.items = this.items.map((item) => item.value);
      console.log(this.items);
      this.getDrinks();
    })
  }

  ngOnInit(): void {
    this.getDrinks();
  }

  public filter(): void {
    this.route.navigate(['/filter']);
  }

  private getDrinks(): void {
    if(this.items.length != 0) {
      this.items.forEach((drink) => {
        this.drinksService.getDrink(drink).subscribe((drinks) => {
          this.drinks = drinks.drinks;
          console.log(this.drinks);
        })
      })
    }
  }

}
