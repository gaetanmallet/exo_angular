import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/services/state.service';
import { IProperty } from './property';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
  private property: IProperty;
  private propertyForm: FormGroup;
  constructor(private stateService: StateService) {
    this.propertyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surface: new FormControl('', [Validators.required]),
      accessibility: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
      energyClass: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(200)]),
      imageUrl: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.property = this.stateService.data['property'];
  }

  private save(): void {
    if (this.propertyForm.invalid) {
      this.getFormValidationErrors();
    }
  }

  private getFormValidationErrors() {
    Object.keys(this.propertyForm.controls).forEach(key => {

    const controlErrors: ValidationErrors = this.propertyForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
}
