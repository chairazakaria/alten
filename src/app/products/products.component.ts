import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product';
import { ProductService } from 'app/services/productservice';
import { PrimeNGConfig, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] 
})
export class ProductsComponent implements OnInit {
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string; 

  searchText="";

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
        {label: 'Prix + to -', value: '!price'},
        {label: 'Price - to +', value: 'price'}
    ];

    this.primengConfig.ripple = true;
}

onSortChange(event) { 
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
 
}
