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

   projectOneFunction(){
    const options = {
      title: 'Password Generator',
      subheader: 'Technologies Used: Java, MySQL',
      body: 'This Java application generates a secure password, encrypts it, and stores it on a MySQL database.'
    };
     this.dialogService.open(options);
   }

   projectTwoFunction(){
    const options = {
      title: 'Vigenere Cipher',
      subheader: 'Le Vigenere',
      body: 'This is my Vigenere Cipher'
    };
     this.dialogService.open(options);
   }

   closeModal(){
     this.matDialog.closeAll;
   }
}