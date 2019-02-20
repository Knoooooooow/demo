import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/RX';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  name:FormControl = new FormControl();

  constructor() {
    this.name.valueChanges.debounceTime(500).subscribe(
      data=>{
        this.doSomething(data);
      },
      err=>{

      }
    );
  }
  ngOnInit(): void {
    
  }
  doSomething(val:any){
    console.log(val);
  }
}
