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


  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

   //Redirects you to my LinkedIn profile
   redirectLinkedIn(){
    window.location.href = "https://www.linkedin.com/in/lucy-woodman-3bb762129/";
  }

  //Redirects you to my GitHub profile
  redirectGitHub(){
    window.location.href = "https://github.com/luw20";
  }

  //function for sticky header
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= 125){
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  
  } 


