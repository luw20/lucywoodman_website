import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class ProjectsComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {

   }

   alertFunction(){
     this.matDialog.open(ModalComponent, {
       width: '300px'
     });
   }

   closeModal(){
     this.matDialog.closeAll;
   }
}