import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {  BookService } from './../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {


  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: BookService) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  // removeCartItem(product) {
  //   this.cartService.removeProduct(product);
  // }
  openCart() {
    this.router.navigate(['cart']);
  }
}