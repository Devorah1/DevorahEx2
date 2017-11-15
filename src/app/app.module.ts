import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import {NavComponent} from "./nav/nav.component";
import {RouterModule} from "@angular/router"
import { HomeComponent } from './home/home.component';
import { ImgsComponent } from './imgs/imgs.component';
import{appRoutes}from './app.route'
import {NavService} from "./service/nav.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    NavComponent,
    HomeComponent,
    ImgsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
    
  ],
  providers: [
NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }