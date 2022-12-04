import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/models/product.model'
import { ProductsService } from 'src/services/products.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

  productData!: Product[]

  productId: number = 0

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id']
    })

    this.productsService.getProductById(this.productId).subscribe((data: Product) => {
      this.productData = [data]
      this.productsService.productId = this.productId
    })
  }

  onEditProduct() {
    this.productsService.updateProduct(this.productData[0]).subscribe((data) => {
      console.log(data)
    })
  }
}
