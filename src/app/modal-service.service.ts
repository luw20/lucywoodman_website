import { Injectable} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ModalComponent } from 'src/app/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(public dialog: MatDialog) {}
  dialogRef: MatDialogRef<ModalComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(ModalComponent, {    
         data: {
           title: options.title,
           subheader: options.subheader,
           body: options.body
         }
    });
  }
 
}
