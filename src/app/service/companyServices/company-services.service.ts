import { Injectable } from '@angular/core';
import { CompanyService } from '../../interfaces/companyService.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyServicesService {

  constructor() {}
  //interface
  companyServices: CompanyService[] = [
    {label: "Make a Web Site",
    price: 500,
    id: "website",
    },
    {label: "SEO campaign",
    price: 300,
    id: "seo",
    },
    {label: "Publicity campaign",
    price: 200,
    id: "publicity",
    },
  ]
}
