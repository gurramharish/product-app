// collection of components, directives, pipes and services
// reference to other modules

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// BrowserModule has dependencies [CommonModule, Compiler]
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
// ng 4.3 onwards, interceptors etc
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

// Step 1: route, configuration, map url to component

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**', // not found
    component: NotFoundComponent
  }
];

@NgModule ( {
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CartModule,
    ProductModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // HttpModule
    // ProductModule
    // CartModule
    // AuthModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  bootstrap: [
    // We can have more than one component in bootstrap
    AppComponent
  ]
})
export class AppModule {

}
