import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItems$: Observable<number>;

  authenticated$: Observable<boolean>;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit() {
    this.totalItems$ = this.cartService.totalItems$;
    this.authenticated$ = this.authService.authenticated$;
  }

  login() {
    this.authService.login('hans', 'hans^123');
  }

  logoutFn() {
    this.authService.logout();
  }

}
