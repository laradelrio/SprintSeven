import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TotalBudgetService } from 'src/app/service/totalBudget/total-budget.service';

@Component({
  selector: 'app-client-quote-form',
  templateUrl: './client-quote-form.component.html',
  styleUrls: ['./client-quote-form.component.scss']
})
export class ClientQuoteFormComponent {

  clientQuoteForm: FormGroup; //FormGRoup manages and controls form data and validation

  clientData: { dataType: string}[] = [
    { dataType: "Name" },
    { dataType: "Quote"},
  ];

  constructor(
    private fb: FormBuilder, //Form builder is theform model associated with the HTML form in the template.
    public totalBudgetService: TotalBudgetService,
    
  ) {
    this.clientQuoteForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2),]],
      Quote: ['', [Validators.required, Validators.min(200)]],
    });
    
  }

  fillClientQuote(quote:number): void{
    this.clientQuoteForm.controls['Quote'].setValue(quote);
  }
 
  //if the form is valid
  isValid(): boolean{
    return  this.clientQuoteForm.valid
  }
 

 


}
