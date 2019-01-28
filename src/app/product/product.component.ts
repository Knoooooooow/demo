import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl:string;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",2.99,2,"第一条假数据",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,3,"第二条假数据",["娱乐产品","硬件设备"]),
      new Product(3,"第三个商品",2.99,4,"第三条假数据",["家具用品","硬件设备"]),
      new Product(4,"第四个商品",2.99,3,"第四条假数据",["电子产品","硬件设备"]),
      new Product(5,"第五个商品",2.99,2,"第五条假数据",["电子产品","硬件设备"]),
      new Product(6,"第六个商品",2.99,5,"第六条假数据",["电子产品","硬件设备"]),
    ]
    this.imgUrl='http://placehold.it/320x150';
  }

}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}