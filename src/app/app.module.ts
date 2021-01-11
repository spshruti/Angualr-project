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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
