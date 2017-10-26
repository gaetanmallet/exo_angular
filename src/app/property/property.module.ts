import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './property-list.component';
import { PropertyEditComponent } from './property-edit.component';
import { PropertyDetailsComponent } from './property-details.component';

import { PropertyService } from './property.service';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule
  ],
  declarations: [
    PropertyListComponent,
    PropertyEditComponent,
    PropertyDetailsComponent
  ],
  providers: [PropertyService]
})
export class PropertyModule { }
