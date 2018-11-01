import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItems$: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.totalItems$ = this.cartService.totalItems$;
  }

}
