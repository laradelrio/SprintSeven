import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CompanyServicesService } from './service/companyServices/company-services.service';
import { PanelComponent } from './home/components/panel/panel.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PopupComponent } from './home/components/popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { ClientQuoteListComponent } from './home/components/client-quote-list/client-quote-list.component';
import { ClientQuoteFormComponent } from './home/components/client-quote-form/client-quote-form.component';
import { TotalBudgetService } from './service/totalBudget/total-budget.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomePageComponent,
    PopupComponent,
    NavbarComponent,
    ClientQuoteListComponent,
    ClientQuoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CompanyServicesService,
    TotalBudgetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}


