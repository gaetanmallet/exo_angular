import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { IProperty } from './property';
import { Router } from '@angular/router';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  private properties: IProperty[];
  private showPicture: boolean;
  constructor(private propertyService: PropertyService, private router: Router, private stateService: StateService) {
  }

  ngOnInit(): void {
    // Retrieve properties list
    this.propertyService.getProperties().subscribe((propertiesData) => {
      this.properties = propertiesData;
    });
  }

  // Show/Hide Property picture
  private displayProperty(property): void {
    property.displayed = !property.displayed;
  }

  // Edit property
  private edit(property): void {
    this.stateService.notifyDataChanged('property', property);
    this.router.navigate(['/property-edit']);
  }
}
