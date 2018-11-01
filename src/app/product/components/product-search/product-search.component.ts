import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { FormBuilder, Form, FormControl, FormGroup} from '@angular/forms';
import { map, filter, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products$: Observable<Product[]>;
  searchText: string;

  searchForm: FormGroup; // <form
  searchControl: FormControl; // <input

  constructor(private productService: ProductService, private builder: FormBuilder) {
    this.searchControl = new FormControl('');
    this.searchForm = this.builder.group({
      // formControlName: control variable
      'searchBox': this.searchControl
    });
  }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(map(value => value.trim()), filter(value => !!value), filter(value => {
      console.log('filter..');
      return value.length > 2;
    }), debounceTime(400))
    .subscribe(
      value => {
        this.searchText = value;
        this.products$ = this.productService.searchProducts(value);
      }
    );
  }

  // searchProducts(q: string) {
  //   console.log('Serach text .... ', q);
  //   if (q && q.trim() && q.length >= 3) {
  //     this.products$ = this.productService.searchProducts(q);
  //   }
  // }

}
