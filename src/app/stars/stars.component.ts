import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges{

  @Input()
  private readonly: boolean = true;

  //这里是angular给的语法糖，只有下面的输出属性名叫ratingChange的时候，才会生效，否则需要手动处理
  @Input() 
  private rating: number=0;
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  private stars: Array<boolean>;
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.getStar();
  }
  
  getStar(){
    this.stars= [];
    for(let i =1;i<=5;i++)
    {
      this.stars.push(i > this.rating);
    }
    
  }
  clickStar(i:number){
    if(!this.readonly){
      this.rating = i + 1;
      // this.getStar();
    }
    this.ratingChange.emit(this.rating);
  }

}
