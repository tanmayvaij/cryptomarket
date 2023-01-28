import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/interfaces/crypto-coin';
import { CryptoDataService } from "../../services/crypto-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cryptoObjectsArray: any;

  constructor(crypto: CryptoDataService) { 

    const crytoObservable = crypto.getCoins("inr", 1)

    crytoObservable.subscribe( data => { 

      this.cryptoObjectsArray = data

    })

  }

  ngOnInit() { 

  }

}
