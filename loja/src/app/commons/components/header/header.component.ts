import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/constants/pages.enum';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
})
export class HeaderComponent implements OnInit {
  cart: Product[] = [];
  pages = Pages;

  constructor(
    private cartService: CartService,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.cart = this.cartService.getCart();
  }

  navigateTo(page: Pages): void {
    this.pagesService.setCurrentPage(page);
  }
}
