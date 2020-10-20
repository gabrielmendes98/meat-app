import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './pages/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './pages/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'order', loadChildren: './pages/order/order.module#OrderModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: '**', component: NotFoundComponent },
];
