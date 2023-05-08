import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
},
{
  path:"add-diet-plan",
  component: DietPlanComponent,
},
{
  path:"delete-diet-plan",
  component: DietPlanComponent,
  
}]

@NgModule({
  declarations: [
    HomeComponent,
  
    DietPlanComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class AdminModule { }
