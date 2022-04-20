import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Coin } from '../interfaces/coin';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Coins!: MatTableDataSource<Coin>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    "name",
    "symbol",
    "current_price",
    "market_cap",
    "high_24h",
    "low_24h",
    "price_change_24h",
    "circulating_supply"
  ];

  constructor(private coinService: CoinService) { }
  
  ngOnInit() {
    this.getCoinsFromApi();
  }
  
  getCoinsFromApi() {
  
    this.coinService.getCoins().subscribe(data => {
      this.Coins = new MatTableDataSource<Coin>(data);
      this.Coins.paginator = this.paginator;
    });
  }
}