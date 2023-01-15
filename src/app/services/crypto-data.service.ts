import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(private http: HttpClient) { }

  getCoins(currency: string, pageNo: number) {

    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${pageNo}`

    return this.http.get(apiUrl)

  }

}
