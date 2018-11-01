import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/api/products/${id}`);
  }

  searchProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`);
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // update
      return this.http
            .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
                          product);
    } else { // create
      return this.http
      .post<Product>(`${environment.apiEndPoint}/api/products`,
                    product);
    }
  }


}
