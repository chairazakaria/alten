import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product';
import { ProductService } from 'app/services/productservice';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  products: Product[];
  product: Product;
 
  selectedProducts: Product[];
  submitted: boolean; 
  productDialog: boolean;

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data); 
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}

deleteSelectedProducts() { 
  this.products = this.products.filter(val => !this.selectedProducts.includes(val));
  this.selectedProducts = null; 
}

editProduct(product: Product) {
  this.product = {...product};
  this.productDialog = true;
}
deleteProduct(product: Product) { 
  this.products = this.products.filter(val => val.id !== product.id);
}

}
