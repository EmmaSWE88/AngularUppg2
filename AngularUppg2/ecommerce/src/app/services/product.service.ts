import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/actions/product.actions'
import * as demo from '../data/demo'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl: string = 'mongodb+srv://emma:bytmig123@cluster0-2pqwy.mongodb.net/webapidb?retryWrites=true&w=majority'
  //private _baseUrl: string = 'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products'
  constructor(private http: HttpClient, private store: Store) { }

  getById(id) {
    this.http.get<any>(this._baseUrl + id).subscribe(
      res => this.store.dispatch(new ProductActions.Set(res)),
      err => this.getDemoDataById(id)
    )
  }

  clear() {
    this.store.dispatch(new ProductActions.Clear())
  }
  
  getDemoDataById(id){
    this.store.dispatch(new ProductActions.Set(demo.productCatalog.find(i => i.id === id)))
  }
}
