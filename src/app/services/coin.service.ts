import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Subscription, timer} from 'rxjs'; 
import { map } from 'rxjs/operators';

// Interface
import { Coin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  timerSubscription!: Subscription; 

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.url);
  }
}
