import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MacComponent } from './mac/mac.component';
import { MaterialModule } from '../material/material.module';
import { IpadComponent,} from './ipad/ipad.component';
import { IPhoneComponent } from './iphone/iphone.component';
import { WatchComponent } from './watch/watch.component';
import { TvComponent } from './tv/tv.component';
import { MusicComponent } from './music/music.component';
import { SupportComponent } from './support/support.component';
const route:Routes=[
  {
  path:"home",
  component: HomeComponent,
  // children: [
  //   {
  //     path: "",
  //     component: UserhomeComponent
  //   }
    // ,
    // {
    //   path:"details",
    //   component: DetailsComponent
    // }
  // ]
}

]
@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    FormsModule,
    
  ]
})
export class UserModule { }
