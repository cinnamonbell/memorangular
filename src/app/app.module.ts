import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    CollectionViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
