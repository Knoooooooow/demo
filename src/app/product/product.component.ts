import { FormControl } from '@angular/forms';
import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:Product[];

  private keyword:string;

  private titleFilter:FormControl = new FormControl;

  private imgUrl='http://placehold.it/320x150';

  constructor(private productservice:ProductService) { }

  ngOnInit() {

    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      data=>{
        this.keyword=data;
      },err=>{
        console.error(err);
      }
    )
    this.products=this.productservice.getProducts();
    
  }

}
