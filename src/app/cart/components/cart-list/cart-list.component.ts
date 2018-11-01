import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items$: Observable<CartItem[]>;
  constructor(private cartService: CartService) {

   }

  ngOnInit() {
    this.items$ = this.cartService.items$;
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }
}
