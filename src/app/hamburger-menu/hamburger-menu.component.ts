import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target'])
  showMenuOnClick(): void{
   console.log("CLicked button");
   if(document.getElementById("hamburger-content").offsetWidth == 0){
    document.getElementById("hamburger-content").style.width = "250px";
   }

   else{
    document.getElementById("hamburger-content").style.width = "0px";
   }

  }
}
