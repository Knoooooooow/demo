import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  //模拟数据
  private products:Product[] = [
    new Product(1,"第一个商品",2.99,2,"第一条假数据",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",2.99,3,"第二条假数据",["娱乐产品","硬件设备"]),
    new Product(3,"第三个商品",2.99,4,"第三条假数据",["家具用品","硬件设备"]),
    new Product(4,"第四个商品",2.99,3,"第四条假数据",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",2.99,2,"第五条假数据",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",2.99,5,"第六条假数据",["电子产品","硬件设备"]),
  ]
  private comments:Comment[] = [
    new Comment(1,1,"2019-1-18 21:09:24","张三",3,"东西不错1"),
    new Comment(2,1,"2019-2-18 21:09:24","张三",3,"东西不错2"),
    new Comment(3,1,"2019-3-18 21:09:24","张三",3,"东西不错3"),
    new Comment(4,1,"2019-4-18 21:09:24","张三",3,"东西不错4")
  ]

  constructor() { }

  //返回数据的方法
  getProducts(): Product[]{
    return this.products;
  }
  getProduct(id:number): Product{
    return this.products.find((product)=>
      product.id == id
    );
  }
  getCommentsForProductId(id:number): Comment[]{
    return this.comments.filter((comment: Comment) => comment.productId);
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
export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}