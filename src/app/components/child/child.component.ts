import { Component, OnInit ,Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	@Input() msgg:string;
	@Input() method:string;
	@Output() toparent=new EventEmitter();
	public childmsg:string='子组件的值！';
	constructor() { }

	ngOnInit() {
		this.toparentFun();
	}
	toparentFun(){
		this.toparent.emit(this.childmsg);
	}

}
