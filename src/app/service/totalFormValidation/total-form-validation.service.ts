import { Injectable } from '@angular/core';
import { CompanyServicesService } from '../companyServices/company-services.service';
import { PanelComponent } from 'src/app/home/components/panel/panel.component';

@Injectable({
  providedIn: 'root'
})
export class TotalFormValidationService {

  constructor( public companyServicesService: CompanyServicesService) { }

  validate(){
    let companyService = this.companyServicesService.companyServices;
  if(companyService[0].checked){
    





  }

}
 //if web checked (push to array and check panel validtion and if valid push to array)

  //if at least one checked, push to services, array

  //if pages valid // push to array


  //CHECKED SERVICES IS IN COMPANY SERVICE, -- check if any active
  //PANEL 
  checkedServices(){

  }
}
