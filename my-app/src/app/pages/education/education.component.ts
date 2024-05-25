import { Component, inject } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog'
import { SendTariffDialogComponent } from '../../components/dialogs/send-tariff-dialog/send-tariff-dialog.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  dialog = inject(MatDialog)
  
  sendTariff(tariff: string) {
    this.dialog.open(SendTariffDialogComponent, {
      data: tariff
    });
  }
}
