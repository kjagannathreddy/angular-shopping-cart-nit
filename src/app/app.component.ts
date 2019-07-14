import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public cart;
  public products = [
    {Name:'Tv',Price:'15000',Photo:'assets/1.jpg'},
    {Name:'Mobile',Price:'4000',Photo:'assets/1.jpg'},
    {Name:'Fridge',Price:'14000',Photo:'assets/1.jpg'},
    {Name:'Washing Machine',Price:'18000',Photo:'assets/1.jpg'},
    {Name:'Sparx shoes',Price:'1000',Photo:'assets/1.jpg'},
    {Name:'Killer Jeans',Price:'1500',Photo:'assets/1.jpg'}
  ];
  public add_to_cart(index){
    
  }
}
