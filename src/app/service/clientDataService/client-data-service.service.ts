import { Injectable } from '@angular/core';
import { ClientData } from 'src/app/interfaces/clientData.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientDataServiceService {

  constructor() { }

  clientData: ClientData[] = [
    { dataType: "clientName", label: " Client Name" },
    { dataType: "quoteName", label: "Quote Name" },
  ];

}
