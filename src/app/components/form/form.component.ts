import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder,) { }
  public formval: any;
  username:any='';
  ngOnInit(): void {
    this.formval = this.fb.group({
      name: ['', Validators.required]
      //,Validators.pattern('[0-9]')
    });
  }

}
