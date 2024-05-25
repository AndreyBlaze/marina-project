import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-tariff-dialog',
  standalone: true,
  imports: [MatSnackBarModule, FormsModule, ReactiveFormsModule],
  templateUrl: './send-tariff-dialog.component.html',
  styleUrl: './send-tariff-dialog.component.scss'
})
export class SendTariffDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private snack = inject(MatSnackBar);
  private data: string = inject(MAT_DIALOG_DATA);
  private dialog = inject(MatDialogRef<SendTariffDialogComponent>);

  form = this.fb.group({
    name: '',
    phone: '',
    email: ''
  });

  send() {
    const data = {tariff: this.data, ...this.form.value as {phone: string, email: string, name: string}}
    this.api.setEducationTariff(data).subscribe(res => {
      if (res.state) {
        this.snack.open("Ваша заявка успешно отправлена!", 'Закрыть', {
          duration: 3000
        });
        this.form.reset();
        this.dialog.close();
      }
    })
  }
}
