import { PriceQuote } from './components/form/form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  priceQuote:PriceQuote = new PriceQuote("",0);
  priceQuoteHandle(e:PriceQuote){
    this.priceQuote = e;
  }
}
