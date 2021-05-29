import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css', ]
})

//Makes the footer sticky
export class MainLayoutComponent implements OnInit {
  @ViewChild('sticky') menuElement: ElementRef;
  elementPosition: any;


  sticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  
  } 


