import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './user/products/details/details.component';
import { ProductsComponent } from './user/products/products.component';
import { MacComponent } from './user/mac/mac.component';
import { IPhoneComponent } from './user/iphone/iphone.component';
import { IpadComponent } from './user/ipad/ipad.component';
import { TvComponent } from './user/tv/tv.component';
import { WatchComponent } from './user/watch/watch.component';
import { MusicComponent } from './user/music/music.component';
import { HomeComponent } from './user/home/home.component';
import { SupportComponent } from './user/support/support.component';
import { IpadContentComponent } from './user/ipad/ipad-content/ipad-content.component';
import { IphoneContentComponent } from './user/iphone/iphone-content/iphone-content.component';
import { MacContentComponent } from './user/mac/mac-content/mac-content.component';
import { MusicContentComponent } from './user/music/music-content/music-content.component';
import { WatchContentComponent } from './user/watch/watch-content/watch-content.component';
import { TvContentComponent } from './user/tv/tv-content/tv-content.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"apple",component:HomeComponent},
  {path:"product",component:ProductsComponent},
  {path:"Mac",component:MacComponent},
  {path:"iPhone",component:IPhoneComponent},
  {path:"iPad",component:IpadComponent},
  {path:"tv",component:TvComponent},
  {path:"Watch",component:WatchComponent},
  {path:"Music",component:MusicComponent},
  {path:"Support",component:SupportComponent},
  {path:"ipad-content/:id",component:IpadContentComponent},
  {path:"iphone-content/:id",component:IphoneContentComponent},
  {path:"mac-content/:id",component:MacContentComponent},
  {path:"music-content/:id",component:MusicContentComponent},
  {path:"watch-content/:id",component:WatchContentComponent},
  {path:"tv-content/:id",component:TvContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
