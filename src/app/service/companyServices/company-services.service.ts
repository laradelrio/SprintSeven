import { Injectable } from '@angular/core';
import { CompanyService } from '../../interfaces/companyService.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyServicesService {

  constructor() {}
  //interface
  companyServices: CompanyService[] = [
    {name: "Make a Web Site",
    price: 500,
    checked: false,
    id: "website"
    },
    {name: "SEO campaign",
    price: 300,
    checked: false,
    id: "seo"
    },
    {name: "Publicity campaign",
    price: 200,
    checked: false,
    id: "publi"
    },
  ]
}
