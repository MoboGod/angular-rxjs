import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Product } from 'src/models/product.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private productsUrl = environment.productsUrl
  productId!: number

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product)
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productsUrl}/${product.id}`, product)
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.productsUrl}/${id}`)
  }
}
