import {Routes}from '@angular/router'
import {HomeComponent} from './home/home.component'
import { ImgsComponent } from './imgs/imgs.component';
export const appRoutes:Routes=[
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent}
];