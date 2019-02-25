import { FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import 'rxjs/RX';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stockCode:string="IBM";

  price:number;
  
  @Output()
  lastPrice:EventEmitter<PriceQuote> = new EventEmitter();

  name:FormControl = new FormControl();

  constructor() {
    this.name.valueChanges.debounceTime(500).subscribe(
      data=>{
        this.doSomething(data);
      },
      err=>{

      }
    );
    setInterval(()=>{
      let priceQuote:PriceQuote = new PriceQuote(this.stockCode,100*Math.random());
      this.price=priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    },1000)
  }
  ngOnInit(): void {
    
  }
  doSomething(val:any){
    console.log(val);
  }
}
export class PriceQuote {
  constructor(
    public stockCode:string,
    public lastPrice:number
  ){

  }
}