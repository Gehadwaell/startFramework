import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
flag:boolean=true;
srcimg:string[]=[
'./assets/poert1.png',
'./assets/port2.png',
'./assets/port3.png',
'./assets/poert1.png',
'./assets/port2.png',
'./assets/port3.png',
]

fullImg:string='';
hideModel(element:EventTarget |null,img:HTMLImageElement):void{
if(element==img)return;
this.flag=true;
}
}
