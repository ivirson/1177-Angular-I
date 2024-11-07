import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pages } from 'src/app/constants/pages.enum';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  apiUrl = 'https://crudcrud.com/api/39d30fdbcafc4ab79aa24127db924050';

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    qty: new FormControl(null, [Validators.required, Validators.min(1)]),
    image: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpClient, private pagesService: PagesService) {}

  onSubmit(): void {
    const payload = this.form.getRawValue();
    this.http.post(`${this.apiUrl}/products`, payload).subscribe({
      complete: () => {
        this.pagesService.setCurrentPage(Pages.LIST);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
