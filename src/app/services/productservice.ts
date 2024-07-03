import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/model/product';
    
@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }
 
 
    getProductsData(){
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
 
};