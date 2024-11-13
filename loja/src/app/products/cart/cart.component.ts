import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: true,
    imports: [NgFor, CardComponent],
})
export class CartComponent {
  constructor(public cartService: CartService) {}
}
