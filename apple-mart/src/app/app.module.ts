import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './user/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MacComponent } from './user/mac/mac.component';
import { WatchComponent } from './user/watch/watch.component';
import { TvComponent } from './user/tv/tv.component';
import { MusicComponent } from './user/music/music.component';
import { SupportComponent } from './user/support/support.component';
import { IpadComponent } from './user/ipad/ipad.component';
import { IPhoneComponent } from './user/iphone/iphone.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MacComponent,
    WatchComponent,
    TvComponent,
    MusicComponent,
    SupportComponent,
    IpadComponent,
    IPhoneComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MaterialModule,
     MatToolbarModule,
    HttpClientModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
