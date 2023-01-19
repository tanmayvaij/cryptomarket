import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from "@angular/common/http";
import { ModPipe } from './pipes/mod.pipe';
import { CoinComponent } from './components/coin/coin.component'

@NgModule({
  declarations: [
    AppComponent,
    ModPipe,
    CoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
