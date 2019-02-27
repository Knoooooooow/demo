import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  comments:Comment[];
  //评论的输入数据
  newRating:number = 5;
  newComment:string = "";

  isCommentHidden:boolean = false;
  constructor(
    private routeInfo:ActivatedRoute,
    public productService:ProductService
    ) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }


  addComment(){
    let comment = new Comment(0, this.product.id, new Date(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sumVal = this.comments.reduce((sumVal, comment)=> sumVal + comment.rating, 0);
    this.product.rating = sumVal / this.comments.length;

    //初始化
    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = false;
  }
}
