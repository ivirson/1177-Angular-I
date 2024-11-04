import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product!: Product;
  @Output() incrementEmitter = new EventEmitter<Product>();

  increment(): void {
    this.incrementEmitter.emit(this.product);
  }
}
