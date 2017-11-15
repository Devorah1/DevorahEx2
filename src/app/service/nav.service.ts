import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
public navItems:NavItem[];
  constructor() {
    this.navItems=[
      new NavItem("Home","home"),
      new NavItem("My game","https://github.com/Devorah1"),
      new NavItem("Aboout",""),
    ]
   }
}
export class NavItem{
  
    constructor(public text:string, public url: string){
    } 
}