import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'

@Component({
  selector: 'app-send-request',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './send-request.component.html',
  styleUrl: './send-request.component.scss'
})
export class SendRequestComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private snack = inject(MatSnackBar);

  form = this.fb.group({
    name: '',
    phone: '',
    email: ''
  });

  send() {
    this.api.sendRequest(this.form.value as {phone: string, email: string, name: string}).subscribe(res => {
      if (res.state) {
        this.snack.open("Ваша заявка успешно отправлена!", 'Закрыть', {
          duration: 3000
        });
        this.form.reset();
      }
    })
  }
}
