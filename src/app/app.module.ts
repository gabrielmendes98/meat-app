import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { RestaurantComponent } from "./pages/restaurants/restaurant/restaurant.component";
import { RestaurantsService } from "./pages/restaurants/restaurants.service";
import { RestaurantDetailComponent } from "./pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./pages/restaurant-detail/menu/menu.component";
import { ShoppingCartComponent } from "./pages/restaurant-detail/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./pages/restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./pages/restaurant-detail/reviews/reviews.component";

import { ShoppingCartService } from "./pages/restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderComponent } from "./pages/order/order.component";
import { InputComponent } from "./shared/input/input.component";
import { RadioComponent } from "./shared/radio/radio.component";
import { OrderItemsComponent } from "./pages/order/order-items/order-items.component";

import { OrderService } from "./pages/order/order.service";
import { DeliveryCostsComponent } from "./pages/order/delivery-costs/delivery-costs.component";
import { RatingComponent } from './shared/rating/rating.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    RatingComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
