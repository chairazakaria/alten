import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product';
import { ProductService } from 'app/services/productservice';
import { ConfirmationService } from 'primeng/api';

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

  constructor(private productService: ProductService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data); 
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}

deleteSelectedProducts() {  
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected products?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.selectedProducts = null; 
    }
});
}

editProduct(product: Product) {
  /* this.product = {...product};
  this.productDialog = true; */
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + product.name + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => { 
    }
});
}
deleteProduct(product: Product) {   
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + product.name + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {}; 
    }
});
}

saveProduct(){
  
}

}
