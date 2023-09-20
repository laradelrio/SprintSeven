import { Injectable } from '@angular/core';

import { AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

     //first function returns a customm validation function of type ValidatorFn
     requireCheckboxesToBeCheckedValidator(minCheckedRequired=1):ValidatorFn{
      // minCheckedRequired -->optional parameter set to defaul 1 
      
      //actual validator function, receives fromGroup paramater
      return function customValidate(formGroup:AbstractControl){
        if (!(formGroup instanceof FormGroup)) {
          return null; // If not a FormGroup, return null
        }
       
        let checked = 0;
  
        //the object is the fromGroup and the keys are the form parts
        Object.keys(formGroup.controls).forEach( (key) => {
          const control = formGroup.controls[key];
          
          if(control.value === true){
            checked++
          }
        });
  
        if (checked < minCheckedRequired){
          return {
            stillRequireOneCheckboxToBeChecked: true, 
          }
        }
  
        return null; //not reached min mumber of checkboxed, null
      };
    }

  }
  
   


