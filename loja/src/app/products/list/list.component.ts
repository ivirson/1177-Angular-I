import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  protected unsubscribe = new Subject<void>();

  apiUrl = 'https://crudcrud.com/api/b563acdb1f46420c91cd27c02c36c92f';

  products: Product[] = [];

  obs = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();

    this.obs.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      console.log(res);
    });
  }

  getProducts(): void {
    this.http.get<Product[]>(`${this.apiUrl}/products`).subscribe({
      next: (response) => {
        this.products = response;
        setTimeout(() => {
          this.products[0].description += ' --- EDITED';
        }, 3000);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Dados obtidos com sucesso!');
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
