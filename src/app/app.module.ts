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

import { TotalQuoteService } from './service/totalQuote/total-quote.service';
import { NglrxPipesModule } from '@nglrx/pipes';
import { SortDirective } from './directives/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomePageComponent,
    PopupComponent,
    NavbarComponent,
    ClientQuoteListComponent,
    SortDirective,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NglrxPipesModule,
  ],
  providers: [
    CompanyServicesService,
    TotalQuoteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}


