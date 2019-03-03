import { ProductService } from './../shared/product.service';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { positiveNumberValidator } from '../formvalid/valid';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    formModel:FormGroup;

    categories: string[];

    constructor(private productService:ProductService,private fb:FormBuilder) { }

    ngOnInit() {
        this.categories = this.productService.getAllCategories();
        this.formModel = this.fb.group({
            title:['',Validators.minLength(3)],
            price:[null,positiveNumberValidator],
            category:[-1],
        })
    }

    onSearch(){
        if(this.formModel.valid)
        {
            console.log(this.formModel.value);
        }
    }
  

}
