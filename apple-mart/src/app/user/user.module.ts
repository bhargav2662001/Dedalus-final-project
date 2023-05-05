import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductBoxComponent } from './products/product-box/product-box.component';
import { DetailsComponent } from './products/details/details.component';
import { MaterialModule } from '../material/material.module';
import { IpadContentComponent } from './ipad/ipad-content/ipad-content.component';
import { IphoneContentComponent } from './iphone/iphone-content/iphone-content.component';
import { MacContentComponent } from './mac/mac-content/mac-content.component';
import { MusicContentComponent } from './music/music-content/music-content.component';
import { WatchContentComponent } from './watch/watch-content/watch-content.component';
import { TvContentComponent } from './tv/tv-content/tv-content.component';
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
   
           ProductsComponent,
           ProductBoxComponent,
           DetailsComponent,
           IpadContentComponent,
           IphoneContentComponent,
           MacContentComponent,
           MusicContentComponent,
           WatchContentComponent,
           TvContentComponent
         
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    FormsModule,
    
  ]
})
export class UserModule { }
