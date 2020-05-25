
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  copyright: string = `© ${ new Date().getFullYear() } Angular Webstore.`
  userTerms = { url: 'https://www.udemy.com/terms/', text: 'Allmänna användarvillkor' }

  ngOnInit(): void {
    
  }

}
