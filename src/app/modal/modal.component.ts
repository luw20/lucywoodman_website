import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    subheader: string,
    body: string
  }, public dialogRef: MatDialogRef<ModalComponent>) { }

  actionFunction() {
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit(){
  }
}
