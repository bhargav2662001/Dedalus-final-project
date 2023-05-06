import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule
  ]
  
})
export class AdminModule { }
