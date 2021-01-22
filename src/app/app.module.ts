import { LoggerService } from './services/logger.service';
import { RouterModule ,Route} from '@angular/router';
import { ShortenPipe } from './shared/pipes/shorten';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBingingComponent } from './event-binging/event-binging.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ProductComponent } from './product/product.component';
import { ProductTumbnailComponent } from './product/product-tumbnail/product-tumbnail.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BasicHighlightsDirective } from './shared/directives/basic-highlights.directive';
import { HigherHiglightsDirective } from './shared/directives/higher-higlights.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { TempProductComponent } from './temp-product/temp-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';

const routes : Route[]=[{
path:"home", component:HomeComponent},
{path:'product', component:ProductComponent},
{path:'productdetails/:id', component:ProductDetailsComponent},
{path:'', component:HomeComponent},
{path:'signup', component:SignupComponent},
{path: '**',component:HomeComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    StringInterpolationComponent,
    EventBingingComponent,
    TwoWayBindingComponent,
    ProductComponent,
    ProductTumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightsDirective,
    HigherHiglightsDirective,
    UnlessDirective,
    TempProductComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
