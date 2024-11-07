import { Injectable } from '@angular/core';
import { Pages } from '../constants/pages.enum';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private currentPage: Pages = Pages.LIST;

  setCurrentPage(page: Pages) {
    this.currentPage = page;
  }

  getCurrentPage(): Pages {
    return this.currentPage;
  }
}
