import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './pages/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './pages/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './pages/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './pages/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
