import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment.prod"

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(private http: HttpClient) { }

  getCoins(currency: string, pageNo: number ) {
    
    const url = `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${pageNo}&sparkline=false`

    return this.http.get(environment.cryptoApiUrl + url)

  }

}
