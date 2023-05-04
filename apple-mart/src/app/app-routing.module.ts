import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MacComponent } from './user/mac/mac.component';
import { IpadComponent } from './user/ipad/ipad.component';
import { IPhoneComponent } from './user/iphone/iphone.component';
import { MusicComponent } from './user/music/music.component';
import { SupportComponent } from './user/support/support.component';
import { TvComponent } from './user/tv/tv.component';
import { WatchComponent } from './user/watch/watch.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"Mac",component:MacComponent},
  {path:"iPad",component:IpadComponent},
  {path:"iPhone",component:IPhoneComponent},
  {path:"Watch",component:WatchComponent},
  {path:"tv",component:TvComponent},
  {path:"Music",component:MusicComponent},
  {path:"Support",component:SupportComponent},
  {path:"apple",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
