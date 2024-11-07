import { Component, ViewEncapsulation } from '@angular/core';
import { Pages } from './constants/pages.enum';
import { PagesService } from './services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'loja';

  documentNumber = '01234567890';

  pages = Pages;

  // obs = new Observable((observer) => {
  //   // console.log('Início');
  //   observer.next(1);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 500);
  //   // setTimeout(() => {
  //   //   observer.error('Houve um erro');
  //   // }, 100);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 100);
  // });

  constructor(public pagesService: PagesService) {
    // this.obs.subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    //   complete: () => {
    //     console.log('Terminei');
    //   },
    // });
    // this.obs.subscribe((response) => {
    //   console.log(response);
    // });
  }
}
