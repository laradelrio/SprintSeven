import { Injectable } from '@angular/core';
import { CompanyService } from '../../interfaces/companyService.interface';
import { websitePanelData } from 'src/app/interfaces/websitePanelData.interface';

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

  websitePanelData: websitePanelData[] = [
    { name: "pages", label: "Number of Pages", valueChanged: false},
    { name: "languages", label: "Number of Languages", valueChanged: false},
  ];
}
