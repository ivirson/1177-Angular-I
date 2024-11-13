import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { LowerCasePipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,
    imports: [LowerCasePipe, CurrencyPipe],
})
export class CardComponent implements OnChanges {
  @Input() product!: Product;

  constructor(public cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log('Descricao mudou', this.product.description);
    }
  }
}
