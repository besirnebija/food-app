import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { RatingModule } from 'ng-starrating';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
