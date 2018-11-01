import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /// Observed items
  private _items: CartItem[] = [];
  // items: Array<CartItem> = [];
  private _amount = 0;
  private _totalItems = 0;

  // Observable, publish the cart items
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject(this._items);
  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);

  set items(value) {
    this._items = value;
    this.items$.next(this._items);
  }

  get items() {
    return this._items;
  }

  set amount(value) {
    this._amount = value;
    this.amount$.next(this._amount);
  }

  get amount() {
    return this._amount;
  }

  set totalItems(value) {
    this._totalItems = value;
    this.totalItems$.next(this._totalItems);
  }

  get totalItems() {
    return this._totalItems;
  }

  constructor() { }

  addItem(item: CartItem) {
    this._items = [...this._items, item];
    this.items = this._items;
    this.recalculate();
  }

  recalculate() {
    let amount = 0;
    let totalItems = 0;
    for (const item of this.items) {
      amount += item.price * item.qty;
      totalItems += item.qty;
    }
    this.amount = amount;
    this.totalItems = totalItems;
  }

  removeItem(id: number) {
    let item: CartItem;
    this.items = this.items.filter( i => {
      if (i.id !== id) {
        return true;
      } else {
        item = i;
      }
      return false;
    });
    this.recalculate();
  }

  emptyCart() {
    this.items = [];
    this.amount = 0;
    this.totalItems = 0;
  }
}
