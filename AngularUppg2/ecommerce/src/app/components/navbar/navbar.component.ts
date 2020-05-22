import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  brand: string = 'ANGULAR Webstore'
  links = [
    { path: '/' , pathName: 'Home'},
    { path: '/features' , pathName: 'Features'},
    { path: '/products' , pathName: 'Products'}
  ]

  ngOnInit(): void {
  }

}
