import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CarDetailsComponent } from './car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarListComponent,
    BrandListComponent,
    CarDetailsComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }