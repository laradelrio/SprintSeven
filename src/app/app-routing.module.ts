import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', redirectTo:''},
  {path:'welcome', component: WelcomePageComponent},
  {path:'**', redirectTo:'/welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
