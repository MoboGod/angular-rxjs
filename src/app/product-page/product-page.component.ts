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

  onEditProductInfo(description: string): void {
    const currentProduct: Product = this.productData[0]
    // productToEdit.price = price
    const productToEdit: Product = {
      id: currentProduct.id,
      title: currentProduct.title,
      price: currentProduct.price,
      description: description,
      category: currentProduct.category,
      image: currentProduct.image,
      rating: {
        rate: currentProduct.rating.rate,
        count: currentProduct.rating.count
      }
    }

    this.productsService.updateProduct(productToEdit).subscribe((data: Product) => {
      this.productData = [data]
    })
  }
}
