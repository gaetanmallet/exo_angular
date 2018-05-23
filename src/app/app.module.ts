import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PropertyData } from './property/property-data';

import { AppRoutingModule } from './app-routing.module';
import { PropertyModule } from './property/property.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';
import { StateService } from './shared/services/state.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PropertyData),
    PropertyModule,
    AppRoutingModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
