import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
