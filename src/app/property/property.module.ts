import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './property-list.component';
import { PropertyEditComponent } from './property-edit.component';
import { PropertyDetailsComponent } from './property-details.component';

import { PropertyService } from './property.service';
import { FilterPipe } from '../shared/pipes/filter';
import { StarsPipe } from '../shared/pipes/stars';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PropertyListComponent,
    PropertyEditComponent,
    PropertyDetailsComponent,
    FilterPipe,
    StarsPipe
  ],
  providers: [PropertyService]
})
export class PropertyModule { }
