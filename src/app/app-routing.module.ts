import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';
import { PropertyListComponent } from './property/property-list.component';
import { PropertyEditComponent } from './property/property-edit.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'login', component: LoginComponent },
  {path: 'property-list', component: PropertyListComponent },
  {path: 'property-edit', component: PropertyEditComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
