import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
	public msg='我是父组件的数据和子组件一毛关系都没有';
	constructor() { }
	public emitChildMsg:string;
	method(e){
		console.log('父组件的方法！和儿子一毛关系没有！');
		this.emitChildMsg=e;
	}
	ngOnInit() {
		
	}
	checkdata(){
		console.log(this.emitChildMsg);
	}
}
