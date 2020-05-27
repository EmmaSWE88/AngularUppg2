import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<IState>) { }
  public cartItemCount: number

  brand: string = 'ANGULAR Webstore'
  links = [
    { path: '/' , pathName: 'Home'},
    { path: '/features' , pathName: 'Features'},
    { path: '/products' , pathName: 'Products'}
  ]

  ngOnInit(): void {
    this.store.select(store => store.shoppingcartTotal).subscribe(res => this.cartItemCount = res)
    
  }

}
