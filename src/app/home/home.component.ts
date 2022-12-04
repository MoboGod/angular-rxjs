import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/models/product.model'

import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private productService: ProductsService, private router: Router) {}

  products: Product[] = []
  showProductDescription: boolean = false

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data
    })
  }

  navigateToProductPage(id: number): void {
    this.router.navigate([`/product/${id}`])
  }
}
