import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ProductPageComponent } from './product-page/product-page.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatDialogModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
