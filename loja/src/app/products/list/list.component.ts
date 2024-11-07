import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  apiUrl = 'https://crudcrud.com/api/39d30fdbcafc4ab79aa24127db924050';

  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Product[]>(`${this.apiUrl}/products`).subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Dados obtidos com sucesso!');
      },
    });
  }
}
