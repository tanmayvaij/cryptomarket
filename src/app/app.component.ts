import { Component } from '@angular/core'
import { CryptoDataService } from './services/crypto-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "cryptomarket"

  coinsList: any = []
  
  constructor(cryptoData: CryptoDataService) { 

    cryptoData.getCoins("inr", 1).subscribe((data) => {
      this.coinsList = data
      console.log(this.coinsList)
    })

  }

}
