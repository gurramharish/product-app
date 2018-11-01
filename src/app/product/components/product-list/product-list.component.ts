import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: Subscription;
  constructor(private productService: ProductService, private cartService: CartService) { }

  fetchProducts() {
    this.subscription = this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
  }

  ngOnInit() {
    this.fetchProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      res => {
        this.fetchProducts();
      }
    );
  }

  addItemToCart(product: Product) {
    const item = new CartItem(product.id, product.name, product.price, 1);
    this.cartService.addItem(item);
  }

  ngOnDestroy() {
    console.log('product list is destroyed');
    this.subscription.unsubscribe();
  }

}
