import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
