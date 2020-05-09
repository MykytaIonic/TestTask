import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  public items = [];
  public checkedItems = [];

  constructor( public route: Router ) {
    this.items = [
      { name: "Ordinary Drink", value:"Ordinary_Drink" }, 
      { name: "Cocktail", value:"Cocktail"},
      { name: "Milk / Float / Shake", value:"Milk_/_Float_/_Shake" }, 
      { name: "Other/Unknown", value:"Other/Unknown" }, 
      { name: "Cocoa", value:"Cocoa" }, 
      { name:"Shot", value:"Shot" }, 
      { name: "Coffee / Tea", value:"Coffee_/_Tea" }, 
      { name: "Homemade Liqueur", value:"Homemade_Liqueur" }, 
      { name: "Beer", value:"Beer" }
    ];
   }

  ngOnInit() {
  }

  public toDrinkPage(): void {
    this.route.navigate(['/drink']);
  }

  public sendDrinks() {
    this.checkedItems = this.items.filter(value => {
      return value.isChecked;
    });
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.checkedItems)
      }
    };
    this.route.navigate(['/drink'], navigationExtras);
  }

}
