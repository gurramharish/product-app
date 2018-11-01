import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { FormBuilder, Form, FormControl, FormGroup} from '@angular/forms';

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

  constructor(private productService: ProductService, private builder: FormBuilder) { }

  ngOnInit() {
  }

  searchProducts(q: string) {
    console.log('Serach text .... ', q);
    if (q) {
      this.products$ = this.productService.searchProducts(q);
    }
  }

}
