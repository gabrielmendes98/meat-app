import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from 'app/pages/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from 'app/pages/order/order.service';
import { RestaurantsService } from 'app/pages/restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from 'app/security/login/login.service';

@NgModule({
  declarations: [InputComponent, HeaderComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    InputComponent,
    HeaderComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarComponent,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, OrderService, RestaurantsService, NotificationService, LoginService],
    };
  }
}
