import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';
=======
import { CardViewComponent } from './card-view/card-view.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 899a6d9e68381354a5d895b63631f749f5d615c9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBarComponent,
    CardViewComponent,
    CollectionViewComponent
=======
    CardViewComponent,
    CollectionViewComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent
>>>>>>> 899a6d9e68381354a5d895b63631f749f5d615c9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
