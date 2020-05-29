import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { IShoppingcart } from 'src/app/models/ishoppingcart.model'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
 

  constructor(private ShoppingCartService: ShoppingCartService, private router: ActivatedRoute, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(state => state.shoppingcart).subscribe()
  }

}
