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
  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log(123);
  // }
}
