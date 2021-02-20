import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ModalServiceService } from 'src/app/modal-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class ProjectsComponent implements OnInit {

  constructor(public matDialog: MatDialog, public dialogService: ModalServiceService) { 
   
  }

  ngOnInit(): void {

   }

   alertFunction(){
    const options = {
      title: 'Password Generator',
      body: 'This is my password generator'
    };
     this.dialogService.open(options);
   }

   closeModal(){
     this.matDialog.closeAll;
   }
}