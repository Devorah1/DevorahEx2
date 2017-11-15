import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgs',
  templateUrl: './imgs.component.html',
  styleUrls: ['./imgs.component.scss']
})
export class ImgsComponent implements OnInit {
    public images:  string[];
    public index: number;
    public urlImage:string;

    constructor() {
        this.index = 0;
        this.images = [
            "assets/a.JPG",
            "assets/b.JPG",
            "assets/c.JPG",
            "assets/d.JPG",
            ];
        this.urlImage=this.image;
        setInterval(() => {
            this.urlImage=this.image;
        },7000)

    }
    public get image():string{
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
    }
   

  ngOnInit() {
  }

}