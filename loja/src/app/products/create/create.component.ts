import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pages } from 'src/app/constants/pages.enum';
import { PagesService } from 'src/app/services/pages.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgIf,
    ],
})
export class CreateComponent implements OnInit {
  apiUrl = 'https://crudcrud.com/api/b563acdb1f46420c91cd27c02c36c92f';

  priceError?: string;

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    qty: new FormControl(null, [Validators.required, Validators.min(1)]),
    image: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpClient, private pagesService: PagesService) {}

  ngOnInit(): void {
    this.setPriceSubscription();
  }

  onSubmit(): void {
    const payload = this.form.getRawValue();
    this.http.post(`${this.apiUrl}/products`, payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {
        this.pagesService.setCurrentPage(Pages.LIST);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  setPriceSubscription(): void {
    this.form.get('price')?.valueChanges.subscribe((value) => {
      if (value > 10000) {
        this.priceError = 'Valor acima do permitido';
      }
    });
  }
}
