import { Component, OnInit, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  //Listens for a click on the menu button. Opens and closes the menu accordingly
  @HostListener('document:click', ['$event.target'])
  showHideMenuOnClick(targetElement): void{

    const clickedButton = this.elementRef.nativeElement.contains(targetElement);
    const menu = document.getElementById("hamburger-container");

   if(clickedButton){

     //If the menu isn't visible, expand it
      menu.style.transition = "all .5s"; //expand and retract smoothly   
   if(menu.offsetWidth == 0){
      menu.style.width = "250px";
   }

   //If the menu is visible, retract it
   else{
    menu.style.width = "0px";
   }

  }

  //If we click outside the button (i.e click on the background), close the menu
  else if(!clickedButton){
    menu.style.width = "0px";
  }
  }
}
