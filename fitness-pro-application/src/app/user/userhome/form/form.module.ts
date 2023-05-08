import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from 'src/app/shared/mainpage/mainpage.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormComponent } from './form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path: '', component: FormComponent },
    
  ];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(route),
  ]
})
export class FormModule {}
