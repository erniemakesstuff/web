import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BloodStockService } from '../../blood-stock.service';

export interface DialogData {
  bloodProductID: number;
  bloodType: string;
  quantityInStock: number;
}

@Component({
    selector: 'app-all-bloodStock-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss'],
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButtonModule,
        MatDialogClose,
    ]
})
export class BloodStockDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<BloodStockDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public bloodStockService: BloodStockService
  ) {}
  confirmDelete(): void {
    this.bloodStockService
      .deleteBloodStock(this.data.bloodProductID)
      .subscribe({
        next: (response) => {
          // console.log('Delete Response:', response);
          this.dialogRef.close(response); // Close with the response data
          // Handle successful deletion, e.g., refresh the table or show a notification
        },
        error: (error) => {
          console.error('Delete Error:', error);
          // Handle the error appropriately
        },
      });
  }
}
