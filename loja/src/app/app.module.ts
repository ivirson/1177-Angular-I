import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { DocumentPipe } from './pipes/document.pipe';
import { CardComponent } from './shared/components/card/card.component';
import { CartComponent } from './products/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DocumentPipe,
    CartComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
