import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  constructor(private http: HttpClient) { }
 
  public getDrink(drink): Observable<any> {
    console.log(drink);
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`);
  }
}