import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 1000);
    const item = new CartItem(id, `Product ${id}`, Math.ceil(Math.random() * 100), 1);
    this.cartService.addItem(item);
  }

  empty() {
    this.cartService.emptyCart();
  }

}
