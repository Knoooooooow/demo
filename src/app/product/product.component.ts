import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:Product[];
  private imgUrl='http://placehold.it/320x150';
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.products=this.productservice.getProducts();
    
  }

}
